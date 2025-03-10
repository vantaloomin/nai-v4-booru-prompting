/**
 * Action Blocks Module
 * 
 * Handles the creation and management of action blocks in the UI
 */

import { isNovelAIMode } from './utils.js';
import { getCharacterOptions, populateCharacterOptions } from './character.js';
import { showSDModeActionWarning } from './ui.js';
import { showMaxActionWarning, showMinCharacterWarning } from '../utils/modal.js';
import { actionTags } from './constants.js';
import { updateAssignedActionsDisplay } from './display.js';
import { getAllAvailableActions } from './assignments.js';

// Global counter for actions
let actionCount = 0;
const maxActions = 4; // Adjust as needed

/**
 * Check for automatic mutual assignment of characters
 * 
 * @param {string} actionId - The action ID
 */
export function checkMutualAutoAssign(actionId) {
    const options = getCharacterOptions();
    if (options.length === 2) {
        const actionBlock = document.getElementById("action-block-" + actionId);
        if (actionBlock) {
            const sourceSelect = actionBlock.querySelector(".action-source");
            const targetSelect = actionBlock.querySelector(".action-target");
            if (sourceSelect && targetSelect) {
                sourceSelect.value = options[0].value;
                targetSelect.value = options[1].value;
            }
        }
    }
    updateAssignedActionsDisplay();
}

/**
 * Function to format action text for display
 * Replaces underscores with spaces and uses Title Case
 * 
 * @param {string} action - The raw action text
 * @returns {string} Formatted action text for display
 */
function formatActionForDisplay(action) {
    return action
        .replace(/_/g, ' ')  // Replace underscores with spaces
        .split(' ')  // Split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' ');  // Join back with spaces
}

/**
 * Add a new Action Block.
 * 
 * @param {boolean} bypassCheck - Whether to bypass the minimum character check
 * @returns {number|boolean} The action ID if successful, false otherwise
 */
export function addActionBlock(bypassCheck) {
    // Check if in Stable Diffusion mode and show warning if trying to add actions
    if (!isNovelAIMode()) {
        return showSDModeActionWarning();
    }
    
    if (!bypassCheck && getCharacterOptions().length < 2) {
        showMinCharacterWarning();
        return false;
    }
    
    if (actionCount >= maxActions) {
        showMaxActionWarning(maxActions);
        return false;
    }
    
    actionCount++;
    const actionId = actionCount;
    const container = document.getElementById("actions-container");
    const div = document.createElement("div");
    div.className = "action-block";
    div.id = "action-block-" + actionId;

    // Action dropdown.
    const actionLabel = document.createElement("label");
    actionLabel.className = "action-label";
    actionLabel.textContent = "Select Action:";
    div.appendChild(actionLabel);
    const actionSelect = document.createElement("select");
    actionSelect.className = "action-select";
    const defaultActionOption = document.createElement("option");
    defaultActionOption.value = "";
    defaultActionOption.textContent = "-- Select Action --";
    actionSelect.appendChild(defaultActionOption);
    const sortedActions = actionTags.slice().sort((a, b) => a.localeCompare(b));
    sortedActions.forEach(act => {
        const option = document.createElement("option");
        option.value = act;
        option.textContent = formatActionForDisplay(act);
        actionSelect.appendChild(option);
    });
    div.appendChild(actionSelect);

    // Mode selection: radio buttons.
    const modeDiv = document.createElement("div");
    modeDiv.className = "action-mode";
    const stLabel = document.createElement("label");
    const stRadio = document.createElement("input");
    stRadio.type = "radio";
    stRadio.name = "action-mode-" + actionId;
    stRadio.value = "st";
    stRadio.checked = true;
    stLabel.appendChild(stRadio);
    stLabel.appendChild(document.createTextNode(" S/T"));
    modeDiv.appendChild(stLabel);
    const mutualLabel = document.createElement("label");
    const mutualRadio = document.createElement("input");
    mutualRadio.type = "radio";
    mutualRadio.name = "action-mode-" + actionId;
    mutualRadio.value = "mutual";
    mutualLabel.appendChild(mutualRadio);
    mutualLabel.appendChild(document.createTextNode(" Mutual"));
    modeDiv.appendChild(mutualLabel);
    mutualRadio.addEventListener("change", function () {
        if (this.checked) {
            checkMutualAutoAssign(actionId);
        }
    });
    div.appendChild(modeDiv);

    // Source Character assignment.
    const sourceLabel = document.createElement("label");
    sourceLabel.textContent = "Source:";
    div.appendChild(sourceLabel);
    const sourceSelect = document.createElement("select");
    sourceSelect.className = "action-source";
    populateCharacterOptions(sourceSelect);
    div.appendChild(sourceSelect);

    // Target Character assignment.
    const targetLabel = document.createElement("label");
    targetLabel.textContent = "Target:";
    div.appendChild(targetLabel);
    const targetSelect = document.createElement("select");
    targetSelect.className = "action-target";
    populateCharacterOptions(targetSelect);
    div.appendChild(targetSelect);

    // Remove Action button.
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove Act";
    removeBtn.addEventListener("click", function () {
        container.removeChild(div);
        actionCount--;
        updateAssignedActionsDisplay();
    });
    div.appendChild(removeBtn);

    container.appendChild(div);
    updateAssignedActionsDisplay();
    return actionId;
}

/**
 * Get the current action count
 * 
 * @returns {number} The current number of action blocks
 */
export function getActionCount() {
    return actionCount;
}

/**
 * Set the action count (used for resetting)
 * 
 * @param {number} count - The new action count
 */
export function setActionCount(count) {
    actionCount = count;
}

/**
 * Refreshes select options with new action data
 */
function refreshActionSelects() {
    const actionSelects = document.querySelectorAll('.action-select');
    
    actionSelects.forEach(select => {
        // Remember the current value
        const currentValue = select.value;
        
        // Clear all options except the first default one
        while (select.options.length > 1) {
            select.remove(1);
        }
        
        // Add the updated action options
        const availableActions = getAllAvailableActions();
        const sortedActions = availableActions.slice().sort((a, b) => a.localeCompare(b));
        
        sortedActions.forEach(act => {
            const option = document.createElement("option");
            option.value = act;
            option.textContent = formatActionForDisplay(act);
            select.appendChild(option);
        });
        
        // Restore the previous selection if it still exists
        if (currentValue) {
            const optionExists = Array.from(select.options).some(option => option.value === currentValue);
            if (optionExists) {
                select.value = currentValue;
            }
        }
    });
}

// Listen for action updates
window.addEventListener('actionsUpdated', () => {
    refreshActionSelects();
}); 