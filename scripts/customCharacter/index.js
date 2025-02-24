/**
 * Custom Character Module - Main Entry Point
 * 
 * This file exports the public API for the custom character module and
 * ensures backward compatibility with the original non-modular code.
 */

import { 
    addCustomCharacterBlock,
    getCurrentCustomCharacterCount,
    getMaxCustomCharacters
} from './customCharacterManager.js';
import { loadAllTags } from './utils/tagUtils.js';

// Export variables to the global scope for backward compatibility
window.characterCount = 0; // This will be managed internally by the module
window.maxCharacters = 4;  // This is now a constant in the module

// Export functions to the global scope for backward compatibility
window.addCustomCharacterBlock = addCustomCharacterBlock;

// Initialize the module
document.addEventListener('DOMContentLoaded', function() {
    // Load tag data
    loadAllTags()
        .then(() => {
            console.log("Custom Character module initialized");
        })
        .catch(error => {
            console.error("Error initializing Custom Character module:", error);
        });
});

// Export the module functions directly for ES module imports
export {
    addCustomCharacterBlock,
    getCurrentCustomCharacterCount,
    getMaxCustomCharacters
}; 