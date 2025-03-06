/**
 * Action Manager Module
 * 
 * This is a wrapper module that re-exports action management functionality
 * from the more focused modules. It's kept for backward compatibility.
 */

// Re-export from blocks module
export { 
    addActionBlock, 
    checkMutualAutoAssign,
    getActionCount,
    setActionCount
} from './blocks.js';

// Re-export from assignments module
export {
    getActionAssignments,
    getActionTags,
    refreshActionCharacterOptions,
    updateAllActionAssignments
} from './assignments.js';

// Re-export from display module
export { 
    updateAssignedActionsDisplay 
} from './display.js'; 