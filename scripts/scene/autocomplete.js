/**
 * Scene Autocomplete Module
 * 
 * Provides functionality for scene tag autocompletion and suggestion management.
 */

import { searchTags, createTagPill } from './tagUtils.js';
import logger from '../utils/logger-init.js';

/**
 * Initialize autocomplete functionality for a scene tag input
 *
 * @param {HTMLInputElement} inputEl - The scene tag input element
 * @param {HTMLElement} suggestionContainer - The container element for displaying suggestions
 * @param {HTMLElement} pillContainer - The container for tag pills
 * @param {Function} onChangeCallback - Callback function when tags are added/removed
 */
export function initSceneTagAutocomplete(inputEl, suggestionContainer, pillContainer, onChangeCallback) {
    // Listen for input events
    inputEl.addEventListener('input', function () {
        const query = inputEl.value.trim();
        logger.debug("Scene Tag Input:", query);
        suggestionContainer.innerHTML = "";

        if (!query) return;

        // Search using sceneTagUtils
        const results = searchTags(query);
        logger.debug("Search results:", results);

        // Clear any previous positioning
        suggestionContainer.style.display = 'block';
        
        // Display results
        results.forEach((result, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = "custom-suggestion-item";
            // Add a highlighted class to the first item for Tab selection
            if (index === 0) {
                itemDiv.classList.add('first-suggestion');
            }
            itemDiv.textContent = result.item.name;
            itemDiv.addEventListener('click', function () {
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
                inputEl.value = firstSuggestion.textContent;
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
                inputEl.value = firstSuggestion.textContent;
            }
            
            const text = inputEl.value.trim();
            if (!text) return;
            
            createTagPill(text, pillContainer, onChangeCallback);
            inputEl.value = '';
            suggestionContainer.innerHTML = '';
            
            // Call the callback when tags are added
            if (typeof onChangeCallback === 'function') {
                onChangeCallback();
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
export function addSceneAutocompleteStyling() {
    if (document.getElementById('scene-suggestions-style')) return;
    
    const style = document.createElement('style');
    style.id = 'scene-suggestions-style';
    style.textContent = `
        .custom-search-wrapper {
            position: relative;
        }
        .scene-suggestions-list {
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
        .custom-tag-pill {
            display: inline-block;
            background-color: #444;
            color: #fff;
            padding: 4px 8px;
            margin: 4px;
            border-radius: 12px;
            font-size: 0.9em;
        }
        .custom-tag-remove {
            margin-left: 6px;
            cursor: pointer;
            font-weight: bold;
        }
        .custom-tag-remove:hover {
            color: #ff6b6b;
        }
        .scene-pill-container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 8px;
            min-height: 30px;
        }
    `;
    document.head.appendChild(style);
} 