/**
 * Scene Tag Utilities Module
 * 
 * Provides utilities for managing scene tags, including loading, searching, and formatting.
 * This is a modified version of tagUtils.js that only includes context category tags.
 */

// Global variable for context tags
let contextTags = [];

// Fuse instance for tag search
let sceneTagFuse = null;

/**
 * Loads context tags from the JSON file
 * 
 * @return {Promise} - Promise that resolves when tags are loaded
 */
export function loadContextTags() {
    return fetch('../scripts/allTags.json')
        .then(response => response.json())
        .then(data => {
            // Filter to only include tags with category "context"
            contextTags = data.filter(tag => tag.category === "context");
            console.log("Context tags loaded:", contextTags.length);
            // Initialize Fuse after tags are loaded
            initSceneTagFuse();
            return contextTags;
        })
        .catch(error => {
            console.error("Error loading context tags:", error);
            return [];
        });
}

/**
 * Initializes the Fuse instance for scene tag search
 */
function initSceneTagFuse() {
    const sceneFuseOptions = {
        keys: [
            { name: 'name', weight: 2 }
        ],
        includeScore: true,
        threshold: 0.75, // more lenient so "room" can match "classroom"
        ignoreLocation: true,
        minMatchCharLength: 1
    };

    // Create Fuse instance once tags are loaded
    sceneTagFuse = new Fuse(contextTags, sceneFuseOptions);
    console.log("Scene tag Fuse initialized");
}

/**
 * Searches for context tags matching the given query
 * 
 * @param {string} query - The search query
 * @param {number} limit - Maximum number of results to return
 * @return {Array} - Array of matching tag objects
 */
export function searchTags(query, limit = 5) {
    if (!query || !sceneTagFuse) return [];
    
    // Search using Fuse
    const results = sceneTagFuse.search(query);
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
    
    // Store the original tag text as a data attribute
    pill.dataset.originalTag = tagText;
    
    // Display the formatted version (spaces instead of underscores)
    const displayText = formatTag(tagText);
    pill.textContent = displayText;

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
 * Gets all currently loaded context tags
 * 
 * @return {Array} - The array of all loaded context tags
 */
export function getAllContextTags() {
    return contextTags;
}

/**
 * Gets the current Fuse instance
 * 
 * @return {Object} - The Fuse.js instance
 */
export function getSceneTagFuse() {
    return sceneTagFuse;
}

/**
 * Formats a tag by replacing underscores with spaces
 * 
 * @param {string} tag - The tag to format
 * @return {string} - The formatted tag
 */
export function formatTag(tag) {
    // Replace underscores with spaces
    return tag.replace(/_/g, ' ').trim();
} 