# Actions Module

This module provides functionality for managing character actions in the NovelAI Prompting application.

## Structure

The Actions module has been modularized for better maintainability, readability, and reusability:

- **index.js**: Main entry point that re-exports all functionality
- **utils.js**: Utility functions for actions
- **character.js**: Character-related functionality
- **blocks.js**: Action block creation and management
- **assignments.js**: Action assignment logic
- **display.js**: UI display of actions on character blocks
- **ui.js**: UI-related components and popups
- **actionManager.js**: Legacy wrapper for backward compatibility

## Module Responsibilities

- **utils.js**: Contains utility functions like `isNovelAIMode()`, `findCharacterIdByName()`, and `getRealNameById()`.

- **character.js**: Handles character-related functionality including `getCharacterOptions()` and `populateCharacterOptions()`.

- **blocks.js**: Manages the creation and deletion of action blocks with functions like `addActionBlock()`.

- **assignments.js**: Handles action assignments with functions like `getActionAssignments()`, `getActionTags()`, and `updateAllActionAssignments()`.

- **display.js**: Manages the display of actions on character blocks with `updateAssignedActionsDisplay()`.

- **ui.js**: Manages UI components like `showSDModeActionWarning()` and `showActionSelectionPopup()`.

## Usage

To use the actions functionality in your code, import the functions you need:

```javascript
// ES6 module syntax
import { 
    addActionBlock, 
    getActionAssignments, 
    showActionSelectionPopup 
} from './actions/index.js';

// You can also import specific functions directly from their respective modules
import { isNovelAIMode } from './actions/utils.js';
import { getCharacterOptions } from './actions/character.js';
import { updateAssignedActionsDisplay } from './actions/display.js';
```

For backward compatibility, these functions are also available on the global `window` object:

```javascript
// Non-module scripts can access functions via the window object
window.addActionBlock();
window.getActionAssignments();
window.showActionSelectionPopup();
window.updateAllActionAssignments();
window.getActionTags();
```

## Important Functions

- **addActionBlock()**: Adds a new action block to the UI
- **getActionAssignments()**: Gets all action assignments for characters
- **getActionTags()**: Gets all action tags for generation
- **showActionSelectionPopup()**: Shows a popup for selecting an action
- **updateAssignedActionsDisplay()**: Updates the display of assigned actions
- **updateAllActionAssignments()**: Updates all action assignments

## Notes

- This module only functions in NovelAI mode (not Stable Diffusion mode)
- The maximum number of actions is limited to 4 by default
- At least two characters must be added before actions can be assigned 