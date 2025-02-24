/**
 * Tag Utilities Module
 * 
 * Provides utilities for managing tags, including loading, searching, and formatting.
 */

// Global variable for all tags
let allTags = [];

// Fuse instance for tag search
let customTagFuse = null;

/**
 * Loads all tags from the JSON file
 * 
 * @return {Promise} - Promise that resolves when tags are loaded
 */
export function loadAllTags() {
    return fetch('scripts/allTags.json')
        .then(response => response.json())
        .then(data => {
            allTags = data;
            console.log("allTags loaded:", allTags.length);
            // Initialize Fuse after tags are loaded
            initCustomTagFuse();
            return allTags;
        })
        .catch(error => {
            console.error("Error loading allTags:", error);
            return [];
        });
}

/**
 * Initializes the Fuse instance for custom tag search
 */
function initCustomTagFuse() {
    const customFuseOptions = {
        keys: [
            { name: 'name', weight: 2 }
        ],
        includeScore: true,
        threshold: 0.75, // more lenient so "hair" can match "long_hair"
        ignoreLocation: true,
        minMatchCharLength: 1
    };

    // Create Fuse instance once tags are loaded
    customTagFuse = new Fuse(allTags, customFuseOptions);
    console.log("Custom tag Fuse initialized");
}

/**
 * Searches for tags matching the given query
 * 
 * @param {string} query - The search query
 * @param {number} limit - Maximum number of results to return
 * @return {Array} - Array of matching tag objects
 */
export function searchTags(query, limit = 5) {
    if (!query || !customTagFuse) return [];
    
    // Search using Fuse
    const results = customTagFuse.search(query);
    return results.slice(0, limit);
}

/**
 * Creates a tag pill element
 * 
 * @param {string} tagText - The text for the tag
 * @param {HTMLElement} pillContainer - The container to add the pill to
 * @param {Function} onRemoveCallback - Callback function when tag is removed
 * @return {HTMLElement} - The created pill element
 */
export function createTagPill(tagText, pillContainer, onRemoveCallback) {
    const pill = document.createElement('span');
    pill.className = 'custom-tag-pill';
    pill.textContent = tagText;

    // Remove 'X' button
    const removeX = document.createElement('span');
    removeX.className = 'custom-tag-remove';
    removeX.textContent = '×';
    removeX.addEventListener('click', () => {
        pillContainer.removeChild(pill);
        
        // Call the provided callback when a tag is removed
        if (typeof onRemoveCallback === 'function') {
            onRemoveCallback();
        }
    });
    
    pill.appendChild(removeX);
    pillContainer.appendChild(pill);
    
    return pill;
}

/**
 * Gets all currently loaded tags
 * 
 * @return {Array} - The array of all loaded tags
 */
export function getAllTags() {
    return allTags;
}

/**
 * Gets the current Fuse instance
 * 
 * @return {Object} - The Fuse.js instance
 */
export function getCustomTagFuse() {
    return customTagFuse;
} 