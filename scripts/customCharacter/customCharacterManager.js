/**
 * Custom Character Manager Module
 * 
 * Manages custom character blocks, state, and provides the main API for custom character functionality.
 */

import { initCustomTagAutocomplete, addAutocompleteStyling, getAllCharacterTags } from './ui/autocomplete.js';
import { showMaxCharacterWarning } from '../utils/modal.js';

// Custom character state
let characterCount = 0;
const maxCharacters = 4;

/**
 * Creates and adds a new custom character block to the UI
 * 
 * @return {number|null} - The ID of the new custom character block or null if max reached
 */
export function addCustomCharacterBlock() {
    if (characterCount >= maxCharacters) {
        showMaxCharacterWarning(maxCharacters);
        return null;
    }

    characterCount++;
    const blockId = characterCount;

    // Main container for the custom character block
    const container = document.getElementById('characters-container');

    const blockDiv = document.createElement('div');
    blockDiv.className = 'custom-character-block';
    blockDiv.id = `custom-character-${blockId}`;

    // --- Header Section ---
    const headerDiv = document.createElement('div');
    headerDiv.className = 'custom-block-header';

    // Drag handle
    const dragHandle = document.createElement('span');
    dragHandle.className = 'custom-drag-handle';
    dragHandle.textContent = '≡';
    dragHandle.title = 'Re-position';
    // Prevent toggle if user drags
    dragHandle.addEventListener('click', (e) => e.stopPropagation());
    headerDiv.appendChild(dragHandle);

    // Title
    const titleSpan = document.createElement('span');
    titleSpan.className = 'custom-block-title';
    titleSpan.textContent = `Custom Character ${blockId}`;
    headerDiv.appendChild(titleSpan);

    // Toggle icon
    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'custom-toggle-icon';
    toggleIcon.textContent = '▼';
    toggleIcon.title = 'Collapse Card';
    headerDiv.appendChild(toggleIcon);

    // Action Drag Handle
    const actionDragHandle = document.createElement('span');
    actionDragHandle.className = 'action-drag-handle';
    actionDragHandle.textContent = "🡆";
    actionDragHandle.title = 'Action Linking';
    actionDragHandle.setAttribute("draggable", "true");
    actionDragHandle.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData("text/plain", blockId.toString());
        e.dataTransfer.setData("action-drag", "true");
        e.dataTransfer.effectAllowed = "move";
        e.stopPropagation();
    });
    headerDiv.appendChild(actionDragHandle);

    blockDiv.appendChild(headerDiv);

    // --- Content Section ---
    const contentDiv = document.createElement('div');
    contentDiv.className = 'custom-block-content';

    // Tag label
    const tagLabel = document.createElement('label');
    tagLabel.textContent = 'Custom Tags:';
    contentDiv.appendChild(tagLabel);

    // Search wrapper
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'custom-search-wrapper';
    contentDiv.appendChild(searchWrapper);

    // Tag input
    const tagInput = document.createElement('input');
    tagInput.type = 'text';
    tagInput.placeholder = 'Type tag here...';
    tagInput.className = 'custom-tag-input';
    searchWrapper.appendChild(tagInput);

    // Optional clear icon
    const clearIcon = document.createElement('span');
    clearIcon.className = 'custom-clear-icon';
    clearIcon.textContent = '✖';
    clearIcon.addEventListener('click', () => {
        tagInput.value = '';
        suggestionContainer.innerHTML = '';
    });
    searchWrapper.appendChild(clearIcon);

    // Suggestions list container
    const suggestionContainer = document.createElement('div');
    suggestionContainer.className = 'custom-suggestions-list';
    searchWrapper.appendChild(suggestionContainer);

    // Pill container
    const pillContainer = document.createElement('div');
    pillContainer.className = 'custom-pill-container';
    contentDiv.appendChild(pillContainer);

    // Initialize autocomplete with the pill container
    initCustomTagAutocomplete(
        tagInput, 
        suggestionContainer, 
        pillContainer, 
        updateActionAssignmentsCallback,
        null, // No duplicate check for custom characters
        () => {
            // Get the corresponding base character ID based on the custom character ID
            // For simplicity, custom character 1 corresponds to base character 1, and so on
            return getAllCharacterTags(blockId);
        }
    );

    blockDiv.appendChild(contentDiv);

    // --- Remove Button ---
    const removeBtnContainer = document.createElement('div');
    removeBtnContainer.className = 'custom-remove-btn-container';
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove Character';
    removeBtn.addEventListener('click', () => {
        container.removeChild(blockDiv);
        characterCount--;
        updateActionAssignmentsCallback();
    });
    removeBtnContainer.appendChild(removeBtn);
    blockDiv.appendChild(removeBtnContainer);

    // Append to the DOM
    container.appendChild(blockDiv);

    // Make the entire character block a drop target for action assignments
    blockDiv.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    blockDiv.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Only show action popup if this is an action drag (not reordering)
        const isActionDrag = e.dataTransfer.getData("action-drag") === "true";
        if (!isActionDrag) {
            return; // Exit early if this is not an action drag
        }
        
        const sourceId = e.dataTransfer.getData("text/plain");
        const targetId = blockId.toString();
        if (sourceId && sourceId !== targetId) {
            showActionSelectionPopup(sourceId, targetId);
        }
    });

    // Toggle visibility when clicking the header
    headerDiv.addEventListener('click', function() {
        const content = blockDiv.querySelector('.custom-block-content');
        const isVisible = content.style.display !== 'none';
        
        if (isVisible) {
            // Collapse the content
            content.style.display = 'none';
            toggleIcon.textContent = '▲';
            toggleIcon.title = "Expand Card"; // Update tooltip for collapsed state
        } else {
            // Expand the content
            content.style.display = 'block';
            toggleIcon.textContent = '▼';
            toggleIcon.title = "Collapse Card"; // Update tooltip for expanded state
        }
    });

    // Add autocomplete styling
    addAutocompleteStyling();

    // Update action assignments
    updateActionAssignmentsCallback();
    
    return blockId;
}

/**
 * Callback function for updating action assignments
 * This calls the global updateAllActionAssignments function if it exists
 */
function updateActionAssignmentsCallback() {
    if (typeof updateAllActionAssignments === 'function') {
        setTimeout(updateAllActionAssignments, 100);
    }
}

/**
 * Get the current count of custom characters
 * 
 * @returns {number} The current count of custom characters
 */
export function getCurrentCustomCharacterCount() {
    return characterCount;
}

/**
 * Get the maximum allowed number of custom characters
 * 
 * @returns {number} The maximum allowed number of custom characters
 */
export function getMaxCustomCharacters() {
    return maxCharacters;
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
        console.error("showActionSelectionPopup function not found in global scope");
    }
} 