/**
 * Tag Utilities Module
 * 
 * Provides utilities for managing tags, including loading, searching, and formatting.
 */

// Global variable for all tags
let allTags = [];

// Store all tags including explicit ones
let allTagsWithExplicit = [];

// Fuse instance for tag search
let customTagFuse = null;

// Import the NSFW toggle event to coordinate initialization
import { nsfwToggleReadyEvent } from '../../nsfw-toggle.js';

/**
 * Loads all tags from the CSV files
 * 
 * @return {Promise} - Promise that resolves when tags are loaded
 */
export function loadAllTags() {
    const csvFiles = [
        'scripts/custom/appearance_with_count.csv',
        'scripts/custom/attire_with_count.csv',
        'scripts/custom/character_with_count.csv', 
        'scripts/custom/expression_with_count.csv',
        'scripts/custom/genre_with_count.csv',
        'scripts/custom/object_with_count.csv',
        'scripts/custom/perspective_with_count.csv'
    ];
    
    // Function to parse a CSV file into tag objects
    const parseCSV = async (url) => {
        try {
            const response = await fetch(url);
            const text = await response.text();
            
            // More robust CSV parsing
            const lines = text.split('\n').filter(line => line.trim());
            
            // Check if we have a header row and determine column positions
            let nameIndex = 0;
            let countIndex = 1;
            let explicitIndex = -1; // -1 means not found
            
            // Parse header if it exists
            if (lines.length > 0 && lines[0].includes('name') || lines[0].includes('tag')) {
                const header = lines[0].toLowerCase().split(',');
                
                // Find the index of each column
                nameIndex = header.findIndex(col => col.includes('name') || col.includes('tag'));
                countIndex = header.findIndex(col => col.includes('count'));
                explicitIndex = header.findIndex(col => col.includes('explicit'));
                
                // Default indexes if not found
                if (nameIndex === -1) nameIndex = 0;
                if (countIndex === -1) countIndex = 1;
            }
            
            // Skip header if it exists
            const dataLines = lines[0].includes('name') || lines[0].includes('tag') ? lines.slice(1) : lines;
            
            return dataLines.map(line => {
                const columns = line.split(',').map(col => col.trim());
                
                // Extract values from their detected positions
                const name = columns[nameIndex] || '';
                const count = parseInt(columns[countIndex] || '0', 10);
                
                // Check for explicit flag if it exists
                let isExplicit = false;
                if (explicitIndex !== -1 && columns[explicitIndex]) {
                    const explicitValue = columns[explicitIndex].toLowerCase();
                    isExplicit = (explicitValue === 'true' || explicitValue === '1' || explicitValue === 'yes');
                } else {
                    // If there's no explicit column, use a heuristic based on common explicit terms
                    // This is a fallback for CSV files that don't have an explicit flag
                    const explicitTerms = ['nsfw', 'explicit', 'adult', 'xxx', 'sex', 'nude', 'naked', 'hentai', 'porn'];
                    isExplicit = explicitTerms.some(term => name.toLowerCase().includes(term));
                }
                
                return { 
                    name: name.trim(), 
                    count: count,
                    explicit: isExplicit 
                };
            });
        } catch (error) {
            console.error(`Error loading CSV file ${url}:`, error);
            return [];
        }
    };
    
    // Load all CSV files and merge the results
    const promises = csvFiles.map(parseCSV);
    
    return Promise.all(promises)
        .then(results => {
            // Flatten the array of arrays and remove duplicates
            const allTagsWithDuplicates = results.flat();
            
            // Create a Map to deduplicate tags by name
            const tagMap = new Map();
            allTagsWithDuplicates.forEach(tag => {
                // If tag already exists, keep the one with higher count
                if (tagMap.has(tag.name)) {
                    const existingTag = tagMap.get(tag.name);
                    if (tag.count > existingTag.count) {
                        // Keep explicit status from either tag
                        const isExplicit = existingTag.explicit || tag.explicit;
                        tagMap.set(tag.name, {...tag, explicit: isExplicit});
                    }
                } else {
                    tagMap.set(tag.name, tag);
                }
            });
            
            // Store all tags including explicit ones
            allTagsWithExplicit = Array.from(tagMap.values());
            
            // Check NSFW toggle state to determine which tags to use
            const nsfwToggle = document.getElementById('nsfw-toggle');
            const nsfwModeEnabled = nsfwToggle?.checked || false;
            
            // Filter out explicit tags if SFW mode is active
            if (!nsfwModeEnabled) {
                // Apply strict filtering to ensure explicit tags are removed
                allTags = allTagsWithExplicit.filter(tag => !tag.explicit);
                console.log(`SFW mode active: ${allTagsWithExplicit.length - allTags.length} explicit tags filtered out`);
            } else {
                // Use all tags in NSFW mode
                allTags = [...allTagsWithExplicit];
                console.log('NSFW mode active: Using all tags');
            }
            
            console.log(`Tags loaded from CSV files: ${allTags.length} tags (${allTagsWithExplicit.length} total)`);
            
            // Initialize Fuse after tags are loaded
            initCustomTagFuse();
            return allTags;
        })
        .catch(error => {
            console.error("Error loading tags from CSV files:", error);
            return [];
        });
}

/**
 * Updates the tag list based on the NSFW mode toggle
 */
export function updateTagListBasedOnNSFWMode() {
    const nsfwToggle = document.getElementById('nsfw-toggle');
    const nsfwModeEnabled = nsfwToggle?.checked || false;
    
    const originalCount = allTags.length;
    
    if (nsfwModeEnabled) {
        // If NSFW mode is on, use all tags
        allTags = [...allTagsWithExplicit];
    } else {
        // If NSFW mode is off, filter out explicit tags
        allTags = allTagsWithExplicit.filter(tag => !tag.explicit);
    }
    
    // Reinitialize Fuse with the updated tag list
    initCustomTagFuse();
    
    console.log(`Tag list updated: ${allTags.length} tags visible (${nsfwModeEnabled ? 'NSFW mode' : 'SFW mode - filtered ' + (allTagsWithExplicit.length - allTags.length) + ' explicit tags'})`);
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
    console.log("Custom tag search initialized");
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