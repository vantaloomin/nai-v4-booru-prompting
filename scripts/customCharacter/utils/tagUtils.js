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
 * @param {boolean} isDefault - Whether this is a default tag (non-removable)
 * @return {HTMLElement} - The created pill element
 */
export function createTagPill(tagText, pillContainer, onRemoveCallback, isDefault = false) {
    const pill = document.createElement('span');
    pill.className = 'custom-tag-pill';
    if (isDefault) {
        pill.classList.add('default-tag');
    }
    
    // Store the original tag text as a data attribute
    pill.dataset.originalTag = tagText;
    
    // Display the formatted version (spaces instead of underscores)
    const displayText = formatTag(tagText);
    pill.textContent = displayText;

    // Only add remove button if not a default tag
    if (!isDefault) {
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
    }
    
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

/**
 * Detects gender information from tag text
 * 
 * @param {string} tag - The tag to analyze
 * @return {Object|null} - Gender info object if detected, null otherwise
 */
export function detectGenderFromTag(tag) {
    // Match patterns like "1boy", "2girls", "3others", etc.
    const genderMatch = tag.match(/^(\d+)(boy|girl|other)(s?)$/i);
    
    if (genderMatch) {
        const count = parseInt(genderMatch[1], 10);
        const gender = genderMatch[2].toLowerCase();
        return { gender, count };
    }
    
    // Check for just "boy", "girl", or "other" without numbers
    if (/^boy$/i.test(tag)) {
        return { gender: 'boy', count: 1 };
    }
    
    if (/^girl$/i.test(tag)) {
        return { gender: 'girl', count: 1 };
    }
    
    if (/^other$/i.test(tag)) {
        return { gender: 'other', count: 1 };
    }
    
    // Check for non-binary, monster, alien, or creature tags that would indicate "other"
    if (/^(non-binary|nonbinary|monster|creature|alien|robot|android)$/i.test(tag)) {
        return { gender: 'other', count: 1 };
    }
    
    return null;
} 