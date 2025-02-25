/**
 * Artist Autocomplete Module
 * 
 * Provides functionality for artist autocompletion and suggestion management.
 */

import { searchArtists, createArtistPill, formatArtist } from './artistUtils.js';
import { showMaxArtistWarning } from '../utils/modal.js';

/**
 * Initialize autocomplete functionality for an artist input
 *
 * @param {HTMLInputElement} inputEl - The artist input element
 * @param {HTMLElement} suggestionContainer - The container element for displaying suggestions
 * @param {HTMLElement} pillContainer - The container for artist pills
 * @param {Function} onChangeCallback - Callback function when artists are added/removed
 */
export function initArtistAutocomplete(inputEl, suggestionContainer, pillContainer, onChangeCallback) {
    // Listen for input events
    inputEl.addEventListener('input', function () {
        const query = inputEl.value.trim();
        console.log("Artist Input:", query);
        suggestionContainer.innerHTML = "";

        if (!query) return;

        // Search using artist utilities
        const results = searchArtists(query);
        console.log("Artist search results:", results);

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
            
            // Show post count if available
            if (result.item.postCount) {
                const countSpan = document.createElement('span');
                countSpan.className = 'post-count';
                countSpan.textContent = ` (${result.item.postCount} posts)`;
                itemDiv.appendChild(countSpan);
            }
            
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
                inputEl.value = firstSuggestion.textContent.replace(/\s*\(\d+ posts\)$/, '').trim();
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
                inputEl.value = firstSuggestion.textContent.replace(/\s*\(\d+ posts\)$/, '').trim();
            }
            
            const text = inputEl.value.trim();
            if (!text) return;
            
            // Get the card container to find and reset the dropdown
            const card = pillContainer.closest('.artist-card');
            
            // Check if this would be the second pill in this card
            const existingPills = pillContainer.querySelectorAll('.custom-tag-pill');
            
            if (existingPills.length > 0) {
                // There's already at least one pill, create a new artist card if possible
                if (typeof window.createArtistCard === 'function') {
                    // Check if we've reached the maximum artists
                    const artistCards = document.querySelectorAll('.artist-card');
                    const maxArtists = window.maxArtists || 4; // Default to 4 if not defined
                    
                    if (artistCards.length >= maxArtists) {
                        // Replace alert with modal warning
                        showMaxArtistWarning(maxArtists);
                        inputEl.value = '';
                        suggestionContainer.innerHTML = '';
                        return;
                    }
                    
                    // Create a new artist card
                    window.createArtistCard();
                    
                    // Get the new card (it should be the last one added)
                    const newCard = document.querySelector('.artist-card:last-child');
                    if (newCard) {
                        // Get the pill container and input of the new card
                        const newPillContainer = newCard.querySelector('.artist-pill-container');
                        const newInput = newCard.querySelector('.custom-artist-input');
                        
                        if (newPillContainer && newInput) {
                            // Add the pill to the new card
                            createArtistPill(text, newPillContainer, onChangeCallback);
                            // Update the card header
                            updateCardHeader(newCard, text);
                            // Clear the input fields
                            newInput.value = '';
                            inputEl.value = '';
                            suggestionContainer.innerHTML = '';
                            
                            // Call the callback when artists are added
                            if (typeof onChangeCallback === 'function') {
                                onChangeCallback();
                            }
                            return;
                        }
                    }
                }
            }
            
            // If we didn't create a new card, or there were no existing pills, proceed normally
            const pillCreated = createArtistPill(text, pillContainer, onChangeCallback);
            
            if (pillCreated && card) {
                // Reset the dropdown when adding a pill
                const select = card.querySelector("select[id^='artist-select-']");
                if (select) {
                    select.selectedIndex = 0;
                }
                
                // Update the card header with the artist name
                updateCardHeader(card, text);
            }
            
            inputEl.value = '';
            suggestionContainer.innerHTML = '';
            
            // Call the callback when artists are added
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
 * Updates the card header to display the selected artist name
 *
 * @param {HTMLElement} card - The artist card element
 * @param {string} artistName - The name of the selected artist
 */
function updateCardHeader(card, artistName) {
    const header = card.querySelector('.card-header');
    if (!header) return;
    
    // Find or create the title span
    let title = header.querySelector('span:not(.drag-handle)');
    if (!title) {
        title = document.createElement('span');
        header.appendChild(title);
    }
    
    // Format the artist name for display
    const formattedName = typeof formatArtist === 'function' ? 
        formatArtist(artistName) : 
        artistName.split(',')[0].trim();
    
    // Update the title text
    title.textContent = `Artist: ${formattedName}`;
}

/**
 * Adds required styling for autocomplete functionality
 */
export function addArtistAutocompleteStyling() {
    if (document.getElementById('artist-suggestions-style')) return;
    
    const style = document.createElement('style');
    style.id = 'artist-suggestions-style';
    style.textContent = `
        .custom-search-wrapper {
            position: relative;
        }
        .artist-suggestions-list {
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
        .post-count {
            font-size: 0.85em;
            color: #aaa;
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
        .artist-pill-container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 8px;
            min-height: 30px;
        }
    `;
    document.head.appendChild(style);
} 