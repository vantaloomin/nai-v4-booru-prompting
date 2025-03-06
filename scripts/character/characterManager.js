/**
 * Character Manager Module - Legacy Compatibility Version
 * 
 * This module is kept for backward compatibility with existing code that may
 * import directly from characterManager.js. It re-exports all functionality
 * from the new modular structure.
 * 
 * IMPORTANT: New code should import directly from the new module structure.
 */

import { 
    addCharacterBlock, 
    addRandomCharacterBlock 
} from './blocks/characterBlocks.js';
import { getCharacterSubjects } from './data/characterSubjects.js';
import { 
    getCurrentCharacterCount, 
    getMaxCharacters, 
    incrementCharacterCount, 
    setCharacterCount 
} from './state/characterState.js';
import { processGenderedTags } from './utils/tagProcessor.js';

// Re-export all functions
export {
    addCharacterBlock,
    addRandomCharacterBlock,
    getCharacterSubjects,
    getCurrentCharacterCount,
    getMaxCharacters,
    incrementCharacterCount,
    setCharacterCount,
    processGenderedTags
}; 