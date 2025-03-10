/*******************************************************
 * customCharacterManager.js
 * 
 * DEPRECATION NOTICE:
 * This module is being maintained for backward compatibility.
 * All functionality has been unified with the standard character system.
 * New code should use characterManager.js and characterBlocks.js with isCustom=true.
 * This module will be removed in a future version.
 *******************************************************/

/**
 * Custom Character Manager Module
 * 
 * Manages custom character blocks, state, and provides the main API for custom character functionality.
 */

import { initCustomTagAutocomplete, addAutocompleteStyling, getAllCharacterTags } from './ui/autocomplete.js';
import { showMaxCharacterWarning } from '../utils/modal.js';
import logger from '../utils/logger-init.js';
import { 
    addCharacterBlock,
} from '../character/blocks/characterBlocks.js';
import {
    getCurrentCharacterCount,
    getMaxCharacters,
    setCharacterCount
} from '../character/state/characterState.js';

// Custom character state
let characterCount = 0;
const maxCharacters = 4;

/**
 * Add a new custom character block
 * @return {number|null} - The ID of the new character block, or null if couldn't add
 */
export function addCustomCharacterBlock() {
    // Use the unified character block function with isCustom=true
    return addCharacterBlock(true);
}

/**
 * Callback function for updating action assignments
 * This calls the global updateAllActionAssignments function if it exists
 */
function updateActionAssignmentsCallback() {
    if (typeof window.updateAllActionAssignments === "function") {
        window.updateAllActionAssignments();
    }
}

/**
 * Get the current number of custom characters
 * @return {number} - The current custom character count
 */
export function getCurrentCustomCharacterCount() {
    // Use the unified character count system
    return getCurrentCharacterCount();
}

/**
 * Set the custom character count to a specific value
 * @param {number} count - The count to set
 */
export function setCustomCharacterCount(count) {
    // Use the unified character count system
    setCharacterCount(count);
}

/**
 * Get the maximum number of custom characters allowed
 * @return {number} - The maximum custom character count
 */
export function getMaxCustomCharacters() {
    // Use the unified character count system
    return getMaxCharacters();
}

/**
 * Show the action selection popup
 * This calls the global showActionSelectionPopup function
 * 
 * @param {string} sourceId - The ID of the action source
 * @param {string} targetId - The ID of the action target
 */
function showActionSelectionPopup(sourceId, targetId) {
    if (typeof window.showActionSelectionPopup === 'function') {
        window.showActionSelectionPopup(sourceId, targetId);
    } else {
        logger.error("showActionSelectionPopup function not found in global scope");
    }
}