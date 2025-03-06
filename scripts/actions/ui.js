/**
 * UI Module for Actions
 * 
 * Handles UI-related functionality for actions
 */

import { isNovelAIMode } from './utils.js';
import { getCharacterOptions } from './character.js';
import { actionTags } from './constants.js';
import { showMaxActionWarning, showMinCharacterWarning } from '../utils/modal.js';
import { addActionBlock } from './blocks.js';
import { updateAssignedActionsDisplay } from './display.js';

/**
 * Helper function to show a styled modal warning when attempting to add actions in Stable Diffusion mode
 * 
 * @returns {boolean} Always returns false
 */
export function showSDModeActionWarning() {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.zIndex = '1000';
    
    // Create modal container - using darker gray like the reset modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.style.backgroundColor = '#333';
    modalContainer.style.borderRadius = '8px';
    modalContainer.style.padding = '20px';
    modalContainer.style.maxWidth = '400px';
    modalContainer.style.width = '90%';
    modalContainer.style.position = 'relative';
    
    // Create close button
    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '15px';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = 'white';
    closeButton.onclick = function() {
        document.body.removeChild(modalOverlay);
    };
    
    // Create modal title
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Feature Not Available';
    modalTitle.style.margin = '0 0 15px 0';
    modalTitle.style.color = 'white';
    
    // Create modal message
    const modalMessage = document.createElement('p');
    modalMessage.textContent = 'Actions are only available in NovelAI mode. Please switch to NovelAI mode to add actions.';
    modalMessage.style.color = 'white';
    modalMessage.style.marginBottom = '20px';
    
    // Create action button
    const actionButton = document.createElement('button');
    actionButton.textContent = 'OK';
    actionButton.style.backgroundColor = '#aa55ee';
    actionButton.style.color = 'white';
    actionButton.style.border = 'none';
    actionButton.style.borderRadius = '4px';
    actionButton.style.padding = '8px 20px';
    actionButton.style.cursor = 'pointer';
    actionButton.onclick = function() {
        document.body.removeChild(modalOverlay);
    };
    
    // Add everything to the modal
    modalContainer.appendChild(closeButton);
    modalContainer.appendChild(modalTitle);
    modalContainer.appendChild(modalMessage);
    modalContainer.appendChild(actionButton);
    
    // Add the modal to the overlay
    modalOverlay.appendChild(modalContainer);
    
    // Add click event to close when clicking outside the modal
    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
    
    // Add to body
    document.body.appendChild(modalOverlay);
    return false;
}

/**
 * Displays a modal pop-up allowing the user to select an action.
 * 
 * @param {string} sourceBlockId - ID of the source character block
 * @param {string} targetBlockId - ID of the target character block
 */
export function showActionSelectionPopup(sourceBlockId, targetBlockId) {
    // Check if in Stable Diffusion mode and show warning if trying to add actions
    if (!isNovelAIMode()) {
        return showSDModeActionWarning();
    }
    
    // Create a modal popup for selecting an action
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'action-modal-overlay';
    modalOverlay.classList.add('modal-overlay');
    const modalContainer = document.createElement('div');
    modalContainer.id = 'action-modal-container';
    modalContainer.classList.add('modal-container');
    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.classList.add('modal-close');
    closeButton.addEventListener('click', function () {
        document.body.removeChild(modalOverlay);
    });
    modalContainer.appendChild(closeButton);
    const title = document.createElement('h3');
    title.textContent = 'Select Action';
    modalContainer.appendChild(title);
    const modeToggleContainer = document.createElement('div');
    modeToggleContainer.classList.add('mode-toggle-container');
    const toggleSwitch = document.createElement('label');
    toggleSwitch.classList.add('toggle-switch');
    const toggleInput = document.createElement('input');
    toggleInput.type = 'checkbox';
    toggleInput.id = 'mode-toggle';
    toggleInput.checked = true;
    const slider = document.createElement('span');
    slider.classList.add('slider');
    toggleSwitch.appendChild(toggleInput);
    toggleSwitch.appendChild(slider);
    modeToggleContainer.appendChild(toggleSwitch);
    const toggleLabel = document.createElement('span');
    toggleLabel.classList.add('toggle-label');
    toggleLabel.textContent = 'Source→Target';
    modeToggleContainer.appendChild(toggleLabel);
    toggleInput.addEventListener('change', function () {
        toggleLabel.textContent = this.checked ? 'Source→Target' : 'Mutual';
    });
    modalContainer.appendChild(modeToggleContainer);
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search actions...';
    searchInput.classList.add('action-search');
    modalContainer.appendChild(searchInput);
    const actionsContainer = document.createElement('div');
    actionsContainer.id = 'actions-container-modal';
    actionsContainer.classList.add('actions-container-modal');
    modalContainer.appendChild(actionsContainer);
    
    function renderActionButtons(filterText) {
        actionsContainer.innerHTML = '';
        const filtered = actionTags.filter(act => act.toLowerCase().includes(filterText.toLowerCase())).sort((a, b) => a.localeCompare(b));
        
        if (filtered.length === 0) {
            const noResult = document.createElement('div');
            noResult.textContent = 'No actions found.';
            noResult.classList.add('no-actions-found');
            actionsContainer.appendChild(noResult);
            return;
        }
        
        filtered.forEach(action => {
            const btn = document.createElement('button');
            btn.textContent = action.charAt(0).toUpperCase() + action.slice(1);
            btn.classList.add('action-btn');
            btn.addEventListener('click', function () {
                const selectedMode = toggleInput.checked ? 'st' : 'mutual';
                chooseActionForDrag(sourceBlockId, targetBlockId, action, selectedMode);
                document.body.removeChild(modalOverlay);
            });
            actionsContainer.appendChild(btn);
        });
    }
    
    renderActionButtons('');
    searchInput.addEventListener('input', function () {
        renderActionButtons(this.value);
    });
    modalOverlay.appendChild(modalContainer);
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
    document.body.appendChild(modalOverlay);
}

/**
 * Called after the user selects an action from the pop-up.
 * 
 * @param {string} sourceBlockId - ID of the source character block
 * @param {string} targetBlockId - ID of the target character block
 * @param {string} action - The selected action
 * @param {string} mode - The mode (st or mutual)
 */
export function chooseActionForDrag(sourceBlockId, targetBlockId, action, mode) {
    // This is called after showActionSelectionPopup, which already checks for NovelAI mode
    console.log(`Creating action: ${sourceBlockId} -> ${targetBlockId} (${action}) mode: ${mode}`);
    
    const newActionId = addActionBlock(true);
    // If addActionBlock returns false (due to being in SD mode), don't continue
    if (!newActionId) return;
    
    const newActionBlock = document.getElementById("action-block-" + newActionId);
    if (!newActionBlock) return;
    
    const actionSelect = newActionBlock.querySelector(".action-select");
    if (actionSelect) {
        actionSelect.value = action;
    }
    
    // Get source and target values
    let sourceVal, targetVal;
    
    // Check if source is a regular character or custom character
    if (document.getElementById(`character-${sourceBlockId}`)) {
        // Regular character
        sourceVal = `standard-${sourceBlockId}`;
    } else if (document.getElementById(`custom-character-${sourceBlockId}`)) {
        // Custom character
        sourceVal = `custom-${sourceBlockId}`;
    }
    
    // Check if target is a regular character or custom character
    if (document.getElementById(`character-${targetBlockId}`)) {
        // Regular character
        targetVal = `standard-${targetBlockId}`;
    } else if (document.getElementById(`custom-character-${targetBlockId}`)) {
        // Custom character
        targetVal = `custom-${targetBlockId}`;
    }
    
    console.log(`Resolved to: source=${sourceVal}, target=${targetVal}`);
    
    // Set the source and target values
    const sourceSelect = newActionBlock.querySelector(".action-source");
    const targetSelect = newActionBlock.querySelector(".action-target");
    if (sourceSelect && sourceVal) sourceSelect.value = sourceVal;
    if (targetSelect && targetVal) targetSelect.value = targetVal;
    
    // Set the mode
    const radios = newActionBlock.querySelectorAll(`input[name="action-mode-${newActionId}"]`);
    radios.forEach(radio => {
        if (radio.value === mode) {
            radio.checked = true;
        }
    });
    
    // Update the display
    updateAssignedActionsDisplay();
} 