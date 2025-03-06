/**
 * Character Blocks Module
 * 
 * Provides functions for creating and managing character blocks in the UI.
 */

import { showMaxCharacterWarning } from '../../utils/modal.js';
import { cleanDisplayName } from '../utils/nameFormatter.js';
import { 
    updateTitleOptions, 
    updateCharacterDropdown, 
    updateGenderToggle,
    updateAgeUpToggle,
    updateEnhancerDropdown,
    resetCharacterDropdown,
    populateDefaultTagPills,
    closeAllDropdowns
} from '../ui/dropdowns.js';
import { 
    incrementCharacterCount, 
    getCurrentCharacterCount, 
    getMaxCharacters 
} from '../state/characterState.js';
import { initCustomTagAutocomplete } from '../../customCharacter/ui/autocomplete.js';

/**
 * Creates and adds a new character block to the UI
 * 
 * @return {number|null} - The ID of the new character block or null if max reached
 */
export function addCharacterBlock() {
    const characterCount = getCurrentCharacterCount();
    const maxCharacters = getMaxCharacters();
    
    if (characterCount >= maxCharacters) {
        showMaxCharacterWarning(maxCharacters);
        return null;
    }

    const blockId = incrementCharacterCount();
    const container = document.getElementById('characters-container');

    // Main card element
    const div = document.createElement('div');
    div.className = 'character-block';
    div.id = 'character-' + blockId;

    // Make the character block a drop target for action assignments
    div.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    div.addEventListener('drop', function (e) {
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
            if (typeof window.showActionSelectionPopup === 'function') {
                window.showActionSelectionPopup(sourceId, targetId);
            }
        }
    });

    // Header (collapsible)
    const headerDiv = document.createElement('div');
    headerDiv.className = 'block-header';
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';

    // Drag handle
    const dragHandle = document.createElement('span');
    dragHandle.className = 'drag-handle';
    dragHandle.textContent = "≡";
    dragHandle.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    headerDiv.appendChild(dragHandle);

    // Header title
    const headerTitle = document.createElement('span');
    headerTitle.className = 'block-title';
    headerTitle.textContent = `Character ${blockId}`;
    headerDiv.appendChild(headerTitle);

    // Toggle icon (▼ / ▲)
    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'toggle-icon';
    toggleIcon.textContent = "▼";
    headerDiv.appendChild(toggleIcon);

    // Action Drag Handle
    const actionDragHandle = document.createElement('span');
    actionDragHandle.className = 'action-drag-handle';
    actionDragHandle.textContent = "🡆";
    actionDragHandle.setAttribute("draggable", "true");
    actionDragHandle.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData("text/plain", blockId.toString());
        e.dataTransfer.setData("action-drag", "true");
        e.dataTransfer.effectAllowed = "move";
        e.stopPropagation();
    });
    headerDiv.appendChild(actionDragHandle);

    // Collapsible content container
    const contentDiv = document.createElement('div');
    contentDiv.className = 'block-content';

    // Media Type Dropdown
    const mediaTypeLabel = document.createElement('label');
    mediaTypeLabel.textContent = 'Select Media Type:';
    contentDiv.appendChild(mediaTypeLabel);

    const mediaTypeContainer = document.createElement('div');
    mediaTypeContainer.className = 'custom-dropdown';

    const mediaTypeDisplay = document.createElement('div');
    mediaTypeDisplay.className = 'selected-display';
    mediaTypeDisplay.textContent = "-- Select Media Type --";

    const mediaTypeList = document.createElement('div');
    mediaTypeList.className = 'dropdown-list suggestions-list';

    const mediaTypes = [...new Set(characterData.map(item => item.mediaType))];
    mediaTypes.forEach(media => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = media;
        item.dataset.value = media;
        item.addEventListener('click', () => {
            mediaTypeDisplay.textContent = media;
            updateTitleOptions(blockId, media);
            resetCharacterDropdown(blockId);
            enhancerDiv.innerHTML = "";
            genderDiv.innerHTML = "";
            mediaTypeList.style.display = 'none';
        });
        mediaTypeList.appendChild(item);
    });

    mediaTypeContainer.appendChild(mediaTypeDisplay);
    mediaTypeContainer.appendChild(mediaTypeList);
    contentDiv.appendChild(mediaTypeContainer);

    // Title Dropdown
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Select Title:';
    contentDiv.appendChild(titleLabel);

    const titleContainer = document.createElement('div');
    titleContainer.className = 'custom-dropdown';
    titleContainer.id = 'title-div-' + blockId;

    const titleDisplay = document.createElement('div');
    titleDisplay.className = 'selected-display';
    titleDisplay.textContent = "-- Select Media Type First --";

    const titleList = document.createElement('div');
    titleList.className = 'dropdown-list suggestions-list';
    titleList.id = 'title-list-' + blockId;
    titleContainer.appendChild(titleDisplay);
    titleContainer.appendChild(titleList);
    contentDiv.appendChild(titleContainer);

    // Character Dropdown
    const charLabel = document.createElement('label');
    charLabel.textContent = 'Select Character:';
    contentDiv.appendChild(charLabel);

    const charContainer = document.createElement('div');
    charContainer.className = 'custom-dropdown';
    charContainer.id = 'character-div-' + blockId;

    const charDisplay = document.createElement('div');
    charDisplay.className = 'selected-display';
    charDisplay.textContent = "-- Select Character --";

    const charList = document.createElement('div');
    charList.className = 'dropdown-list suggestions-list character-selector';
    charList.id = 'char-list-' + blockId;
    charContainer.appendChild(charDisplay);
    charContainer.appendChild(charList);
    contentDiv.appendChild(charContainer);

    // Gender Dropdown for genderswap
    const genderDiv = document.createElement('div');
    genderDiv.id = 'gender-div-' + blockId;
    genderDiv.style.marginTop = '10px';
    contentDiv.appendChild(genderDiv);

    // Age Up Toggle
    const ageUpDiv = document.createElement('div');
    ageUpDiv.id = 'age-up-div-' + blockId;
    ageUpDiv.style.marginTop = '10px';
    contentDiv.appendChild(ageUpDiv);

    // Breast Size Slider (only visible for female characters with age up)
    const breastSizeDiv = document.createElement('div');
    breastSizeDiv.id = 'breast-size-div-' + blockId;
    breastSizeDiv.style.marginTop = '10px';
    breastSizeDiv.style.display = 'none'; // Hidden by default
    contentDiv.appendChild(breastSizeDiv);

    // Enhancer Dropdown
    const enhancerLabel = document.createElement('label');
    enhancerLabel.textContent = 'Enhancer:';
    contentDiv.appendChild(enhancerLabel);

    const enhancerDiv = document.createElement('div');
    enhancerDiv.className = 'custom-dropdown';
    enhancerDiv.id = 'enhancer-div-' + blockId;
    contentDiv.appendChild(enhancerDiv);

    // Custom Tag Section
    const customTagDiv = document.createElement('div');
    customTagDiv.id = 'custom-tag-div-' + blockId;
    customTagDiv.className = 'custom-tag-section';
    customTagDiv.style.marginTop = '15px';

    const customTagLabel = document.createElement('label');
    customTagLabel.textContent = 'Add Custom Tags:';
    customTagDiv.appendChild(customTagLabel);

    const customTagInput = document.createElement('input');
    customTagInput.type = 'text';
    customTagInput.className = 'custom-tag-input';
    customTagInput.placeholder = 'Type to add custom tags...';
    customTagDiv.appendChild(customTagInput);

    const customTagSuggestions = document.createElement('div');
    customTagSuggestions.className = 'tag-suggestions';
    customTagDiv.appendChild(customTagSuggestions);

    const pillContainer = document.createElement('div');
    pillContainer.className = 'custom-pill-container';
    customTagDiv.appendChild(pillContainer);

    // Initialize tag autocomplete
    initCustomTagAutocomplete(
        customTagInput, 
        customTagSuggestions, 
        pillContainer, 
        () => {
            // Optional callback when tags change
        },
        (tag) => {
            // Check if the tag is already in pillContainer
            const pills = pillContainer.querySelectorAll('.custom-tag-pill');
            return Array.from(pills).some(pill => 
                (pill.dataset.originalTag || pill.textContent.replace('×', '').trim()) === tag
            );
        }
    );

    contentDiv.appendChild(customTagDiv);

    // Add the header and content to the block
    div.appendChild(headerDiv);
    div.appendChild(contentDiv);

    // Toggle content when clicking the header
    headerDiv.addEventListener('click', () => {
        if (contentDiv.style.display === 'none') {
            contentDiv.style.display = 'block';
            toggleIcon.textContent = "▼";
        } else {
            contentDiv.style.display = 'none';
            toggleIcon.textContent = "▲";
        }
    });

    // Toggle dropdown lists
    mediaTypeDisplay.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        mediaTypeList.style.display = mediaTypeList.style.display === 'block' ? 'none' : 'block';
    });

    titleDisplay.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        titleList.style.display = titleList.style.display === 'block' ? 'none' : 'block';
    });

    charDisplay.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        charList.style.display = charList.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-dropdown')) {
            closeAllDropdowns();
        }
    });

    container.appendChild(div);
    
    // Update action assignments whenever a character is added
    if (typeof window.updateAllActionAssignments === "function") {
        setTimeout(window.updateAllActionAssignments, 100);
    }

    return blockId;
}

/**
 * Adds a random character block of specified type
 * 
 * @param {string} type - Type filter for random character ("all", "vg", or "media")
 * @return {number|null} - The ID of the new character block or null if failed
 */
export function addRandomCharacterBlock(type) {
    // type: "all", "vg", or "media"
    const blockId = addCharacterBlock();
    if (!blockId) return null;

    // Filter characterData based on type
    let filtered = characterData;
    if (type === "vg") {
        filtered = characterData.filter(item => item.mediaType === "Video Games");
    } else if (type === "media") {
        filtered = characterData.filter(item => item.mediaType === "Shows or Movies");
    }

    if (filtered.length === 0) return null;

    // Pick a random character
    const randomCharacter = filtered[Math.floor(Math.random() * filtered.length)];

    // Get the character block
    const characterBlock = document.getElementById(`character-${blockId}`);
    if (!characterBlock) return null;

    // Find the correct dropdowns (more specific selectors)
    const mediaTypeContainer = characterBlock.querySelector('.custom-dropdown');
    const titleContainer = characterBlock.querySelectorAll('.custom-dropdown')[1];
    const charContainer = characterBlock.querySelectorAll('.custom-dropdown')[2];

    const mediaTypeDisplay = mediaTypeContainer?.querySelector('.selected-display');
    const titleDisplay = titleContainer?.querySelector('.selected-display');
    const charDisplay = charContainer?.querySelector('.selected-display');

    // Set Media Type and trigger updates
    if (mediaTypeDisplay) {
        mediaTypeDisplay.textContent = randomCharacter.mediaType;
        // Trigger title update
        updateTitleOptions(blockId, randomCharacter.mediaType);
    }

    // Set Title after a short delay to ensure title options are populated
    setTimeout(() => {
        if (titleDisplay) {
            titleDisplay.textContent = cleanDisplayName(randomCharacter.category);
            // Trigger character update
            updateCharacterDropdown(blockId, randomCharacter.mediaType, randomCharacter.category);
        }

        // Set Character after another short delay
        setTimeout(() => {
            if (charDisplay) {
                charDisplay.textContent = cleanDisplayName(randomCharacter.name);
                // Update gender and enhancer options
                updateGenderToggle(blockId, randomCharacter.name);
                updateAgeUpToggle(blockId, randomCharacter.name);
                updateEnhancerDropdown(blockId, randomCharacter.name);
                
                // Explicitly populate default tag pills
                populateDefaultTagPills(blockId, randomCharacter);

                // Update the character block title
                const blockTitle = characterBlock.querySelector('.block-title');
                if (blockTitle) {
                    blockTitle.textContent = `${cleanDisplayName(randomCharacter.name)} (${cleanDisplayName(randomCharacter.category)})`;
                }

                // Randomly toggle gender swap if available
                if (randomCharacter.genderswapAvailable) {
                    // Get the default gender
                    const defaultGender = randomCharacter.defaultGender || "girl";
                    
                    // Select a random gender from the three options
                    const genderOptions = ["boy", "girl", "other"];
                    const randomGender = genderOptions[Math.floor(Math.random() * genderOptions.length)];
                    
                    // Select the corresponding radio button
                    const selectedRadio = document.getElementById(`gender-${randomGender}-${blockId}`);
                    if (selectedRadio) {
                        selectedRadio.checked = true;
                        
                        // Trigger the change event to update the slider position and labels
                        selectedRadio.dispatchEvent(new Event('change'));
                    }
                }

                // Trigger any necessary updates
                if (typeof window.updateAllActionAssignments === "function") {
                    window.updateAllActionAssignments();
                }
            }
        }, 100);
    }, 100);

    return blockId;
} 