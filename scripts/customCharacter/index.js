/**
 * Custom Character Module - Main Entry Point
 * 
 * This file exports the public API for the custom character module and
 * ensures backward compatibility with the original non-modular code.
 */

import { 
    addCustomCharacterBlock,
    getCurrentCustomCharacterCount,
    getMaxCustomCharacters,
    setCustomCharacterCount
} from './customCharacterManager.js';
import { 
    loadAllTags, 
    formatTag, 
    detectGenderFromTag 
} from './utils/tagUtils.js';
import logger from '../utils/logger-init.js';

// Export variables to the global scope for backward compatibility
window.characterCount = 0; // This will be managed internally by the module
window.maxCharacters = 4;  // This is now a constant in the module

// Export functions to the global scope for backward compatibility
window.addCustomCharacterBlock = addCustomCharacterBlock;
window.setCustomCharacterCount = setCustomCharacterCount;

// Export tag utility functions to global scope
window.formatTag = formatTag;
window.detectGenderFromTag = detectGenderFromTag;

// Initialize the module
document.addEventListener('DOMContentLoaded', function() {
    // Load tag data
    loadAllTags()
        .then(() => {
            logger.info("Custom Character module initialized");
        })
        .catch(error => {
            logger.error("Error initializing Custom Character module:", error);
        });
});

// Export the module functions directly for ES module imports
export {
    addCustomCharacterBlock,
    getCurrentCustomCharacterCount,
    getMaxCustomCharacters,
    setCustomCharacterCount
};