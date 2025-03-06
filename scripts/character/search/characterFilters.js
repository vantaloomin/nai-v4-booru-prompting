/**
 * Character Filters Module
 * 
 * Manages filter state and filtering operations for characters.
 * Provides functions to get available filters and apply them to search results.
 */

// Current filter state
let activeFilters = {
    mediaType: null,
    mediaSource: null,
    category: null
};

/**
 * Extract unique values for a specific property from characterData
 * 
 * @param {string} property - The property to extract values for
 * @return {Array} - Array of unique values
 */
function getUniqueValues(property) {
    if (!characterData || !characterData.length) return [];
    
    const values = [...new Set(characterData
        .filter(item => item[property]) // Filter out undefined/null
        .map(item => item[property]))];
    
    // Sort alphabetically
    return values.sort((a, b) => a.localeCompare(b));
}

/**
 * Get all available filter options by category
 * 
 * @return {Object} - Object containing filter options by category
 */
export function getAvailableFilters() {
    return {
        mediaType: getUniqueValues('mediaType'),
        mediaSource: getUniqueValues('category'),
        // Optionally add other filters here (e.g., gender, ageUpAvailable)
    };
}

/**
 * Get the current active filters
 * 
 * @return {Object} - Current filter state
 */
export function getActiveFilters() {
    return { ...activeFilters };
}

/**
 * Set an individual filter value
 * 
 * @param {string} filterName - Name of the filter to set
 * @param {*} value - Value to set for the filter
 */
export function setFilter(filterName, value) {
    if (typeof filterName !== 'string') return;
    
    // Allow null/undefined to clear a filter
    if (value === null || value === undefined) {
        delete activeFilters[filterName];
    } else {
        activeFilters[filterName] = value;
    }
}

/**
 * Update multiple filters at once
 * 
 * @param {Object} filters - Object with filter name-value pairs
 */
export function updateFilters(filters) {
    if (!filters || typeof filters !== 'object') return;
    
    // Update each filter
    Object.entries(filters).forEach(([key, value]) => {
        setFilter(key, value);
    });
}

/**
 * Apply active filters to character data
 * 
 * @param {Array} characters - Character data to filter
 * @return {Array} - Filtered character data
 */
export function applyFilters(characters) {
    if (!characters || !characters.length) return [];
    if (!Object.keys(activeFilters).length) return characters; // No filters active
    
    return characters.filter(character => {
        // Check each active filter
        for (const [filterName, filterValue] of Object.entries(activeFilters)) {
            // Skip if filter value is null/undefined/"all"
            if (filterValue === null || filterValue === undefined || filterValue === 'all') {
                continue;
            }
            
            // Handle mediaType filter
            if (filterName === 'mediaType' && character.mediaType !== filterValue) {
                return false;
            }
            
            // Handle mediaSource/category filter
            if (filterName === 'mediaSource' && character.category !== filterValue) {
                return false;
            }
            
            // Add handling for other filter types as needed
        }
        
        // Character passed all filters
        return true;
    });
}

/**
 * Clear all active filters
 */
export function clearFilters() {
    activeFilters = {};
}

/**
 * Check if any filters are currently active
 * 
 * @return {boolean} - True if filters are active
 */
export function hasActiveFilters() {
    return Object.keys(activeFilters).some(key => 
        activeFilters[key] !== null && 
        activeFilters[key] !== undefined &&
        activeFilters[key] !== 'all'
    );
}

// Export all functions
export default {
    getAvailableFilters,
    getActiveFilters,
    setFilter,
    updateFilters,
    applyFilters,
    clearFilters,
    hasActiveFilters
}; 