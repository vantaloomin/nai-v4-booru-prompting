/**
 * Autocomplete UI Module
 * 
 * Provides functionality for custom tag autocompletion and suggestion management.
 */

import { searchTags, createTagPill } from '../utils/tagUtils.js';

/**
 * Initialize autocomplete functionality for a custom tag input
 *
 * @param {HTMLInputElement} inputEl - The custom tag input element
 * @param {HTMLElement} suggestionContainer - The container element for displaying suggestions
 * @param {HTMLElement} pillContainer - The container for tag pills
 * @param {Function} onChangeCallback - Callback function when tags are added/removed
 */
export function initCustomTagAutocomplete(inputEl, suggestionContainer, pillContainer, onChangeCallback) {
    // Listen for input events
    inputEl.addEventListener('input', function () {
        const query = inputEl.value.trim();
        console.log("Custom Tag Input:", query);
        suggestionContainer.innerHTML = "";

        if (!query) return;

        // Get current tags to filter out from suggestions
        const existingTags = Array.from(pillContainer.querySelectorAll('.custom-tag-pill'))
            .map(pill => pill.dataset.originalTag);

        // Search using tagUtils
        const results = searchTags(query);
        console.log("Search results:", results);

        // Filter out existing tags from results
        const filteredResults = results.filter(result => 
            !existingTags.includes(result.item.name));

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
            
            // Check if tag already exists before adding
            const existingTags = Array.from(pillContainer.querySelectorAll('.custom-tag-pill'))
                .map(pill => pill.dataset.originalTag);
            
            if (!existingTags.includes(text)) {
                createTagPill(text, pillContainer, onChangeCallback);
                inputEl.value = '';
                suggestionContainer.innerHTML = '';
                
                // Call the callback when tags are added
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