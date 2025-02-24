/**
 * Custom Character Module - Legacy Entry Point
 * 
 * This file is maintained for backward compatibility with the original codebase.
 * It imports functionality from the modular custom character implementation and 
 * exports it to the global scope to maintain the original API.
 * 
 * New code should import directly from the customCharacter module instead of relying on this file.
 */

// Import the new modular implementation
import { 
    addCustomCharacterBlock,
    getCurrentCustomCharacterCount,
    getMaxCustomCharacters
} from './customCharacter/index.js';

// Re-export to global scope for backward compatibility
window.addCustomCharacterBlock = addCustomCharacterBlock; 