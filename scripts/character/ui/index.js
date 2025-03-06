/**
 * Character UI Module - Main Entry Point
 * 
 * This file exports all the UI-related functionality for character blocks.
 * It serves as the main entry point for the modular UI components.
 */

// Export public API from component modules
export { closeAllDropdowns } from './components/dropdownCore.js';
export { updateTitleOptions } from './components/titleDropdown.js';
export { 
    updateCharacterDropdown,
    resetCharacterDropdown
} from './components/characterDropdown.js';
export { updateGenderToggle } from './components/genderToggle.js';
export { updateAgeUpToggle } from './components/ageUpToggle.js';
export { updateEnhancerDropdown } from './components/enhancerDropdown.js';
export { populateDefaultTagPills } from './components/tagPills.js'; 