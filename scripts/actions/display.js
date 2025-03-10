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
 * Function to update each character block with its assigned actions.
 */
export function updateAssignedActionsDisplay() {
    // Build a mapping: for each character (by its raw value), an array of linking messages.
    const messageMapping = buildMessageMapping();
    
    // Update the standard character blocks
    updateStandardCharacterBlocks(messageMapping);
    
    // Update the custom character blocks
    updateCustomCharacterBlocks(messageMapping);
    
    // Force a refresh of the UI
    forceDisplayRefresh();
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
 * Update the standard character blocks with action messages
 * 
 * @param {Object} messageMapping - Mapping of character IDs to their action messages
 */
function updateStandardCharacterBlocks(messageMapping) {
    const characterBlocks = document.querySelectorAll('.character-block');
    characterBlocks.forEach(block => {
        // Get the block ID
        const blockId = block.id.split("-")[1];
        const uniqueId = `standard-${blockId}`;
        
        // Create or find the actions display element
        let actionsDisplay = block.querySelector('.assigned-actions');
        if (!actionsDisplay) {
            actionsDisplay = document.createElement('div');
            actionsDisplay.className = 'assigned-actions';
            actionsDisplay.style.marginTop = "8px";
            actionsDisplay.style.fontStyle = "italic";
            actionsDisplay.style.color = "#ff99ff";
            
            // Insert after the enhancer div if it exists, otherwise append to content
            const contentDiv = block.querySelector('.block-content');
            if (contentDiv) {
                const enhancerDiv = contentDiv.querySelector('#enhancer-div-' + blockId);
                if (enhancerDiv) {
                    enhancerDiv.parentNode.insertBefore(actionsDisplay, enhancerDiv.nextSibling);
                } else {
                    contentDiv.appendChild(actionsDisplay);
                }
            } else {
                block.appendChild(actionsDisplay);
            }
        }
        
        // Debug log
        logger.debug(`Checking for actions for standard-${blockId}`);
        
        // Update the display with actions for this character
        if (messageMapping[uniqueId] && messageMapping[uniqueId].length > 0) {
            actionsDisplay.textContent = "Actions: " + messageMapping[uniqueId].join(" ; ");
            actionsDisplay.style.display = "";
            logger.debug(`Found actions for standard-${blockId}:`, messageMapping[uniqueId]);
        } else {
            actionsDisplay.textContent = "";
            actionsDisplay.style.display = "none";
        }
    });
}

/**
 * Update the custom character blocks with action messages
 * 
 * @param {Object} messageMapping - Mapping of character IDs to their action messages
 */
function updateCustomCharacterBlocks(messageMapping) {
    // Select both legacy and new unified custom character blocks
    const customCharBlocks = document.querySelectorAll('.custom-character-block, .character-block.custom-mode');
    customCharBlocks.forEach(block => {
        let blockId;
        
        // Handle both legacy and new unified format
        if (block.classList.contains('custom-character-block')) {
            // Legacy format
            blockId = block.id.split("-")[2];
        } else {
            // New unified format
            blockId = block.id.split("-")[1];
        }
        
        const customCharId = `custom-${blockId}`;
        
        // Create or get the actions display element
        let actionsDisplay = block.querySelector('.assigned-actions');
        if (!actionsDisplay) {
            actionsDisplay = document.createElement('div');
            actionsDisplay.className = 'assigned-actions';
            actionsDisplay.style.marginTop = "8px";
            actionsDisplay.style.fontStyle = "italic";
            actionsDisplay.style.color = "#ff99ff";
            
            // Insert after the pill container
            const pillContainer = block.querySelector('.custom-pill-container');
            if (pillContainer && pillContainer.parentNode) {
                pillContainer.parentNode.insertBefore(actionsDisplay, pillContainer.nextSibling);
            } else {
                const contentDiv = block.querySelector('.custom-block-content');
                if (contentDiv) {
                    contentDiv.appendChild(actionsDisplay);
                } else {
                    block.appendChild(actionsDisplay);
                }
            }
        }
        
        // Debug log
        logger.debug(`Checking for actions for custom-${blockId}`);
        
        // Update the display
        if (customCharId && messageMapping[customCharId] && messageMapping[customCharId].length > 0) {
            actionsDisplay.textContent = "Actions: " + messageMapping[customCharId].join(" ; ");
            actionsDisplay.style.display = "";
            logger.debug(`Found actions for custom-${blockId}:`, messageMapping[customCharId]);
        } else {
            actionsDisplay.textContent = "";
            actionsDisplay.style.display = "none";
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