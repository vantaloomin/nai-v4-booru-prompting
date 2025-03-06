/**
 * Character Dropdowns Module
 * 
 * This is a compatibility layer to maintain the same exports as the original
 * dropdowns.js file, but redirecting to the new modular structure.
 * 
 * IMPORTANT: This file can eventually be replaced with direct imports from
 * the modular components by updating imports in dependent code.
 */

// Re-export all components from the new modular structure
export { 
    closeAllDropdowns,
    updateTitleOptions,
    updateCharacterDropdown,
    updateGenderToggle,
    updateEnhancerDropdown,
    updateAgeUpToggle,
    resetCharacterDropdown,
    populateDefaultTagPills
} from './index.js';