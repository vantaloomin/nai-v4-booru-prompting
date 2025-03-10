/**
 * Filter Panel Component Module
 * 
 * Renders and manages the expandable filter panel for character search.
 * Handles filter selection and updates.
 */

import { 
    getAvailableFilters, 
    getActiveFilters, 
    setFilter, 
    clearFilters,
    hasActiveFilters
} from './characterFilters.js';
import { cleanDisplayName } from '../utils/nameFormatter.js';

// Track expanded state of filter panels by blockId
const expandedPanels = {};

/**
 * Create a filter panel element for a character block
 * 
 * @param {number} blockId - Character block ID
 * @return {HTMLElement} - The filter panel container element
 */
export function createFilterPanel(blockId) {
    // Create container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'character-filter-container';
    filterContainer.id = `filter-container-${blockId}`;

    // Create filter toggle button with funnel icon instead of gear
    const filterToggle = document.createElement('button');
    filterToggle.className = 'filter-toggle-btn';
    filterToggle.id = `filter-toggle-${blockId}`;
    filterToggle.innerHTML = '<span class="filter-icon"><i class="bx bx-filter-alt"></i></span>';
    filterToggle.title = "Search filter"; // Update tooltip text
    // Add default styling to the button
    filterToggle.style.transition = 'all 0.2s ease-in-out';
    filterToggle.style.border = '1px solid var(--color-border)';
    filterContainer.appendChild(filterToggle);

    // Create filter panel (initially hidden)
    const filterPanel = document.createElement('div');
    filterPanel.className = 'filter-panel';
    filterPanel.id = `filter-panel-${blockId}`;
    filterPanel.style.display = 'none';
    filterContainer.appendChild(filterPanel);

    // Populate the filter panel with filter sections
    populateFilterPanel(filterPanel, blockId);

    // Set up event listeners
    initFilterEvents(blockId, filterToggle, filterPanel, filterContainer);

    // Check if there are active filters and update toggle button
    updateFilterToggleState(blockId);

    return filterContainer;
}

/**
 * Initialize filter-related event listeners
 * 
 * @param {number} blockId - Character block ID
 * @param {HTMLElement} filterToggle - The filter toggle button
 * @param {HTMLElement} filterPanel - The filter panel element
 * @param {HTMLElement} filterContainer - The filter container element
 */
function initFilterEvents(blockId, filterToggle, filterPanel, filterContainer) {
    // Toggle filter panel visibility
    filterToggle.addEventListener('click', function() {
        const isVisible = filterPanel.style.display === 'block';
        filterPanel.style.display = isVisible ? 'none' : 'block';
        expandedPanels[blockId] = !isVisible;
        
        // Update button appearance
        this.classList.toggle('active', !isVisible);
        
        // Change the icon state to indicate active filters
        if (this.querySelector('.filter-icon')) {
            const iconElement = this.querySelector('.filter-icon i');
            if (iconElement) {
                if (!isVisible) {
                    iconElement.classList.remove('bxs-filter-alt');
                    iconElement.classList.add('bx-filter-alt');
                } else {
                    iconElement.classList.remove('bx-filter-alt');
                    iconElement.classList.add('bxs-filter-alt');
                }
            }
        }
    });

    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        if (filterContainer && !filterContainer.contains(e.target) && expandedPanels[blockId]) {
            filterPanel.style.display = 'none';
            filterToggle.classList.remove('active');
            expandedPanels[blockId] = false;
        }
    });
}

/**
 * Populate the filter panel with filter options
 * 
 * @param {HTMLElement} filterPanel - The filter panel element
 * @param {number} blockId - Character block ID
 */
function populateFilterPanel(filterPanel, blockId) {
    // Get available filters
    const filters = getAvailableFilters();
    const activeFilters = getActiveFilters();

    // Clear existing content
    filterPanel.innerHTML = '';

    // Add Media Genre filter section
    if (filters.mediaGenre && filters.mediaGenre.length) {
        addFilterSection(
            filterPanel,
            'mediaGenre',
            'Media Genre',
            filters.mediaGenre,
            activeFilters.mediaGenre,
            blockId,
            (value) => {
                // This callback runs when a media genre is selected
                // Update the media sources based on this selection
                updateMediaSourcesByType(blockId, value);
            }
        );
    }

    // Add Media Source filter section with search
    if (filters.mediaSource && filters.mediaSource.length) {
        // Create the section container
        const section = document.createElement('div');
        section.className = 'filter-section';
        
        // Add heading
        const heading = document.createElement('h4');
        heading.className = 'filter-section-heading';
        heading.textContent = 'Media Source';
        section.appendChild(heading);
        
        // Add search input for media sources
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'filter-search';
        searchInput.placeholder = 'Search media sources...';
        searchInput.addEventListener('input', function() {
            filterMediaSources(this.value.toLowerCase(), blockId);
        });
        section.appendChild(searchInput);
        
        // Add options container
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'filter-options-container';
        optionsContainer.id = `media-source-options-${blockId}`;
        
        // Add "All" option first
        const allOption = document.createElement('div');
        allOption.className = 'filter-option';
        if (!activeFilters.mediaSource || activeFilters.mediaSource === 'all') {
            allOption.classList.add('active');
        }
        allOption.dataset.value = 'all';
        allOption.dataset.filter = 'mediaSource';
        allOption.textContent = 'All';
        allOption.addEventListener('click', function() {
            handleFilterOptionClick(this, 'mediaSource', 'all', blockId);
        });
        optionsContainer.appendChild(allOption);
        
        // Get filtered media sources based on currently selected media type
        const mediaType = activeFilters.mediaType;
        let mediaSources = filters.mediaSource;
        
        // If a specific media type is selected, filter the sources
        if (mediaType && mediaType !== 'all') {
            mediaSources = getMediaSourcesByType(mediaType);
        }
        
        // Add specific options
        mediaSources.forEach(option => {
            const optionEl = document.createElement('div');
            optionEl.className = 'filter-option';
            if (activeFilters.mediaSource === option) {
                optionEl.classList.add('active');
            }
            optionEl.dataset.value = option;
            optionEl.dataset.filter = 'mediaSource';
            optionEl.dataset.mediaType = getMediaTypeForSource(option) || 'all';
            optionEl.textContent = cleanDisplayName(option);
            optionEl.addEventListener('click', function() {
                handleFilterOptionClick(this, 'mediaSource', option, blockId);
            });
            optionsContainer.appendChild(optionEl);
        });
        
        section.appendChild(optionsContainer);
        filterPanel.appendChild(section);
    }

    // Add clear filters button
    const clearButtonContainer = document.createElement('div');
    clearButtonContainer.className = 'filter-clear-container';
    
    const clearButton = document.createElement('button');
    clearButton.className = 'filter-clear-btn';
    clearButton.innerHTML = '<i class="bx bx-eraser"></i> Clear All Filters';
    clearButton.addEventListener('click', function() {
        clearAllFilters(blockId, filterPanel);
    });
    
    clearButtonContainer.appendChild(clearButton);
    filterPanel.appendChild(clearButtonContainer);
}

/**
 * Filter media sources based on search input
 * 
 * @param {string} query - Search query
 * @param {number} blockId - Character block ID
 */
function filterMediaSources(query, blockId) {
    const optionsContainer = document.getElementById(`media-source-options-${blockId}`);
    if (!optionsContainer) return;
    
    // Get all option elements except the "All" option
    const options = optionsContainer.querySelectorAll('.filter-option:not([data-value="all"])');
    let matchCount = 0;
    
    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        const isMatch = text.includes(query);
        option.style.display = isMatch ? 'block' : 'none';
        if (isMatch) matchCount++;
    });
    
    // Show/hide no results message
    let noResultsMsg = optionsContainer.querySelector('.no-filter-results');
    
    if (matchCount === 0 && query) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-filter-results';
            noResultsMsg.textContent = 'No matching media sources';
            optionsContainer.appendChild(noResultsMsg);
        }
        noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

/**
 * Add a filter section to the filter panel
 * 
 * @param {HTMLElement} filterPanel - The filter panel element
 * @param {string} filterName - Name of the filter
 * @param {string} displayName - Display name for the filter section
 * @param {Array} options - Available filter options
 * @param {string} activeValue - Currently active filter value
 * @param {number} blockId - Character block ID
 * @param {Function} onChange - Optional callback when filter changes
 */
function addFilterSection(filterPanel, filterName, displayName, options, activeValue, blockId, onChange) {
    const section = document.createElement('div');
    section.className = 'filter-section';
    
    const heading = document.createElement('h4');
    heading.className = 'filter-section-heading';
    heading.textContent = displayName;
    section.appendChild(heading);
    
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'filter-options-container';
    
    // Add "All" option first
    const allOption = document.createElement('div');
    allOption.className = 'filter-option';
    if (!activeValue || activeValue === 'all') {
        allOption.classList.add('active');
    }
    allOption.dataset.value = 'all';
    allOption.dataset.filter = filterName;
    allOption.textContent = 'All';
    allOption.addEventListener('click', function() {
        handleFilterOptionClick(this, filterName, 'all', blockId, onChange);
    });
    optionsContainer.appendChild(allOption);
    
    // Add specific options
    options.forEach(option => {
        const optionEl = document.createElement('div');
        optionEl.className = 'filter-option';
        if (activeValue === option) {
            optionEl.classList.add('active');
        }
        optionEl.dataset.value = option;
        optionEl.dataset.filter = filterName;
        optionEl.textContent = cleanDisplayName(option);
        optionEl.addEventListener('click', function() {
            handleFilterOptionClick(this, filterName, option, blockId, onChange);
        });
        optionsContainer.appendChild(optionEl);
    });
    
    section.appendChild(optionsContainer);
    filterPanel.appendChild(section);
}

/**
 * Handle filter option click
 * 
 * @param {HTMLElement} element - Clicked filter option element
 * @param {string} filterName - Name of the filter
 * @param {string} value - Value of the selected filter option
 * @param {number} blockId - Character block ID
 * @param {Function} onChange - Optional callback when filter changes
 */
function handleFilterOptionClick(element, filterName, value, blockId, onChange) {
    // Update active state in UI
    const siblings = element.parentNode.querySelectorAll('.filter-option');
    siblings.forEach(sibling => {
        sibling.classList.remove('active');
    });
    element.classList.add('active');
    
    // Update filter value
    const effectiveValue = value === 'all' ? null : value;
    setFilter(filterName, effectiveValue);
    
    // Call the onChange callback if provided
    if (typeof onChange === 'function') {
        onChange(effectiveValue);
    }
    
    // Dispatch custom event for filter changes
    document.dispatchEvent(new CustomEvent('filters-changed'));
    
    // Update the filter toggle state
    updateFilterToggleState(blockId);
    
    // Trigger search update
    triggerSearchUpdate(blockId);
}

/**
 * Trigger an update of the search results when filters change
 * 
 * @param {number} blockId - Character block ID
 */
function triggerSearchUpdate(blockId) {
    const searchInput = document.getElementById(`character-search-${blockId}`);
    if (searchInput && searchInput.value.trim()) {
        // Manually trigger input event to refresh search results
        const event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        searchInput.dispatchEvent(event);
    }
}

/**
 * Update the filter panel to reflect current filter state
 * 
 * @param {number} blockId - Character block ID
 */
export function updateFilterPanel(blockId) {
    const filterPanel = document.getElementById(`filter-panel-${blockId}`);
    if (filterPanel) {
        populateFilterPanel(filterPanel, blockId);
    }
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
 * Get media sources (categories) by media genre
 * 
 * @param {string} mediaGenre - The media genre to filter by
 * @return {Array} - Array of matching media sources
 */
function getMediaSourcesByType(mediaGenre) {
    if (!mediaGenre || mediaGenre === 'all') {
        // Directly access the characterData and extract category values
        return [...new Set(characterData
            .filter(item => item.category)
            .map(item => item.category))]
            .sort((a, b) => naturalSort(a, b)); // Use natural sort
    }
    
    // Filter the character data by media genre (mediaSource) and extract unique categories
    return [...new Set(characterData
        .filter(item => item.mediaSource === mediaGenre)
        .map(item => item.category))]
        .sort((a, b) => naturalSort(a, b)); // Use natural sort
}

/**
 * Get the media genre for a specific media source
 * 
 * @param {string} mediaSource - The media source to find the genre for
 * @return {string|null} - The media genre or null if not found
 */
function getMediaTypeForSource(mediaSource) {
    if (!mediaSource) return null;
    
    const character = characterData.find(item => item.category === mediaSource);
    return character ? character.mediaSource : null;
}

/**
 * Update the media sources shown in the filter based on selected media genre
 * 
 * @param {number} blockId - Character block ID
 * @param {string} mediaGenre - The selected media genre
 */
function updateMediaSourcesByType(blockId, mediaGenre) {
    const optionsContainer = document.getElementById(`media-source-options-${blockId}`);
    if (!optionsContainer) return;
    
    // Get the current active media source
    const activeFilters = getActiveFilters();
    const currentSource = activeFilters.mediaSource;
    
    // Clear existing options except "All"
    const allOption = optionsContainer.querySelector('.filter-option[data-value="all"]');
    optionsContainer.innerHTML = '';
    if (allOption) {
        optionsContainer.appendChild(allOption);
    }
    
    // Get filtered media sources
    const mediaSources = getMediaSourcesByType(mediaGenre);
    
    // Check if the current source is still valid with the new media genre
    const isCurrentSourceValid = mediaGenre === 'all' || 
                                currentSource === 'all' || 
                                mediaSources.includes(currentSource);
    
    // If the current source is no longer valid, reset to "All"
    if (!isCurrentSourceValid && currentSource) {
        setFilter('mediaSource', null);
        // Make the "All" option active
        if (allOption) {
            allOption.classList.add('active');
        }
    }
    
    // Add the filtered source options
    mediaSources.forEach(source => {
        const optionEl = document.createElement('div');
        optionEl.className = 'filter-option';
        
        // Set active state
        if (source === currentSource && isCurrentSourceValid) {
            optionEl.classList.add('active');
        }
        
        optionEl.dataset.value = source;
        optionEl.dataset.filter = 'mediaSource';
        optionEl.dataset.mediaGenre = getMediaTypeForSource(source) || 'all';
        optionEl.textContent = cleanDisplayName(source);
        optionEl.addEventListener('click', function() {
            handleFilterOptionClick(this, 'mediaSource', source, blockId);
        });
        optionsContainer.appendChild(optionEl);
    });
    
    // Add no results message if needed
    if (mediaSources.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-filter-results';
        noResults.textContent = 'No matching media sources for this type';
        optionsContainer.appendChild(noResults);
    }
    
    // Update the filter toggle state
    updateFilterToggleState(blockId);
    
    // Trigger search update to refresh results
    triggerSearchUpdate(blockId);
}

/**
 * Update the appearance of the filter toggle button based on active filters
 * 
 * @param {number} blockId - Character block ID
 */
function updateFilterToggleState(blockId) {
    const filterToggle = document.getElementById(`filter-toggle-${blockId}`);
    if (!filterToggle) return;
    
    // Get current active filters
    const activeFilters = getActiveFilters();
    
    // Check if any filter is set to a non-default value
    const hasFilters = activeFilters.mediaSource !== 'all' || 
                      activeFilters.mediaType !== 'all' || 
                      activeFilters.quality !== 'all' ||
                      activeFilters.nsfw !== 'all' || 
                      activeFilters.animated !== 'all';
    
    if (hasFilters) {
        filterToggle.classList.add('has-active-filters');
        filterToggle.title = "Active filters applied"; // Update tooltip
        
        // Update the icon to filter-alt solid for active filters
        const iconElement = filterToggle.querySelector('.filter-icon');
        if (iconElement) {
            iconElement.innerHTML = '<i class="bx bxs-filter-alt"></i>';
        }
        
        // Add highlight border when filters are active
        filterToggle.style.border = '2px solid var(--highlight-blue-3)';
        filterToggle.style.boxShadow = '0 0 5px var(--highlight-blue-4)';
    } else {
        filterToggle.classList.remove('has-active-filters');
        filterToggle.title = "Search filter"; // Reset tooltip
        
        // Reset to regular filter-alt icon when no filters are applied
        const iconElement = filterToggle.querySelector('.filter-icon');
        if (iconElement) {
            iconElement.innerHTML = '<i class="bx bx-filter-alt"></i>';
        }
        
        // Remove border highlight when no filters are active
        filterToggle.style.border = 'none';
        filterToggle.style.boxShadow = 'none';
    }
}

/**
 * Clear all filters and update UI
 * 
 * @param {number} blockId - Character block ID
 * @param {HTMLElement} filterPanel - The filter panel element (optional)
 */
function clearAllFilters(blockId, filterPanel) {
    // Clear all active filters in the state
    clearFilters();
    
    // Get the filter panel if not provided
    if (!filterPanel) {
        filterPanel = document.getElementById(`filter-panel-${blockId}`);
    }
    
    if (filterPanel) {
        // Deactivate all currently active filter options
        const activeOptions = filterPanel.querySelectorAll('.filter-option.active');
        activeOptions.forEach(option => {
            option.classList.remove('active');
        });
        
        // Activate all "All" options
        const allOptions = filterPanel.querySelectorAll('.filter-option[data-value="all"]');
        allOptions.forEach(option => {
            option.classList.add('active');
        });
        
        // Clear any search inputs in the filter panel
        const searchInputs = filterPanel.querySelectorAll('input.filter-search');
        searchInputs.forEach(input => {
            input.value = '';
        });
        
        // Update media sources container (without clearing the panel)
        const mediaSourceContainer = filterPanel.querySelector('#media-source-options-' + blockId);
        if (mediaSourceContainer) {
            // Keep the "All" option and clear other options
            const allOption = mediaSourceContainer.querySelector('.filter-option[data-value="all"]');
            if (allOption) {
                // Store the all option to preserve it
                const allOptionClone = allOption.cloneNode(true);
                allOptionClone.classList.add('active'); // Make sure it's active
                
                // Set up event listener again
                allOptionClone.addEventListener('click', function() {
                    handleFilterOptionClick(this, 'mediaSource', 'all', blockId);
                });
                
                // Clear container and add back the all option
                mediaSourceContainer.innerHTML = '';
                mediaSourceContainer.appendChild(allOptionClone);
                
                // Add media sources for all types
                const mediaSources = getMediaSourcesByType('all');
                mediaSources.forEach(source => {
                    const optionEl = document.createElement('div');
                    optionEl.className = 'filter-option';
                    optionEl.dataset.value = source;
                    optionEl.dataset.filter = 'mediaSource';
                    optionEl.dataset.mediaGenre = getMediaTypeForSource(source) || 'all';
                    optionEl.textContent = cleanDisplayName(source);
                    optionEl.addEventListener('click', function() {
                        handleFilterOptionClick(this, 'mediaSource', source, blockId);
                    });
                    mediaSourceContainer.appendChild(optionEl);
                });
            }
        }
    }
    
    // Dispatch custom event for filter changes
    document.dispatchEvent(new CustomEvent('filters-changed'));
    
    // Update filter toggle appearance
    updateFilterToggleState(blockId);
    
    // Trigger search update to refresh results
    triggerSearchUpdate(blockId);
}

export default {
    createFilterPanel,
    updateFilterPanel
}; 