/**
 * UI Module for Actions
 * 
 * Handles UI-related functionality for actions
 */

import { addActionBlock, getActionCount, setActionCount } from './blocks.js';
import { getCharacterOptions } from './character.js';
import { isNovelAIMode } from './utils.js';
import { showMaxActionWarning, showMinCharacterWarning } from '../../z-retired/modal.js';
import { actionTags } from './constants.js';
import { updateAssignedActionsDisplay } from './display.js';
import { showToast } from '../utils/toast.js';

// Add import for loadActionsFromCSV function
import { loadActionsFromCSV } from '../data/actionList.js';
import logger from '../utils/logger-init.js';

/**
 * Helper function to show a styled toast warning when attempting to add actions in Stable Diffusion mode
 */
export function showSDModeActionWarning() {
    return showToast({
        title: 'Mode Warning',
        message: 'Actions are primarily designed for NovelAI mode. While you can use them in Stable Diffusion mode, they may not produce optimal results. Consider switching to NovelAI mode for best results with actions.',
        type: 'warning',
        duration: 5000 // Show for 5 seconds
    });
}

/**
 * Function to reload actions from CSV
 */
function reloadActionsFromCSV() {
    logger.info("Manual reload of actions from CSV initiated");
    loadActionsFromCSV().then(() => {
        logger.success("Actions reload completed");
    }).catch(error => {
        logger.error("Error during manual actions reload:", error);
    });
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
    
    // Store the source and target IDs as data attributes for later use
    modalContainer.setAttribute('data-source-id', sourceBlockId);
    modalContainer.setAttribute('data-target-id', targetBlockId);
    
    // Add close button
    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.classList.add('modal-close');
    closeButton.addEventListener('click', function () {
        document.body.removeChild(modalOverlay);
    });
    modalContainer.appendChild(closeButton);
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Select Action';
    modalContainer.appendChild(title);
    
    // Add mode toggle container
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
    
    // Add search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search actions...';
    searchInput.classList.add('action-search');
    modalContainer.appendChild(searchInput);
    
    // Add reload button
    const reloadButton = document.createElement('button');
    reloadButton.textContent = 'Reload Actions';
    reloadButton.classList.add('reload-actions-btn');
    reloadButton.style.marginBottom = '10px';
    reloadButton.addEventListener('click', function() {
        // Show loading indicator
        const loadingText = document.createElement('span');
        loadingText.textContent = ' Loading...';
        loadingText.classList.add('loading-text');
        this.appendChild(loadingText);
        this.disabled = true;
        
        // Attempt to reload actions
        reloadActionsFromCSV();
    });
    modalContainer.appendChild(reloadButton);
    
    // Add actions container (scrollable)
    const actionsContainer = document.createElement('div');
    actionsContainer.id = 'actions-container-modal';
    actionsContainer.classList.add('actions-container-modal');
    modalContainer.appendChild(actionsContainer);
    
    // Function to render action buttons based on filter
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
            
            // Format the action text: replace underscores with spaces and use Title Case
            const formattedAction = action
                .replace(/_/g, ' ')  // Replace underscores with spaces
                .split(' ')  // Split into words
                .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                .join(' ');  // Join back with spaces
                
            btn.textContent = formattedAction;
            btn.classList.add('action-btn');
            btn.addEventListener('click', function () {
                const selectedMode = toggleInput.checked ? 'st' : 'mutual';
                chooseActionForDrag(sourceBlockId, targetBlockId, action, selectedMode);
                document.body.removeChild(modalOverlay);
            });
            actionsContainer.appendChild(btn);
        });
    }
    
    // Initial render of all action buttons
    renderActionButtons('');
    
    // Add filter functionality
    searchInput.addEventListener('input', function () {
        renderActionButtons(this.value);
    });
    
    // Add modal to page
    modalOverlay.appendChild(modalContainer);
    
    // Close when clicking outside
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
    
    document.body.appendChild(modalOverlay);
}

// Add listener for when actions are updated from CSV
window.addEventListener('actionsUpdated', () => {
    // If an action modal is currently open, refresh its action buttons
    const existingModal = document.getElementById('action-modal-overlay');
    if (existingModal) {
        const searchInput = existingModal.querySelector('.action-search');
        const filterText = searchInput ? searchInput.value : '';
        const actionsContainer = existingModal.querySelector('#actions-container-modal');
        
        // Reset the reload button if it exists
        const reloadButton = existingModal.querySelector('.reload-actions-btn');
        if (reloadButton) {
            reloadButton.disabled = false;
            const loadingText = reloadButton.querySelector('.loading-text');
            if (loadingText) {
                reloadButton.removeChild(loadingText);
            }
        }
        
        if (actionsContainer) {
            // Re-render the action buttons with the current filter
            actionsContainer.innerHTML = '';
            const filtered = actionTags.filter(act => act.toLowerCase().includes(filterText.toLowerCase())).sort((a, b) => a.localeCompare(b));
            
            if (filtered.length === 0) {
                const noResult = document.createElement('div');
                noResult.textContent = 'No actions found.';
                noResult.classList.add('no-actions-found');
                actionsContainer.appendChild(noResult);
            } else {
                filtered.forEach(action => {
                    const btn = document.createElement('button');
                    
                    // Format the action text: replace underscores with spaces and use Title Case
                    const formattedAction = action
                        .replace(/_/g, ' ')  // Replace underscores with spaces
                        .split(' ')  // Split into words
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                        .join(' ');  // Join back with spaces
                        
                    btn.textContent = formattedAction;
                    btn.classList.add('action-btn');
                    btn.addEventListener('click', function () {
                        const toggleInput = existingModal.querySelector('#mode-toggle');
                        const selectedMode = toggleInput && toggleInput.checked ? 'st' : 'mutual';
                        
                        // We need to get the sourceBlockId and targetBlockId from the modal
                        // As a fallback, use a default behavior
                        const modalContainer = existingModal.querySelector('#action-modal-container');
                        const sourceBlockId = modalContainer.getAttribute('data-source-id') || '';
                        const targetBlockId = modalContainer.getAttribute('data-target-id') || '';
                        
                        if (sourceBlockId && targetBlockId) {
                            chooseActionForDrag(sourceBlockId, targetBlockId, action, selectedMode);
                        }
                        
                        document.body.removeChild(existingModal);
                    });
                    actionsContainer.appendChild(btn);
                });
            }
        }
    }
});

/**
 * This is called after showActionSelectionPopup, which already checks for NovelAI mode
 */
export function chooseActionForDrag(sourceBlockId, targetBlockId, action, mode = 'st') {
    // Check if we have at least 2 characters
    const characterOptions = getCharacterOptions();
    if (characterOptions.length < 2) {
        return showMinCharacterWarning();
    }
    
    // Get the action block count
    let actionCount = getActionCount();
    
    // Add the new action block
    const newActionBlock = addActionBlock(true);
    if (!newActionBlock) {
        return false;
    }
    
    // Set the properties of the action block
    const sourceSelect = newActionBlock.querySelector(".character-select.source");
    if (sourceSelect) {
        sourceSelect.value = sourceBlockId;
    }
    
    const targetSelect = newActionBlock.querySelector(".character-select.target");
    if (targetSelect) {
        targetSelect.value = targetBlockId;
    }
    
    const actionSelect = newActionBlock.querySelector(".action-select");
    if (actionSelect) {
        actionSelect.value = action;
    }
    
    // Set the mode
    const actionId = newActionBlock.id.split("-")[2];
    const stRadio = document.getElementById(`st-${actionId}`);
    const mutualRadio = document.getElementById(`mutual-${actionId}`);
    
    if (mode === 'mutual' && mutualRadio) {
        mutualRadio.checked = true;
    } else if (stRadio) {
        stRadio.checked = true;
    }
    
    // Increment the counter
    setActionCount(actionCount + 1);
    
    // Update the preview
    updateAssignedActionsDisplay();
    
    return true;
} 