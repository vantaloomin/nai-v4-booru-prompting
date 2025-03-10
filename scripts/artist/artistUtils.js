/**
 * Artist Utilities Module
 * 
 * Provides utilities for managing artist tags, including loading, searching, and formatting.
 */

import logger from '../utils/logger-init.js';

// Global variable for artist details
let fullArtistDetails = [];

// Fuse instance for artist search
let artistFuse = null;

/**
 * Loads artist details from the fullArtistDetails.js file
 * 
 * @return {Promise} - Promise that resolves when artist details are loaded
 */
export function loadArtistDetails() {
    // We're getting the data directly from the global variable loaded in fullArtistDetails.js
    return new Promise((resolve, reject) => {
        try {
            if (typeof detailedArtistTags !== 'undefined' && detailedArtistTags.length > 0) {
                fullArtistDetails = detailedArtistTags;
                logger.info("Artist details loaded:", fullArtistDetails.length);
                // Initialize Fuse after artist details are loaded
                initArtistFuse();
                resolve(fullArtistDetails);
            } else {
                setTimeout(() => {
                    // Try again after a short delay
                    if (typeof detailedArtistTags !== 'undefined' && detailedArtistTags.length > 0) {
                        fullArtistDetails = detailedArtistTags;
                        logger.info("Artist details loaded:", fullArtistDetails.length);
                        initArtistFuse();
                        resolve(fullArtistDetails);
                    } else {
                        logger.error("Unable to load artist details from global variable");
                        reject("Artist details not found");
                    }
                }, 500);
            }
        } catch (error) {
            logger.error("Error loading artist details:", error);
            reject(error);
        }
    });
}

/**
 * Initializes the Fuse instance for artist search
 */
function initArtistFuse() {
    const artistFuseOptions = {
        keys: [
            { name: 'name', weight: 2 },
            // We could add other properties to search through if needed
        ],
        includeScore: true,
        threshold: 0.6, // semi-restrictive threshold
        ignoreLocation: true, // search the entire string, not just the beginning
        minMatchCharLength: 2
    };

    // Create Fuse instance once artist details are loaded
    artistFuse = new Fuse(fullArtistDetails, artistFuseOptions);
    logger.debug("Artist Fuse initialized");
}

/**
 * Searches for artists matching the given query
 * 
 * @param {string} query - The search query
 * @param {number} limit - Maximum number of results to return
 * @return {Array} - Array of matching artist objects
 */
export function searchArtists(query, limit = 5) {
    if (!query || !artistFuse) return [];
    
    // Search using Fuse
    const results = artistFuse.search(query);
    return results.slice(0, limit);
}

/**
 * Gets the current Fuse instance
 * 
 * @return {Object} - The Fuse.js instance
 */
export function getArtistFuse() {
    return artistFuse;
}

/**
 * Formats an artist name for display
 * 
 * @param {string} name - The artist name to format
 * @return {string} - The formatted artist name
 */
export function formatArtist(name) {
    if (name === "NONE" || name === "RANDOM") return name;
    let firstPart = name.split(",")[0].trim();
    firstPart = firstPart.replace(/^(artist:|by\s+)/i, "").trim();
    firstPart = firstPart.replace(/\s*\([^)]*\)/g, "").trim();
    return firstPart.split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

/**
 * Creates a tag pill for the selected artist tag
 * 
 * @param {string} tag - The tag to create a pill for
 * @param {HTMLElement} container - The container to add the pill to
 * @param {Function} onChangeCallback - Callback function when tags are added/removed
 */
export function createArtistPill(tag, container, onChangeCallback) {
    // Check if pill already exists
    if (Array.from(container.children).some(pill => pill.dataset.originalTag === tag)) {
        return false;
    }
    
    // Create the pill
    const pill = document.createElement('span');
    pill.className = 'custom-tag-pill';
    pill.dataset.originalTag = tag;
    pill.textContent = formatArtist(tag);
    
    // Add remove button
    const removeBtn = document.createElement('span');
    removeBtn.className = 'custom-tag-remove';
    removeBtn.textContent = '×';
    removeBtn.addEventListener('click', () => {
        container.removeChild(pill);
        if (typeof onChangeCallback === 'function') {
            onChangeCallback();
        }
    });
    
    pill.appendChild(removeBtn);
    container.appendChild(pill);
    return true;
} 