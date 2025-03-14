/**
 * Autocomplete UI Module
 * 
 * Provides functionality for custom tag autocompletion and suggestion management.
 */

import { searchTags, createTagPill, formatTag } from '../utils/tagUtils.js';
import logger from '../../utils/logger-init.js';

/**
 * Initialize autocomplete functionality for a custom tag input
 *
 * @param {HTMLInputElement} inputEl - The custom tag input element
 * @param {HTMLElement} suggestionContainer - The container element for displaying suggestions
 * @param {HTMLElement} pillContainer - The container for tag pills
 * @param {Function} onChangeCallback - Callback function when tags are added/removed
 * @param {Function} isDuplicateCallback - Optional callback to check if a tag is a duplicate
 * @param {Function} getExternalTagsCallback - Optional callback to get tags from other sources (like base character)
 */
export function initCustomTagAutocomplete(inputEl, suggestionContainer, pillContainer, onChangeCallback, isDuplicateCallback, getExternalTagsCallback) {
    // Listen for input events
    inputEl.addEventListener('input', function () {
        const query = inputEl.value.trim();
        logger.debug("Custom Tag Input:", query);
        suggestionContainer.innerHTML = "";

        if (!query) return;

        // Get current tags to filter out from suggestions
        const existingTags = Array.from(pillContainer.querySelectorAll('.custom-tag-pill'))
            .map(pill => pill.dataset.originalTag);

        // Get external tags (like base character tags) if callback is provided
        const externalTags = typeof getExternalTagsCallback === 'function' 
            ? getExternalTagsCallback() 
            : [];

        // Search using tagUtils
        const results = searchTags(query);
        logger.debug("Search results:", results);

        // Filter out existing tags and external tags from results
        const filteredResults = results.filter(result => 
            !existingTags.includes(result.item.name) && 
            !externalTags.includes(result.item.name));

        // Clear any previous positioning
        suggestionContainer.style.display = 'block';
        
        // Display filtered results
        filteredResults.forEach((result, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = "custom-suggestion-item";
            // Add a highlighted class to the first item for Tab selection
            if (index === 0) {
                itemDiv.classList.add('first-suggestion');
            }
            
            // Store the original tag name with underscores as a data attribute
            itemDiv.dataset.originalTag = result.item.name;
            
            // Display the formatted version (with spaces instead of underscores)
            itemDiv.textContent = formatTag(result.item.name);
            
            itemDiv.addEventListener('click', function () {
                // Set the input value to the original tag (with underscores)
                inputEl.value = result.item.name;
                suggestionContainer.innerHTML = "";
            });
            suggestionContainer.appendChild(itemDiv);
        });
    });

    // Add Tab key functionality to select the first suggestion
    inputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && suggestionContainer.children.length > 0) {
            e.preventDefault(); // Prevent default tab behavior
            const firstSuggestion = suggestionContainer.querySelector('.first-suggestion');
            if (firstSuggestion) {
                // Use the original tag value with underscores from the data attribute
                inputEl.value = firstSuggestion.dataset.originalTag;
                suggestionContainer.innerHTML = "";
            }
        }
    });

    // Listen for Enter key to add a pill
    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            
            // First, check if there's a suggestion to select
            const firstSuggestion = suggestionContainer.querySelector('.first-suggestion');
            if (firstSuggestion && suggestionContainer.children.length > 0) {
                // Auto-select the first suggestion
                inputEl.value = firstSuggestion.dataset.originalTag;
            }
            
            const text = inputEl.value.trim();
            if (!text) return;
            
            // Check if tag already exists before adding
            const existingTags = Array.from(pillContainer.querySelectorAll('.custom-tag-pill'))
                .map(pill => pill.dataset.originalTag);
            
            // Get external tags (like base character tags) if callback is provided
            const externalTags = typeof getExternalTagsCallback === 'function' 
                ? getExternalTagsCallback() 
                : [];
            
            // Check if the tag is a duplicate using the callback or if it exists in custom or external tags
            const isDuplicate = existingTags.includes(text) || 
                externalTags.includes(text) ||
                (typeof isDuplicateCallback === 'function' && isDuplicateCallback(text));
            
            if (!isDuplicate) {
                // Create the tag pill directly
                createTagPill(text, pillContainer, onChangeCallback);
                
                // Log the tag addition
                import('../../utils/logger-init.js').then(module => {
                    const logger = module.default;
                    
                    // Try to find the character block that contains this pill container
                    const characterBlock = pillContainer.closest('[id^="character-"]');
                    let characterName = "Unknown";
                    let blockId = null;
                    
                    if (characterBlock) {
                        blockId = characterBlock.id.replace('character-', '');
                        characterName = characterBlock.dataset.character || "Unknown";
                    } else {
                        // If we can't find the character block, try to extract from the container ID
                        const containerIdMatch = pillContainer.id ? pillContainer.id.match(/\d+/) : null;
                        if (containerIdMatch) {
                            blockId = containerIdMatch[0];
                            // Try to find the character block using the extracted ID
                            const possibleBlock = document.getElementById(`character-${blockId}`);
                            if (possibleBlock) {
                                characterName = possibleBlock.dataset.character || "Unknown";
                            }
                        }
                    }
                    
                    if (blockId) {
                        // Use batch logging for consistency with other character updates
                        logger.batch(
                            `character-update-${blockId}`,
                            logger.LOG_LEVELS.INFO,
                            'info',
                            `Character ${characterName} updated`,
                            `addedTag: ${text}`
                        );
                    } else {
                        // Fallback to regular logging if we can't determine the block ID
                        logger.info(`Tag added: ${text}`);
                    }
                });
                
                // Clear input and suggestions
                inputEl.value = '';
                suggestionContainer.innerHTML = '';
                
                // Call the callback if provided
                if (typeof onChangeCallback === 'function') {
                    onChangeCallback();
                }
            } else {
                // Optionally provide visual feedback that tag already exists
                inputEl.classList.add('duplicate-tag');
                setTimeout(() => {
                    inputEl.classList.remove('duplicate-tag');
                }, 500);
                
                // Clear the input
                inputEl.value = '';
                suggestionContainer.innerHTML = '';
            }
        }
    });

    // Clear suggestions on outside click
    document.addEventListener('click', e => {
        if (!inputEl.contains(e.target) && !suggestionContainer.contains(e.target)) {
            suggestionContainer.innerHTML = "";
        }
    });
}

/**
 * Adds required styling for autocomplete functionality
 */
export function addAutocompleteStyling() {
    if (document.getElementById('custom-suggestions-style')) return;
    
    const style = document.createElement('style');
    style.id = 'custom-suggestions-style';
    style.textContent = `
        .custom-search-wrapper {
            position: relative;
        }
        .custom-suggestions-list {
            position: absolute;
            top: 100%; /* Position right below the search input */
            left: 0;
            background: #333;
            border: 1px solid #555;
            border-top: none;
            max-height: 200px;
            overflow-y: auto;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .custom-suggestion-item {
            padding: 8px 12px;
            cursor: pointer;
            color: #ddd;
        }
        .custom-suggestion-item:hover, .first-suggestion {
            background-color: #444;
        }
        .duplicate-tag {
            animation: duplicateShake 0.5s ease-in-out;
            border-color: #ff6b6b !important;
        }
        @keyframes duplicateShake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Utility function to get all tags from character blocks
 * 
 * @param {string|number} [characterId] - Optional character ID to get tags only from that character
 * @return {Array} - Array of tags from character blocks
 */
export function getAllCharacterTags(characterId) {
    const characterTags = [];
    const maxCharacters = 4; // This should match the value in characterState.js
    
    // Process standard character blocks
    for (let i = 1; i <= maxCharacters; i++) {
        // Skip if we're looking for a specific character and this isn't it
        if (characterId !== undefined && i !== parseInt(characterId)) {
            continue;
        }
        
        const block = document.getElementById('character-' + i);
        if (!block) continue;
        
        // Check for the pill container which holds all the character tags
        const pillContainer = block.querySelector('.custom-pill-container');
        if (!pillContainer) continue;
        
        // Get all tag pills (both default and custom)
        const tagPills = pillContainer.querySelectorAll('.custom-tag-pill');
        
        Array.from(tagPills).forEach(tagElement => {
            // Get the original tag from data attribute or text content (removing the × if present)
            const tagText = tagElement.dataset.originalTag || tagElement.textContent.replace('×', '').trim();
            characterTags.push(tagText);
        });
    }
    
    return characterTags;
} 