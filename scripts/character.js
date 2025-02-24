/**
 * Character Module - Legacy Entry Point
 * 
 * This file is maintained for backward compatibility with the original codebase.
 * It imports functionality from the modular character implementation and 
 * exports it to the global scope to maintain the original API.
 * 
 * New code should import directly from the character module instead of relying on this file.
 */

// Import from the modular character implementation
import { 
    addCharacterBlock,
    addRandomCharacterBlock,
    getCharacterSubjects,
    cleanDisplayName,
    closeAllDropdowns
} from './character/index.js';

// Define variables and functions in the global scope for backward compatibility
let characterCount = 0;
const maxCharacters = 4;

// Re-export the functions to global scope
window.addCharacterBlock = addCharacterBlock;
window.addRandomCharacterBlock = addRandomCharacterBlock;
window.getCharacterSubjects = getCharacterSubjects;
window.cleanDisplayName = cleanDisplayName;
window.closeAllDropdowns = closeAllDropdowns;

// Expose functions and variables to this file's scope for backward compatibility
function processEnhancers(enhancers) {
    return window.processEnhancers ? window.processEnhancers(enhancers) : [];
}

function sortAlphabetically(arr, getValue) {
    return window.sortAlphabetically ? window.sortAlphabetically(arr, getValue) : 
        arr.slice().sort((a, b) => getValue(a).localeCompare(getValue(b)));
}

function updateTitleOptions(id, selectedMedia) {
    // Forward to the modular implementation if it exists
    if (window.updateTitleOptions) {
        window.updateTitleOptions(id, selectedMedia);
    }
}

function updateCharacterDropdown(id, selectedMedia, selectedTitle) {
    // Forward to the modular implementation if it exists
    if (window.updateCharacterDropdown) {
        window.updateCharacterDropdown(id, selectedMedia, selectedTitle);
    }
}

function updateGenderToggle(id, selectedCharacterName) {
    // Forward to the modular implementation if it exists
    if (window.updateGenderToggle) {
        window.updateGenderToggle(id, selectedCharacterName);
    }
}

function updateEnhancerDropdown(id, selectedCharacterName) {
    // Forward to the modular implementation if it exists
    if (window.updateEnhancerDropdown) {
        window.updateEnhancerDropdown(id, selectedCharacterName);
    }
}

function resetCharacterDropdown(id) {
    // Forward to the modular implementation if it exists
    if (window.resetCharacterDropdown) {
        window.resetCharacterDropdown(id);
    }
}

// Listen for document ready to initialize search functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("character-search");
    const clearButton = document.getElementById("clear-search");
    const suggestionsContainer = document.getElementById("search-suggestions");

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-dropdown')) {
            closeAllDropdowns();
        }
    });
});
