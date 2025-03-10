/**
 * Character Search Module
 * 
 * Provides functions to search across character data from constants.js
 * Supports partial and fuzzy matching for user-friendly search.
 */

// Fuse.js is assumed to be loaded in the global scope
import logger from '../../utils/logger-init.js';

/**
 * Initialize a Fuse.js instance for character searching
 * 
 * @return {Object} - Configured Fuse instance
 */
function initFuseSearch() {
    // Make sure we have characterData available
    if (typeof characterData === 'undefined' || !characterData.length) {
        logger.error('Character data not available for search initialization');
        return null;
    }

    // Set up Fuse with appropriate options
    return new Fuse(characterData, {
        keys: [
            { name: 'name', weight: 1.5 },
            { name: 'category', weight: 1.0 },
            { name: 'mediaType', weight: 0.8 },
            { name: 'mainTags', weight: 0.5 }
        ],
        includeScore: true,
        threshold: 0.4,
        ignoreLocation: true,
        useExtendedSearch: true
    });
}

/**
 * Format a search result item for display
 * 
 * @param {Object} character - Character data object
 * @return {Object} - Formatted result with display text and raw data
 */
function formatSearchResult(character) {
    const displayName = (character.name || '').replace(/(^|\s)\S/g, l => l.toUpperCase());
    const mediaSource = character.category || 'Unknown';
    const mediaType = character.mediaType || 'Other';
    
    return {
        display: `${displayName} (${mediaSource})`,
        mediaTypeDisplay: mediaType,
        raw: character
    };
}

/**
 * Get all searchable character entries
 * 
 * @return {Array} - All character entries that can be searched
 */
export function getSearchCandidates() {
    return characterData || [];
}

/**
 * Perform a search using Fuse.js
 * 
 * @param {string} query - User search query
 * @param {Object} fuse - Fuse.js instance
 * @return {Array} - Formatted search results
 */
export function fuseSearch(query, fuse) {
    if (!query || !fuse) return [];

    const results = fuse.search(query);
    return results.map(result => formatSearchResult(result.item));
}

/**
 * Simple name-based search without Fuse.js
 * Fallback method when Fuse isn't available
 * 
 * @param {string} query - Search query
 * @return {Array} - Matched results
 */
function simpleSearch(query) {
    if (!query || !characterData) return [];
    
    const lowerQuery = query.toLowerCase();
    const matches = characterData.filter(char => 
        (char.name && char.name.toLowerCase().includes(lowerQuery)) ||
        (char.category && char.category.toLowerCase().includes(lowerQuery)) ||
        (char.mediaType && char.mediaType.toLowerCase().includes(lowerQuery))
    );
    
    return matches.slice(0, 10).map(char => formatSearchResult(char));
}

/**
 * Primary search function that handles everything
 * 
 * @param {string} query - User's search query
 * @param {Object} filters - Optional filters to apply
 * @return {Array} - Search results
 */
export function searchCharacters(query, filters = {}) {
    if (!query) return [];
    
    // Get or create a Fuse instance
    let fuse = window.characterFuse;
    
    if (!fuse) {
        fuse = initFuseSearch();
        // Store for reuse
        window.characterFuse = fuse;
    }
    
    // Use Fuse if available, otherwise fall back to simple search
    let results = fuse ? fuseSearch(query, fuse) : simpleSearch(query);
    
    // Apply filters if provided
    if (filters && Object.keys(filters).length > 0) {
        results = applyFilters(results, filters);
    }
    
    return results;
}

/**
 * Apply filters to search results
 * 
 * @param {Array} results - Search results to filter
 * @param {Object} filters - Filters to apply
 * @return {Array} - Filtered results
 */
function applyFilters(results, filters) {
    if (!results.length || !filters) return results;
    
    return results.filter(result => {
        const char = result.raw;
        
        // Filter by mediaType
        if (filters.mediaType && filters.mediaType !== 'all' && 
            char.mediaType !== filters.mediaType) {
            return false;
        }
        
        // Filter by category/media source
        if (filters.mediaSource && filters.mediaSource !== 'all' && 
            char.category !== filters.mediaSource) {
            return false;
        }
        
        // Filter by gender
        if (filters.gender) {
            if (filters.gender === 'male' && char.defaultGender !== 'boy') {
                return false;
            } else if (filters.gender === 'female' && char.defaultGender !== 'girl') {
                return false;
            }
        }
        
        return true;
    });
}

/**
 * Get a character by exact name
 * 
 * @param {string} name - Character name
 * @return {Object|null} - Character data or null if not found
 */
export function getCharacterByName(name) {
    if (!name || !characterData) return null;
    
    const lowerName = name.toLowerCase();
    return characterData.find(char => char.name.toLowerCase() === lowerName) || null;
}

// Export the necessary functions
export default {
    searchCharacters,
    fuseSearch,
    getSearchCandidates,
    getCharacterByName
}; 