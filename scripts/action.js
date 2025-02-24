// action.js

let actionCount = 0;
const maxActions = 4; // Adjust as needed

// Helper function to check if we're in NovelAI mode
function isNovelAIMode() {
    const modeToggle = document.getElementById('mode-toggle');
    return modeToggle ? !modeToggle.checked : true; // Default to NovelAI mode if toggle not found
}

// Helper function to show a styled modal warning when attempting to add actions in Stable Diffusion mode
function showSDModeActionWarning() {
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

// Helper: Get current character options (only those with a valid selection).
function getCharacterOptions() {
    let options = [];
    
    // Get regular character blocks
    const charBlocks = document.querySelectorAll(".character-block");
    charBlocks.forEach(block => {
        const blockId = block.id.split("-")[1];
        
        // Try to find the character value via the title or selected character
        let charValue = "";
        let charDisplay = "";
        
        // First check the block title - it contains the character name and game
        const blockTitle = block.querySelector(".block-title");
        if (blockTitle && blockTitle.textContent) {
            // The title should contain the character name
            charDisplay = blockTitle.textContent.trim();
            
            // Extract the character name from the display text (before the parenthesis)
            const nameMatch = charDisplay.match(/^(.*?)\s*\(/);
            if (nameMatch && nameMatch[1]) {
                charValue = nameMatch[1].trim();
            } else {
                charValue = charDisplay;
            }
        }
        
        // Create a unique identifier for this character that we can use in the mapping
        const uniqueId = `standard-${blockId}`;
        
        if (charValue) {
            options.push({ 
                value: uniqueId, // Use a unique ID format
                realValue: charValue, // Store the actual character name
                display: charDisplay,
                blockId: blockId
            });
        }
    });
    
    // Get custom character blocks
    const customCharBlocks = document.querySelectorAll(".custom-character-block");
    customCharBlocks.forEach(block => {
        const blockId = block.id.split("-")[2];
        const blockTitle = block.querySelector(".custom-block-title");
        const titleText = blockTitle ? blockTitle.textContent.trim() : `Custom Character ${blockId}`;
        
        if (blockId) {
            const customCharId = `custom-${blockId}`;
            options.push({ 
                value: customCharId, 
                realValue: titleText,
                display: titleText,
                blockId: blockId,
                isCustom: true
            });
        }
    });
    
    return options;
}

function checkMutualAutoAssign(actionId) {
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

// Populate a given select element with character options.
function populateCharacterOptions(selectElement) {
    selectElement.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Character --";
    selectElement.appendChild(defaultOption);
    const options = getCharacterOptions();
    options.sort((a, b) => a.display.localeCompare(b.display));
    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.display;
        option.dataset.realValue = opt.realValue;
        selectElement.appendChild(option);
    });
}

// Add a new Action Block.
function addActionBlock(bypassCheck) {
    // Check if in Stable Diffusion mode and show warning if trying to add actions
    if (!isNovelAIMode()) {
        return showSDModeActionWarning();
    }
    
    if (!bypassCheck && getCharacterOptions().length < 2) {
        alert("At least two characters must be added before assigning actions.");
        return;
    }
    if (actionCount >= maxActions) {
        alert("Maximum actions reached.");
        return;
    }
    actionCount++;
    const actionId = actionCount;
    const container = document.getElementById("actions-container");
    const div = document.createElement("div");
    div.className = "action-block";
    div.id = "action-block-" + actionId;

    // Action dropdown.
    const actionLabel = document.createElement("label");
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
        option.textContent = act.charAt(0).toUpperCase() + act.slice(1);
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

// Update (refresh) the character options in all action blocks.
function refreshActionCharacterOptions() {
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

// Call this whenever characters are added or removed.
function updateAllActionAssignments() {
    refreshActionCharacterOptions();
    updateAssignedActionsDisplay();
}

// Get a mapping of action assignments.
function getActionAssignments() {
    let assignments = {};
    const actionBlocks = document.querySelectorAll(".action-block");
    
    // Get the current character options to map between IDs and names
    const characterOptions = getCharacterOptions();
    
    actionBlocks.forEach(block => {
        const parts = block.id.split("-");
        const actionId = parts[2];
        const actionSelect = block.querySelector(".action-select");
        const selectedAction = actionSelect.value;
        if (!selectedAction) return;
        
        const radios = block.querySelectorAll(`input[name="action-mode-${actionId}"]`);
        let mode = "st";
        radios.forEach(radio => {
            if (radio.checked) mode = radio.value;
        });
        
        const sourceSelect = block.querySelector(".action-source");
        const targetSelect = block.querySelector(".action-target");
        const sourceVal = sourceSelect.value;
        const targetVal = targetSelect.value;
        
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

function getActionTags() {
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

// Helper function to find a character ID from a display name
function findCharacterIdByName(name) {
    const options = getCharacterOptions();
    const match = options.find(opt => opt.realValue === name || opt.display === name);
    return match ? match.value : null;
}

// Helper function to get the real display name for a character by ID
function getRealNameById(charId) {
    const options = getCharacterOptions();
    const char = options.find(c => c.value === charId);
    return char ? (char.realValue || char.display) : charId;
}

// Function to update each character block with its assigned actions.
function updateAssignedActionsDisplay() {
    // Build a mapping: for each character (by its raw value), an array of linking messages.
    const messageMapping = {};
    const actionBlocks = document.querySelectorAll('.action-block');
    
    // Get all character options to help with name resolution
    const allCharOptions = getCharacterOptions();
    
    // Debug: Console log character options to check what we're working with
    console.log("All character options:", allCharOptions);
    
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
        console.log(`Action ${actionId}: ${mode} action:${actionValue} source:${sourceName} target:${targetName}`);

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
    console.log("Message mapping:", messageMapping);

    // Update the inline display on each character block.
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
        console.log(`Checking for actions for standard-${blockId}`);
        
        // Update the display with actions for this character
        if (messageMapping[uniqueId] && messageMapping[uniqueId].length > 0) {
            actionsDisplay.textContent = "Actions: " + messageMapping[uniqueId].join(" ; ");
            actionsDisplay.style.display = "";
            console.log(`Found actions for standard-${blockId}:`, messageMapping[uniqueId]);
        } else {
            actionsDisplay.textContent = "";
            actionsDisplay.style.display = "none";
        }
    });
    
    // Update the custom character blocks
    const customCharBlocks = document.querySelectorAll('.custom-character-block');
    customCharBlocks.forEach(block => {
        const blockId = block.id.split("-")[2];
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
        console.log(`Checking for actions for custom-${blockId}`);
        
        // Update the display
        if (customCharId && messageMapping[customCharId] && messageMapping[customCharId].length > 0) {
            actionsDisplay.textContent = "Actions: " + messageMapping[customCharId].join(" ; ");
            actionsDisplay.style.display = "";
            console.log(`Found actions for custom-${blockId}:`, messageMapping[customCharId]);
        } else {
            actionsDisplay.textContent = "";
            actionsDisplay.style.display = "none";
        }
    });
    
    // Force a refresh of the UI
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

// Displays a modal pop-up allowing the user to select an action.
function showActionSelectionPopup(sourceBlockId, targetBlockId) {
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

// Called after the user selects an action from the pop-up.
function chooseActionForDrag(sourceBlockId, targetBlockId, action, mode) {
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
