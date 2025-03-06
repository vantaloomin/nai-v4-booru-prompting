/**
 * Action Module
 * 
 * This file is a wrapper around the modular implementation in the actions/ directory.
 * It's kept for backward compatibility with existing code.
 * 
 * All functionality is delegated to the modular implementation.
 */

// Re-export all functionality from the modular implementation
export * from './actions/index.js';

/**
 * For backward compatibility, manually import specific functions
 * that may be used by other modules directly without going through 
 * the exports.
 */
import { 
    getActionAssignments,
    addActionBlock,
    updateAllActionAssignments,
    showActionSelectionPopup,
    getActionTags
} from './actions/index.js';

// Expose to window for backward compatibility with non-module scripts
window.getActionAssignments = getActionAssignments;
window.addActionBlock = addActionBlock;
window.updateAllActionAssignments = updateAllActionAssignments;
window.showActionSelectionPopup = showActionSelectionPopup;
window.getActionTags = getActionTags; 