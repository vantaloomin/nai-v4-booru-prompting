/**
 * Character Module - Main Entry Point
 * 
 * This file exports the public API for the character module and
 * ensures backward compatibility with the original non-modular code.
 */

import { 
    addCharacterBlock,
    addRandomCharacterBlock
} from './blocks/characterBlocks.js';
import { getCharacterSubjects } from './data/characterSubjects.js';
import { 
    getCurrentCharacterCount,
    getMaxCharacters
} from './state/characterState.js';
import { cleanDisplayName } from './utils/nameFormatter.js';
import { closeAllDropdowns, updateAgeUpToggle } from './ui/dropdowns.js';

// Export variables to the global scope for backward compatibility
window.characterCount = 0; // This will be managed internally by the module
window.maxCharacters = 4;  // This is now a constant in the module

// Export functions to the global scope for backward compatibility
window.addCharacterBlock = addCharacterBlock;
window.addRandomCharacterBlock = addRandomCharacterBlock;
window.getCharacterSubjects = getCharacterSubjects;
window.cleanDisplayName = cleanDisplayName;
window.closeAllDropdowns = closeAllDropdowns;
window.updateAgeUpToggle = updateAgeUpToggle;
window.getCurrentCharacterCount = getCurrentCharacterCount;
window.getMaxCharacters = getMaxCharacters;

// Export the module functions directly for ES module imports
export {
    addCharacterBlock,
    addRandomCharacterBlock,
    getCharacterSubjects,
    getCurrentCharacterCount,
    getMaxCharacters,
    cleanDisplayName,
    closeAllDropdowns,
    updateAgeUpToggle
}; 