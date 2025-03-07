/**
 * Character Blocks Module
 * 
 * Provides functions for creating and managing character blocks in the UI.
 */

import { showMaxCharacterWarning } from '../../utils/modal.js';
import { cleanDisplayName } from '../utils/nameFormatter.js';
import { 
    updateTitleOptions, 
    updateCharacterDropdown, 
    updateGenderToggle,
    updateAgeUpToggle,
    updateEnhancerDropdown,
    resetCharacterDropdown,
    populateDefaultTagPills,
    closeAllDropdowns
} from '../ui/dropdowns.js';
import { 
    incrementCharacterCount, 
    getCurrentCharacterCount, 
    getMaxCharacters,
    decrementCharacterCount
} from '../state/characterState.js';
import { initCustomTagAutocomplete } from '../../customCharacter/ui/autocomplete.js';
import { createSearchBar } from '../search/searchBarComponent.js';
import { createFilterPanel } from '../search/filterPanelComponent.js';

/**
 * Creates and adds a new character block to the UI
 * 
 * @return {number|null} - The ID of the new character block or null if max reached
 */
export function addCharacterBlock() {
    const characterCount = getCurrentCharacterCount();
    const maxCharacters = getMaxCharacters();
    
    if (characterCount >= maxCharacters) {
        showMaxCharacterWarning(maxCharacters);
        return null;
    }

    const blockId = incrementCharacterCount();
    const container = document.getElementById('characters-container');

    // Main card element
    const div = document.createElement('div');
    div.className = 'character-block';
    div.id = 'character-' + blockId;

    // Make the character block a drop target for action assignments
    div.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    div.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Only show action popup if this is an action drag (not reordering)
        const isActionDrag = e.dataTransfer.getData("action-drag") === "true";
        if (!isActionDrag) {
            return; // Exit early if this is not an action drag
        }
        
        const sourceId = e.dataTransfer.getData("text/plain");
        const targetId = blockId.toString();
        if (sourceId && sourceId !== targetId) {
            if (typeof window.showActionSelectionPopup === 'function') {
                window.showActionSelectionPopup(sourceId, targetId);
            }
        }
    });

    // Header (collapsible)
    const headerDiv = document.createElement('div');
    headerDiv.className = 'block-header';
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';

    // Drag handle
    const dragHandle = document.createElement('span');
    dragHandle.className = 'drag-handle';
    dragHandle.textContent = "≡";
    dragHandle.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    headerDiv.appendChild(dragHandle);

    // Header title
    const headerTitle = document.createElement('span');
    headerTitle.className = 'block-title';
    headerTitle.textContent = `Character ${blockId}`;
    headerDiv.appendChild(headerTitle);

    // Toggle icon (▼ / ▲)
    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'toggle-icon';
    toggleIcon.textContent = "▼";
    headerDiv.appendChild(toggleIcon);

    // Remove button
    const removeButton = document.createElement('span');
    removeButton.className = 'remove-button';
    removeButton.textContent = "✖";
    removeButton.title = "Remove Character";
    removeButton.addEventListener('click', function (e) {
        e.stopPropagation();
        // Remove this character block
        div.remove();
        
        // Decrement the character count
        decrementCharacterCount();
        
        // Update action assignments
        if (typeof window.updateAllActionAssignments === "function") {
            setTimeout(window.updateAllActionAssignments, 100);
        }
        
        // Refresh action character options
        if (typeof window.refreshActionCharacterOptions === "function") {
            setTimeout(window.refreshActionCharacterOptions, 100);
        }
    });
    headerDiv.appendChild(removeButton);

    // Action Drag Handle
    const actionDragHandle = document.createElement('span');
    actionDragHandle.className = 'action-drag-handle';
    actionDragHandle.textContent = "🡆";
    actionDragHandle.setAttribute("draggable", "true");
    actionDragHandle.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData("text/plain", blockId.toString());
        e.dataTransfer.setData("action-drag", "true");
        e.dataTransfer.effectAllowed = "move";
        e.stopPropagation();
    });
    headerDiv.appendChild(actionDragHandle);

    // Collapsible content container
    const contentDiv = document.createElement('div');
    contentDiv.className = 'block-content';

    // Create and add the search container with integrated filter
    const searchContainer = createSearchBar(blockId);
    
    // Create the filter container
    const filterContainer = createFilterPanel(blockId);
    
    // Get the search-filter-container to add the filter inline
    const searchFilterContainer = searchContainer.querySelector('.search-filter-container');
    if (searchFilterContainer) {
        // Add the filter container to the beginning of searchFilterContainer (left side)
        searchFilterContainer.insertBefore(filterContainer, searchFilterContainer.firstChild);
    }
    
    contentDiv.appendChild(searchContainer);

    // Gender Dropdown for genderswap
    const genderDiv = document.createElement('div');
    genderDiv.id = 'gender-div-' + blockId;
    genderDiv.style.marginTop = '10px';
    contentDiv.appendChild(genderDiv);

    // Age Up Toggle
    const ageUpDiv = document.createElement('div');
    ageUpDiv.id = 'age-up-div-' + blockId;
    ageUpDiv.style.marginTop = '10px';
    contentDiv.appendChild(ageUpDiv);

    // Breast Size Slider (only visible for female characters with age up)
    const breastSizeDiv = document.createElement('div');
    breastSizeDiv.id = 'breast-size-div-' + blockId;
    breastSizeDiv.style.marginTop = '10px';
    breastSizeDiv.style.display = 'none'; // Hidden by default
    contentDiv.appendChild(breastSizeDiv);

    // Enhancer Dropdown
    const enhancerLabel = document.createElement('label');
    enhancerLabel.textContent = 'Enhancer:';
    contentDiv.appendChild(enhancerLabel);

    const enhancerDiv = document.createElement('div');
    enhancerDiv.className = 'custom-dropdown';
    enhancerDiv.id = 'enhancer-div-' + blockId;
    contentDiv.appendChild(enhancerDiv);

    // Custom Tag Section
    const customTagDiv = document.createElement('div');
    customTagDiv.id = 'custom-tag-div-' + blockId;
    customTagDiv.className = 'custom-tag-section';
    customTagDiv.style.marginTop = '15px';

    const customTagLabel = document.createElement('label');
    customTagLabel.textContent = 'Add Custom Tags:';
    customTagDiv.appendChild(customTagLabel);

    const customTagInput = document.createElement('input');
    customTagInput.type = 'text';
    customTagInput.className = 'custom-tag-input';
    customTagInput.placeholder = 'Type to add custom tags...';
    customTagDiv.appendChild(customTagInput);

    const customTagSuggestions = document.createElement('div');
    customTagSuggestions.className = 'tag-suggestions';
    customTagDiv.appendChild(customTagSuggestions);

    const pillContainer = document.createElement('div');
    pillContainer.className = 'custom-pill-container';
    customTagDiv.appendChild(pillContainer);

    // Initialize tag autocomplete
    initCustomTagAutocomplete(
        customTagInput, 
        customTagSuggestions, 
        pillContainer, 
        () => {
            // Optional callback when tags change
        },
        (tag) => {
            // Check if the tag is already in pillContainer
            const pills = pillContainer.querySelectorAll('.custom-tag-pill');
            return Array.from(pills).some(pill => 
                (pill.dataset.originalTag || pill.textContent.replace('×', '').trim()) === tag
            );
        }
    );

    contentDiv.appendChild(customTagDiv);

    // Add the header and content to the block
    div.appendChild(headerDiv);
    div.appendChild(contentDiv);

    // Toggle content when clicking the header
    headerDiv.addEventListener('click', () => {
        if (contentDiv.style.display === 'none') {
            contentDiv.style.display = 'block';
            toggleIcon.textContent = "▼";
        } else {
            contentDiv.style.display = 'none';
            toggleIcon.textContent = "▲";
        }
    });

    // No need for toggle dropdown listeners here since search and filter 
    // components handle their own events

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-dropdown')) {
            closeAllDropdowns();
        }
    });

    container.appendChild(div);
    
    // Update action assignments whenever a character is added
    if (typeof window.updateAllActionAssignments === "function") {
        setTimeout(window.updateAllActionAssignments, 100);
    }

    return blockId;
}

/**
 * Adds a random character block of specified type
 * 
 * @param {string} type - Type filter for random character ("all", "vg", or "media")
 * @return {number|null} - The ID of the new character block or null if failed
 */
export function addRandomCharacterBlock(type) {
    // type: "all", "vg", or "media"
    const blockId = addCharacterBlock();
    if (!blockId) return null;

    // Filter characterData based on type
    let filtered = characterData;
    if (type === "vg") {
        filtered = characterData.filter(item => item.mediaType === "Video Games");
    } else if (type === "media") {
        filtered = characterData.filter(item => item.mediaType === "Shows or Movies");
    }

    if (filtered.length === 0) return null;

    // Pick a random character
    const randomCharacter = filtered[Math.floor(Math.random() * filtered.length)];

    // Get the character block
    const characterBlock = document.getElementById(`character-${blockId}`);
    if (!characterBlock) return null;

    // Find the search input
    const searchInput = characterBlock.querySelector('.character-search-input');
    if (searchInput) {
        // Set search input value with character name and media
        const displayName = cleanDisplayName(randomCharacter.name);
        const mediaSource = cleanDisplayName(randomCharacter.category);
        searchInput.value = `${displayName} (${mediaSource})`;
        
        // Directly select the character
        // This will trigger all necessary updates
        import('../search/searchBarComponent.js').then(module => {
            if (module.default && typeof module.default.selectCharacter === 'function') {
                module.default.selectCharacter(blockId, randomCharacter);
            } else {
                // Fallback: Update components directly
                updateGenderToggle(blockId, randomCharacter.name);
                updateAgeUpToggle(blockId, randomCharacter.name);
                updateEnhancerDropdown(blockId, randomCharacter.name);
                
                // Update the character block title
                const blockTitle = characterBlock.querySelector('.block-title');
                if (blockTitle) {
                    blockTitle.textContent = `${displayName} (${mediaSource})`;
                }
                
                // Populate default tag pills for this character
                populateDefaultTagPills(blockId, randomCharacter);
            }
        });
    }

    return blockId;
}

// Note: resetCharacterDropdown is now imported from ../ui/dropdowns.js
// instead of being defined here 