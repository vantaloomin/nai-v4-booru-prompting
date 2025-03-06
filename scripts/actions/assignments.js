/**
 * Action Assignments Module
 * 
 * Handles the assignment of actions to characters and retrieval of action assignments
 */

import { isNovelAIMode } from './utils.js';
import { getCharacterOptions, populateCharacterOptions } from './character.js';
import { updateAssignedActionsDisplay } from './display.js';

/**
 * Update (refresh) the character options in all action blocks.
 */
export function refreshActionCharacterOptions() {
    const allSourceSelects = document.querySelectorAll(".action-source");
    const allTargetSelects = document.querySelectorAll(".action-target");
    
    // Save the current selections before repopulating
    const savedSelections = [];
    allSourceSelects.forEach((sourceSelect, index) => {
        const targetSelect = allTargetSelects[index];
        savedSelections.push({
            sourceValue: sourceSelect.value,
            targetValue: targetSelect ? targetSelect.value : null
        });
    });
    
    // Repopulate all selects
    allSourceSelects.forEach(select => populateCharacterOptions(select));
    allTargetSelects.forEach(select => populateCharacterOptions(select));
    
    // Restore selections where possible
    allSourceSelects.forEach((sourceSelect, index) => {
        const targetSelect = allTargetSelects[index];
        const saved = savedSelections[index];
        
        if (saved.sourceValue) {
            // Try to find the option with the same value
            let foundSourceOption = Array.from(sourceSelect.options).find(opt => opt.value === saved.sourceValue);
            if (foundSourceOption) {
                sourceSelect.value = saved.sourceValue;
            }
        }
        
        if (targetSelect && saved.targetValue) {
            let foundTargetOption = Array.from(targetSelect.options).find(opt => opt.value === saved.targetValue);
            if (foundTargetOption) {
                targetSelect.value = saved.targetValue;
            }
        }
    });
    
    updateAssignedActionsDisplay();
}

/**
 * Call this whenever characters are added or removed to update all assignments.
 */
export function updateAllActionAssignments() {
    refreshActionCharacterOptions();
    updateAssignedActionsDisplay();
}

/**
 * Get a mapping of action assignments.
 * 
 * @returns {Object} A mapping of character IDs to their assigned actions
 */
export function getActionAssignments() {
    let assignments = {};
    const actionBlocks = document.querySelectorAll(".action-block");
    
    // Get the current character options to map between IDs and names
    const characterOptions = getCharacterOptions();
    
    actionBlocks.forEach(block => {
        const parts = block.id.split("-");
        const actionId = parts[2];
        const actionSelect = block.querySelector(".action-select");
        
        // Skip if no action is selected
        if (!actionSelect || !actionSelect.value) return;
        
        const selectedAction = actionSelect.value;
        
        // Determine the mode (st or mutual)
        const radios = block.querySelectorAll(`input[name="action-mode-${actionId}"]`);
        let mode = "st";
        radios.forEach(radio => {
            if (radio.checked) mode = radio.value;
        });
        
        // Get source and target values
        const sourceSelect = block.querySelector(".action-source");
        const targetSelect = block.querySelector(".action-target");
        const sourceVal = sourceSelect ? sourceSelect.value : "";
        const targetVal = targetSelect ? targetSelect.value : "";
        
        // Add assignments based on mode
        if (mode === "st") {
            if (sourceVal) {
                if (!assignments[sourceVal]) assignments[sourceVal] = [];
                assignments[sourceVal].push(`source#${selectedAction}`);
            }
            if (targetVal) {
                if (!assignments[targetVal]) assignments[targetVal] = [];
                assignments[targetVal].push(`target#${selectedAction}`);
            }
        } else if (mode === "mutual") {
            if (sourceVal) {
                if (!assignments[sourceVal]) assignments[sourceVal] = [];
                assignments[sourceVal].push(`mutual#${selectedAction}`);
            }
            if (targetVal) {
                if (!assignments[targetVal]) assignments[targetVal] = [];
                assignments[targetVal].push(`mutual#${selectedAction}`);
            }
        }
    });
    
    return assignments;
}

/**
 * Get all action tags for generation
 * 
 * @returns {Array} Array of action tags
 */
export function getActionTags() {
    // If in Stable Diffusion mode, don't include action tags
    if (!isNovelAIMode()) {
        return [];
    }
    
    const assignments = getActionAssignments();
    let tags = [];
    for (const charId in assignments) {
        tags = tags.concat(assignments[charId]);
    }
    return tags;
} 