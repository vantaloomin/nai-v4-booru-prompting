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
    decrementCharacterCount,
    setCharacterCount 
} from './state/characterState.js';
import { processGenderedTags } from './utils/tagProcessor.js';

// Import from new search modules
import { 
    searchCharacters,
    fuseSearch,
    getSearchCandidates,
    getCharacterByName
} from './search/characterSearch.js';
import {
    getAvailableFilters,
    getActiveFilters,
    setFilter,
    updateFilters,
    applyFilters,
    clearFilters,
    hasActiveFilters
} from './search/characterFilters.js';
import { createSearchBar } from './search/searchBarComponent.js';
import { createFilterPanel, updateFilterPanel } from './search/filterPanelComponent.js';

// Re-export all functions
export {
    // Character block management
    addCharacterBlock,
    addRandomCharacterBlock,
    
    // Character data access
    getCharacterSubjects,
    
    // Character state management
    getCurrentCharacterCount,
    getMaxCharacters,
    incrementCharacterCount,
    decrementCharacterCount,
    setCharacterCount,
    
    // Tag processing
    processGenderedTags,
    
    // New search functionality
    searchCharacters,
    fuseSearch,
    getSearchCandidates,
    getCharacterByName,
    
    // Filter functionality
    getAvailableFilters,
    getActiveFilters,
    setFilter,
    updateFilters,
    applyFilters,
    clearFilters,
    hasActiveFilters,
    
    // UI Components
    createSearchBar,
    createFilterPanel,
    updateFilterPanel
}; 