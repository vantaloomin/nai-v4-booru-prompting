/**
 * Action Display Module
 * 
 * Handles the display of actions on character blocks
 */

import { getCharacterOptions } from './character.js';
import { getActionAssignments } from './assignments.js';
import { cleanDisplayName } from '../character/utils/nameFormatter.js';
import logger from '../utils/logger-init.js';

/**
 * Updates the assigned actions display for all character blocks
 */
export function updateAssignedActionsDisplay() {
    try {
        // Build a mapping of character IDs to their action messages
        const messageMapping = buildMessageMapping();
        
        // Update all character blocks with their associated action messages
        updateAllCharacterBlocks(messageMapping);
        
        // Force a refresh of the UI
        forceDisplayRefresh();
    } catch (error) {
        console.error("Error updating action display:", error);
    }
}

/**
 * Build a mapping of character IDs to their action messages
 * 
 * @returns {Object} Mapping of character IDs to arrays of action messages
 */
function buildMessageMapping() {
    const messageMapping = {};
    const actionBlocks = document.querySelectorAll('.action-block');
    
    // Get all character options to help with name resolution
    const allCharOptions = getCharacterOptions();
    
    // Debug: Console log character options to check what we're working with
    logger.debug("All character options:", allCharOptions);
    
    // Function to find the real name from character ID
    function getRealName(charId) {
        const char = allCharOptions.find(c => c.value === charId);
        return char ? (char.realValue || char.display) : charId;
    }

    actionBlocks.forEach(block => {
        const actionSelect = block.querySelector('.action-select');
        if (!actionSelect || !actionSelect.value) return; // Skip if no action is selected.
        const actionValue = actionSelect.value;

        // Determine mode by checking the radio buttons in this block.
        const parts = block.id.split("-");
        const actionId = parts[2];
        const radios = block.querySelectorAll(`input[name="action-mode-${actionId}"]`);
        let mode = "st";
        radios.forEach(radio => {
            if (radio.checked) mode = radio.value;
        });

        // Get the source and target character selections.
        const sourceSelect = block.querySelector('.action-source');
        const targetSelect = block.querySelector('.action-target');
        const sourceName = sourceSelect ? sourceSelect.value : "";
        const targetName = targetSelect ? targetSelect.value : "";
        
        // Debug log the selections
        logger.debug(`Action ${actionId}: ${mode} action:${actionValue} source:${sourceName} target:${targetName}`);

        if (mode === "st") {
            if (sourceName) {
                const cleanTarget = targetName ? cleanDisplayName(getRealName(targetName)) : "N/A";
                const msg = `source#${actionValue} → To ${cleanTarget}`;
                if (!messageMapping[sourceName]) messageMapping[sourceName] = [];
                messageMapping[sourceName].push(msg);
            }
            if (targetName) {
                const cleanSource = sourceName ? cleanDisplayName(getRealName(sourceName)) : "N/A";
                const msg = `target#${actionValue} ← From ${cleanSource}`;
                if (!messageMapping[targetName]) messageMapping[targetName] = [];
                messageMapping[targetName].push(msg);
            }
        } else if (mode === "mutual") {
            if (sourceName && targetName) {
                const cleanSource = cleanDisplayName(getRealName(sourceName));
                const cleanTarget = cleanDisplayName(getRealName(targetName));
                const msgForSource = `mutual#${actionValue} ↔ With ${cleanTarget}`;
                const msgForTarget = `mutual#${actionValue} ↔ With ${cleanSource}`;
                if (!messageMapping[sourceName]) messageMapping[sourceName] = [];
                messageMapping[sourceName].push(msgForSource);
                if (!messageMapping[targetName]) messageMapping[targetName] = [];
                messageMapping[targetName].push(msgForTarget);
            }
        }
    });
    
    // Debug log the message mapping
    logger.debug("Message mapping:", messageMapping);
    
    return messageMapping;
}

/**
 * Update all character blocks with action messages
 * 
 * @param {Object} messageMapping - Mapping of character IDs to their action messages
 */
function updateAllCharacterBlocks(messageMapping) {
    // Get all character blocks, both standard and custom
    const allBlocks = document.querySelectorAll('.character-block, .custom-character-block');
    
    allBlocks.forEach(block => {
        // Determine if it's a custom character block
        const isCustom = block.classList.contains('custom-character-block') || 
                         block.classList.contains('custom-mode');
                         
        // Get the block ID based on the block type
        let blockId;
        if (block.classList.contains('custom-character-block')) {
            // Legacy custom character format
            blockId = block.id.split('-')[2];
        } else {
            // Standard character block format
            blockId = block.id.split('-')[1];
        }
        
        if (!blockId) return;
        
        // Determine the character ID for message mapping lookup
        const charId = isCustom ? `custom-${blockId}` : blockId;
        
        // Create or get the actions display element
        let actionsDisplay = block.querySelector('.assigned-actions');
        if (!actionsDisplay) {
            actionsDisplay = document.createElement('div');
            actionsDisplay.className = 'assigned-actions';
            actionsDisplay.style.marginTop = "8px";
            actionsDisplay.style.fontStyle = "italic";
            actionsDisplay.style.color = "#ff99ff";
            
            // Add after the content div
            const contentDiv = block.querySelector('.block-content') || 
                              block.querySelector('.custom-block-content');
            if (contentDiv) {
                block.insertBefore(actionsDisplay, contentDiv.nextSibling);
            } else {
                block.appendChild(actionsDisplay);
            }
        }
        
        // Update with action messages
        const messages = messageMapping[charId] || [];
        if (messages.length > 0) {
            actionsDisplay.innerHTML = '';
            actionsDisplay.textContent = "Actions: " + messages.join(" ; ");
            actionsDisplay.style.display = 'block';
        } else {
            actionsDisplay.textContent = "";
            actionsDisplay.style.display = 'none';
        }
    });
}

/**
 * Force a refresh of the action display elements
 */
function forceDisplayRefresh() {
    setTimeout(() => {
        document.querySelectorAll('.assigned-actions').forEach(display => {
            // Force a reflow to make sure the element is visible
            if (display.parentNode && display.textContent.trim()) {
                display.style.display = 'none';
                display.offsetHeight; // Force reflow
                display.style.display = '';
            }
        });
    }, 100);
} 