/**
 * Actions Module
 * 
 * Main entry point for the actions functionality.
 * Re-exports all necessary functions from the modularized code.
 */

// Re-export utility functions
export { isNovelAIMode } from './utils.js';

// Re-export character-related functions
export { 
    getCharacterOptions, 
    populateCharacterOptions 
} from './character.js';

// Re-export UI-related functions
export { 
    showActionSelectionPopup, 
    showSDModeActionWarning,
    chooseActionForDrag
} from './ui.js';

// Re-export block-related functions
export { 
    addActionBlock,
    checkMutualAutoAssign
} from './blocks.js';

// Re-export assignment-related functions
export { 
    getActionAssignments, 
    getActionTags,
    refreshActionCharacterOptions,
    updateAllActionAssignments
} from './assignments.js';

// Re-export display-related functions
export { 
    updateAssignedActionsDisplay 
} from './display.js';

// For backward compatibility, make key functions available on window object
import { isNovelAIMode } from './utils.js';
import { addActionBlock } from './blocks.js';
import { getActionAssignments, getActionTags, updateAllActionAssignments } from './assignments.js';
import { showActionSelectionPopup } from './ui.js';
import { updateAssignedActionsDisplay } from './display.js';

// Expose to window for backward compatibility with non-module scripts
window.getActionAssignments = getActionAssignments;
window.addActionBlock = addActionBlock;
window.updateAllActionAssignments = updateAllActionAssignments;
window.showActionSelectionPopup = showActionSelectionPopup;
window.getActionTags = getActionTags; 