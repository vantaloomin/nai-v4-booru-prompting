/**
 * Search Bar Component Module
 * 
 * Renders and manages the unified search input for character selection.
 * Handles real-time suggestions as users type.
 */

import { searchCharacters } from './characterSearch.js';
import { getActiveFilters, hasActiveFilters } from './characterFilters.js';
import { updateGenderToggle } from '../ui/components/genderToggle.js';
import { updateAgeUpToggle } from '../ui/components/ageUpToggle.js';
import { updateEnhancerDropdown } from '../ui/components/enhancerDropdown.js';
import { populateDefaultTagPills } from '../ui/components/tagPills.js';
import { initializeBreastSizeSlider } from '../ui/components/breastSizeSlider.js';
import { cleanDisplayName } from '../utils/nameFormatter.js';
import { closeAllDropdowns } from '../ui/components/dropdownCore.js';

/**
 * Create a search bar element for a character block
 * 
 * @param {number} blockId - Character block ID
 * @return {HTMLElement} - The search bar container element
 */
export function createSearchBar(blockId) {
    // Create container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'character-search-container';
    searchContainer.id = `search-container-${blockId}`;

    // Create label
    const searchLabel = document.createElement('label');
    searchLabel.textContent = 'Search for character or media:';
    searchContainer.appendChild(searchLabel);

    // Create a flex container for search and filter
    const searchFilterContainer = document.createElement('div');
    searchFilterContainer.className = 'search-filter-container';
    searchContainer.appendChild(searchFilterContainer);

    // Note: We'll now create the elements in reverse order (filter first, then search)
    // But will append them later once both are created, to maintain the proper filter-search order

    // Create search wrapper for positioning icons
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'search-wrapper';

    // Create search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'character-search-input';
    searchInput.id = `character-search-${blockId}`;
    searchInput.placeholder = 'Type character name, game, show...';
    searchInput.autocomplete = 'off';
    searchWrapper.appendChild(searchInput);

    // Create search icon (magnifying glass)
    const searchIcon = document.createElement('span');
    searchIcon.className = 'search-icon';
    searchIcon.innerHTML = '<i class="bx bx-search"></i>'; // Boxicons icon
    searchWrapper.appendChild(searchIcon);

    // Create clear button (X)
    const clearButton = document.createElement('span');
    clearButton.className = 'clear-icon';
    clearButton.innerHTML = '<i class="bx bx-x"></i>'; // Boxicons icon
    clearButton.id = `clear-search-${blockId}`;
    searchWrapper.appendChild(clearButton);

    // Create dropdown indicator for when filters are active
    const dropdownIndicator = document.createElement('span');
    dropdownIndicator.className = 'dropdown-indicator';
    dropdownIndicator.textContent = '▼';
    dropdownIndicator.style.display = 'none'; // Hidden by default
    searchWrapper.appendChild(dropdownIndicator);

    // Create suggestions container
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'suggestions-list';
    suggestionsContainer.id = `search-suggestions-${blockId}`;
    suggestionsContainer.style.display = 'none';
    searchWrapper.appendChild(suggestionsContainer);

    // Now add the elements to the searchFilterContainer in the desired order:
    // First filter (will be added in characterBlocks.js), then search
    searchFilterContainer.appendChild(searchWrapper);

    // Set up event listeners
    initSearchEvents(blockId, searchInput, clearButton, suggestionsContainer, dropdownIndicator);

    // Update dropdown indicator based on current filter state
    updateSearchDropdownIndicator(blockId, dropdownIndicator);

    return searchContainer;
}

/**
 * Initialize search-related event listeners
 * 
 * @param {number} blockId - Character block ID
 * @param {HTMLElement} searchInput - The search input element
 * @param {HTMLElement} clearButton - The clear button element
 * @param {HTMLElement} suggestionsContainer - The suggestions container
 * @param {HTMLElement} dropdownIndicator - The dropdown indicator element
 */
function initSearchEvents(blockId, searchInput, clearButton, suggestionsContainer, dropdownIndicator) {
    // Input event for real-time suggestions
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        // Clear button visibility
        clearButton.style.display = query ? 'block' : 'none';
        
        // Update suggestions
        updateSuggestions(blockId, query, suggestionsContainer);
        
        // Update search input style
        updateSearchStyle(searchInput, dropdownIndicator);
    });

    // Focus event to show dropdown
    searchInput.addEventListener('focus', function() {
        const query = this.value.trim();
        
        // If there's a query, or filters are active, show suggestions
        if (query || hasActiveFilters()) {
            updateSuggestions(blockId, query, suggestionsContainer, true);
        }
        
        // Update search input style when focused
        searchInput.classList.add('active');
    });
    
    // Click event to show dropdown when filters are active (even if no focus)
    searchInput.addEventListener('click', function() {
        // If filters are active, show suggestions
        if (hasActiveFilters()) {
            updateSuggestions(blockId, this.value.trim(), suggestionsContainer, true);
        }
    });
    
    // Blur event to update styling
    searchInput.addEventListener('blur', function() {
        // Only hide suggestions if not interacting with them
        setTimeout(() => {
            if (!document.activeElement || !suggestionsContainer.contains(document.activeElement)) {
                searchInput.classList.remove('active');
            }
        }, 100);
    });

    // Clear button click
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        suggestionsContainer.style.display = 'none';
        suggestionsContainer.innerHTML = '';
        this.style.display = 'none';
        
        // Update search input style
        updateSearchStyle(searchInput, dropdownIndicator);
    });

    // Click outside to close suggestions
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
            searchInput.classList.remove('active');
        }
    });
    
    // Listen for filter changes to update dropdown indicator
    document.addEventListener('filters-changed', function() {
        updateSearchDropdownIndicator(blockId, dropdownIndicator);
    });
}

/**
 * Performs natural sorting, handling numbers correctly (1, 2, 3, 10, 11 instead of 1, 10, 11, 2, 3)
 * 
 * @param {string} a - First string to compare
 * @param {string} b - Second string to compare
 * @param {Function} getValueFn - Optional function to extract the value to sort by
 * @return {number} - -1, 0, or 1 for sorting
 */
function naturalSort(a, b, getValueFn) {
    // If a getValue function is provided, use it to extract the values to compare
    const aValue = getValueFn ? getValueFn(a) : a;
    const bValue = getValueFn ? getValueFn(b) : b;
    
    // Convert to strings and handle null/undefined
    const aStr = String(aValue || '').toLowerCase();
    const bStr = String(bValue || '').toLowerCase();
    
    // Special handling for "Final Fantasy" series
    const ffRegex = /^final fantasy (\d+(-\d+)?)/i;
    const aFFMatch = aStr.match(ffRegex);
    const bFFMatch = bStr.match(ffRegex);
    
    // If both are Final Fantasy titles
    if (aFFMatch && bFFMatch) {
        // Extract the first number in each
        const aNumStr = aFFMatch[1].split('-')[0];
        const bNumStr = bFFMatch[1].split('-')[0];
        
        const aNum = parseInt(aNumStr, 10);
        const bNum = parseInt(bNumStr, 10);
        
        // Compare the numbers
        if (aNum !== bNum) {
            return aNum - bNum;
        }
        
        // If first numbers are the same but one has a range (like 1-3)
        // The range should come first
        if (aFFMatch[1].includes('-') && !bFFMatch[1].includes('-')) {
            return -1;
        } else if (!aFFMatch[1].includes('-') && bFFMatch[1].includes('-')) {
            return 1;
        }
        
        // Same number, compare the full strings
        return aStr.localeCompare(bStr);
    }
    
    // Regex to split into chunks of numbers and non-numbers
    const chunkRegex = /(\d+|\D+)/g;
    
    // Split both strings into chunks
    const aChunks = aStr.match(chunkRegex) || [];
    const bChunks = bStr.match(chunkRegex) || [];
    
    // Compare each chunk
    const minLength = Math.min(aChunks.length, bChunks.length);
    
    for (let i = 0; i < minLength; i++) {
        const aChunk = aChunks[i];
        const bChunk = bChunks[i];
        
        // Check if both chunks are numeric
        const aIsNumeric = /^\d+$/.test(aChunk);
        const bIsNumeric = /^\d+$/.test(bChunk);
        
        if (aIsNumeric && bIsNumeric) {
            // Compare as numbers
            const diff = parseInt(aChunk, 10) - parseInt(bChunk, 10);
            if (diff !== 0) return diff;
        } else {
            // Compare as strings
            const diff = aChunk.localeCompare(bChunk);
            if (diff !== 0) return diff;
        }
    }
    
    // If we get here, one string might be a prefix of the other
    return aChunks.length - bChunks.length;
}

/**
 * Get all characters that match the current filters
 * 
 * @param {Object} filters - Current active filters
 * @param {boolean} alphabetized - Whether to alphabetize results (default: true)
 * @return {Array} - Filtered and formatted character results
 */
function getAllFilteredCharacters(filters, alphabetized = true) {
    // If no characters are in the global data, return empty array
    if (!characterData || !characterData.length) {
        return [];
    }
    
    // Start with all characters
    let results = [];
    
    // Apply filters to the character data
    if (filters && Object.keys(filters).length > 0) {
        // Filter for mediaType
        if (filters.mediaType) {
            const mediaType = filters.mediaType;
            const filteredData = characterData.filter(char => char.mediaType === mediaType);
            
            // Further filter for mediaSource/category if specified
            if (filters.mediaSource) {
                const mediaSource = filters.mediaSource;
                results = filteredData.filter(char => char.category === mediaSource);
            } else {
                results = filteredData;
            }
        } 
        // If only mediaSource/category is specified
        else if (filters.mediaSource) {
            const mediaSource = filters.mediaSource;
            results = characterData.filter(char => char.category === mediaSource);
        }
        // No specific filters, use all characters
        else {
            results = [...characterData];
        }
    } else {
        // No filters, return all characters
        results = [...characterData];
    }
    
    // Apply alphabetical sorting if requested (for blank dropdown)
    if (alphabetized) {
        results.sort((a, b) => naturalSort(a.name, b.name));
    }
    
    // Format the results
    return results.map(char => formatSearchResult(char));
}

/**
 * Format a search result for display
 * 
 * @param {Object} character - Character data object
 * @return {Object} - Formatted result with display text and raw data
 */
function formatSearchResult(character) {
    // Remove any text in parentheses for display
    const cleanName = (character.name || '')
        .replace(/\s*\([^)]*\)/g, '')  // Remove anything in parentheses including the parentheses
        .trim()
        .replace(/(^|\s)\S/g, l => l.toUpperCase());  // Capitalize first letter of each word
    
    const mediaSource = character.category || 'Unknown';
    const mediaType = character.mediaType || 'Other';
    
    return {
        // Clean name without parentheses
        display: cleanName,
        // Media source for the pill
        mediaSourceDisplay: mediaSource,
        // We keep mediaType for filtering purposes
        mediaTypeDisplay: mediaType,
        // Store the raw character data
        raw: character
    };
}

/**
 * Update the dropdown indicator based on filter state
 * 
 * @param {number} blockId - Character block ID
 * @param {HTMLElement} indicator - The dropdown indicator element
 */
function updateSearchDropdownIndicator(blockId, indicator) {
    if (!indicator) {
        indicator = document.querySelector(`#search-container-${blockId} .dropdown-indicator`);
        if (!indicator) return;
    }
    
    // Check if filters are active
    const hasFilters = hasActiveFilters();
    
    // Show/hide indicator based on filter state
    indicator.style.display = hasFilters ? 'block' : 'none';
    
    // Update search input style
    const searchInput = document.getElementById(`character-search-${blockId}`);
    if (searchInput) {
        updateSearchStyle(searchInput, indicator);
    }
}

/**
 * Update search input styling based on state
 * 
 * @param {HTMLElement} searchInput - The search input element
 * @param {HTMLElement} indicator - The dropdown indicator element
 */
function updateSearchStyle(searchInput, indicator) {
    const hasFilters = hasActiveFilters();
    const hasValue = searchInput.value.trim().length > 0;
    
    // Add/remove classes based on state
    if (hasFilters) {
        searchInput.classList.add('has-filters');
    } else {
        searchInput.classList.remove('has-filters');
    }
    
    // Update indicator visibility
    if (indicator) {
        indicator.style.display = hasFilters ? 'block' : 'none';
    }
}

/**
 * Handle character selection
 * 
 * @param {number} blockId - Character block ID
 * @param {Object} character - Selected character data
 */
export function selectCharacter(blockId, character) {
    // Update the character block title
    const blockTitle = document.querySelector(`#character-${blockId} .block-title`);
    if (blockTitle) {
        const displayName = cleanDisplayName(character.name);
        const displayCategory = cleanDisplayName(character.category);
        // Still keep the format "Name (Category)" for the block title
        blockTitle.textContent = `${displayName} (${displayCategory})`;
        
        // Store the selected data on the block for later use
        const characterBlock = document.getElementById(`character-${blockId}`);
        if (characterBlock) {
            characterBlock.dataset.character = character.name;
            characterBlock.dataset.category = character.category;
            characterBlock.dataset.mediaType = character.mediaType;
        }
    }
    
    // Update related components
    updateGenderToggle(blockId, character.name);
    updateAgeUpToggle(blockId, character.name);
    initializeBreastSizeSlider(blockId, character.name);
    updateEnhancerDropdown(blockId, character.name);
    
    // Populate default tag pills for this character
    populateDefaultTagPills(blockId, character);
    
    // Refresh action assignments if that function exists
    if (typeof updateAllActionAssignments === "function") {
        setTimeout(updateAllActionAssignments, 100);
    }
}

/**
 * Update the suggestions dropdown based on user input
 * 
 * @param {number} blockId - Character block ID
 * @param {string} query - User input query
 * @param {HTMLElement} suggestionsContainer - The suggestions container
 * @param {boolean} showAllOnEmpty - Whether to show all matching characters when query is empty
 */
function updateSuggestions(blockId, query, suggestionsContainer, showAllOnEmpty = false) {
    suggestionsContainer.innerHTML = '';
    
    // Get active filters
    const filters = getActiveFilters();
    const hasFilters = hasActiveFilters();
    
    // If query is empty and we're not showing all, and no filters are active
    if (!query && !showAllOnEmpty && !hasFilters) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    // If query is empty but filters are active or showAllOnEmpty is true
    let results = [];
    if (!query && (hasFilters || showAllOnEmpty)) {
        // Get all characters that match the current filters - alphabetized when empty
        results = getAllFilteredCharacters(filters, true);
    } else {
        // Normal search with query - uses Fuse.js ranking
        results = searchCharacters(query, filters);
    }
    
    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'suggestion-item no-results';
        
        // Different message based on active filters
        if (hasFilters) {
            noResults.textContent = 'No matches found with current filters';
            
            // Add a clear filters option
            const clearFiltersBtn = document.createElement('button');
            clearFiltersBtn.className = 'clear-filters-btn';
            clearFiltersBtn.textContent = 'Clear Filters';
            clearFiltersBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                // Import and call clearFilters dynamically to avoid circular deps
                import('./characterFilters.js').then(module => {
                    module.clearFilters();
                    // Re-trigger search with the same query
                    updateSuggestions(blockId, query, suggestionsContainer, true);
                    
                    // Dispatch custom event for filter changes
                    document.dispatchEvent(new CustomEvent('filters-changed'));
                });
            });
            
            noResults.appendChild(document.createElement('br'));
            noResults.appendChild(clearFiltersBtn);
        } else {
            noResults.textContent = query ? 'No characters found' : 'No characters match the current filters';
        }
        
        suggestionsContainer.appendChild(noResults);
    } else {
        // If we're showing all characters with filters and there are many results
        // Add a heading to indicate these are filtered results
        if (!query && hasFilters && results.length > 0) {
            const filterHeading = document.createElement('div');
            filterHeading.className = 'filter-results-heading';
            filterHeading.textContent = 'Characters matching current filters:';
            suggestionsContainer.appendChild(filterHeading);
        }
    
        // Add each result to the suggestions
        results.slice(0, 20).forEach(result => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            
            // Display clean character name without parentheses
            const nameSpan = document.createElement('span');
            nameSpan.className = 'character-name';
            nameSpan.textContent = result.display;
            
            // Use media source as the pill (not media type)
            const sourceSpan = document.createElement('span');
            sourceSpan.className = 'media-source';
            sourceSpan.textContent = result.mediaSourceDisplay;
            
            item.appendChild(nameSpan);
            item.appendChild(sourceSpan);
            
            // Set up click handler
            item.addEventListener('click', function() {
                // Select this character
                selectCharacter(blockId, result.raw);
                
                // Close the suggestions
                suggestionsContainer.style.display = 'none';
                
                // Update the search input value to show the selected item
                const searchInput = document.getElementById(`character-search-${blockId}`);
                if (searchInput) {
                    searchInput.value = result.display;
                    
                    // Update clear button visibility
                    const clearButton = document.getElementById(`clear-search-${blockId}`);
                    if (clearButton) {
                        clearButton.style.display = 'block';
                    }
                }
            });
            
            suggestionsContainer.appendChild(item);
        });
        
        // If there are more results than we're showing
        if (results.length > 20) {
            const moreResults = document.createElement('div');
            moreResults.className = 'more-results';
            moreResults.textContent = `+ ${results.length - 20} more results...`;
            suggestionsContainer.appendChild(moreResults);
        }
    }
    
    // Show the populated suggestions
    suggestionsContainer.style.display = 'block';
}

export default {
    createSearchBar,
    selectCharacter
}; 