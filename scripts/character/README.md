# Character Module

This directory contains the modularized character management system for the NovelAI Prompting tool.

## Directory Structure

```
character/
├── blocks/                  # Character block creation and management
│   └── characterBlocks.js   # Functions for creating character blocks in the UI
├── data/                    # Data-related functionality
│   └── characterSubjects.js # Functions for retrieving character subjects
├── state/                   # State management
│   └── characterState.js    # Character count and limits management
├── ui/                      # UI components and interactions
│   ├── components/          # Individual UI components
│   ├── utils/               # UI utility functions
│   └── dropdowns.js         # Dropdown management
├── utils/                   # Utility functions
│   ├── nameFormatter.js     # Name formatting utilities
│   ├── sorter.js            # Sorting utilities
│   └── tagProcessor.js      # Tag processing utilities
├── characterManager.js      # Legacy compatibility module
├── index.js                 # Main entry point
└── README.md                # This file
```

## Module Overview

### Main Entry Point

- `index.js`: Exports the public API and provides backward compatibility with global scope.

### Character Blocks

- `blocks/characterBlocks.js`: Contains functions for creating and managing character blocks in the UI.
  - `addCharacterBlock()`: Creates a new character block.
  - `addRandomCharacterBlock(type)`: Creates a random character block of a specified type.

### Character Data

- `data/characterSubjects.js`: Provides functions for retrieving character data.
  - `getCharacterSubjects()`: Gets character subjects and metadata for prompt generation.

### State Management

- `state/characterState.js`: Manages character count and limits.
  - `getCurrentCharacterCount()`: Returns the current character count.
  - `getMaxCharacters()`: Returns the maximum allowed character count.
  - `incrementCharacterCount()`: Increments the character count.
  - `setCharacterCount(count)`: Sets the character count to a specific value.

### Utilities

- `utils/tagProcessor.js`: Provides utilities for processing character tags.
  - `processGenderedTags(tags, fromGender, toGender)`: Processes gender-specific tags.
- `utils/nameFormatter.js`: Utilities for formatting character names.
  - `cleanDisplayName(name)`: Cleans up character names for display.
- `utils/sorter.js`: Sorting utilities.
  - `sortAlphabetically(arr, getValue)`: Sorts an array alphabetically.

### UI Components

- `ui/dropdowns.js`: Manages dropdown interactions.
  - `closeAllDropdowns()`: Closes all dropdown menus.
  - `updateTitleOptions(id, selectedMedia)`: Updates title dropdown options.
  - `updateCharacterDropdown(id, selectedMedia, selectedTitle)`: Updates character dropdown options.
  - And more...

## Legacy Compatibility

The `characterManager.js` file is maintained for backward compatibility with existing code that may import directly from it. It re-exports all functionality from the new modular structure.

New code should import directly from the appropriate modules rather than from `characterManager.js`.

## Usage Example

```javascript
// Modern approach - import specific functions from modules
import { addCharacterBlock } from './character/blocks/characterBlocks.js';
import { getCharacterSubjects } from './character/data/characterSubjects.js';

// Legacy approach - import from characterManager.js
import { addCharacterBlock, getCharacterSubjects } from './character/characterManager.js';
``` 