// action.js

let actionCount = 0;
const maxActions = 4; // Adjust as needed

// Helper: Get current character options (only those with a valid selection).
function getCharacterOptions() {
    let options = [];
    const charBlocks = document.querySelectorAll(".character-block");
    charBlocks.forEach(block => {
        const charSelect = block.querySelector("select[id^='char-select-']");
        if (charSelect && charSelect.value) {
            // Use the character's name (the dropdown value) instead of block.id.
            options.push({ value: charSelect.value, display: block.querySelector(".block-title").textContent });
        }
    });
    return options;
}

function checkMutualAutoAssign(actionId) {
    // Get the available character options for assignment.
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
}



// Populate a given select element with character options.
function populateCharacterOptions(selectElement) {
    selectElement.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Character --";
    selectElement.appendChild(defaultOption);
    const options = getCharacterOptions();
    // Sort alphabetically by display text.
    options.sort((a, b) => a.display.localeCompare(b.display));
    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.display;
        selectElement.appendChild(option);
    });
}

// Add a new Action Block.
function addActionBlock(bypassCheck) {
    // If not bypassing, require at least 2 characters.
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
    actionTags.forEach(act => {
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
    stRadio.value = "st"; // source/target mode
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

    mutualRadio.addEventListener("change", function() {
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
    removeBtn.addEventListener("click", function() {
        container.removeChild(div);
        actionCount--;
    });
    div.appendChild(removeBtn);

    container.appendChild(div);
}

// Function to update (refresh) the character options in all action blocks.
function refreshActionCharacterOptions() {
    const allSourceSelects = document.querySelectorAll(".action-source");
    const allTargetSelects = document.querySelectorAll(".action-target");
    allSourceSelects.forEach(select => populateCharacterOptions(select));
    allTargetSelects.forEach(select => populateCharacterOptions(select));
}

// Call this whenever characters are added or removed.
function updateAllActionAssignments() {
    refreshActionCharacterOptions();
}

// Get a mapping of action assignments: for each character block id (e.g. "character-2"),
// return an array of action tags (e.g., "source#kicking" or "mutual#kicking").
function getActionAssignments() {
    let assignments = {};
    const actionBlocks = document.querySelectorAll(".action-block");
    actionBlocks.forEach(block => {
        // Extract action block id number from id "action-block-X"
        const parts = block.id.split("-");
        const actionId = parts[2];
        const actionSelect = block.querySelector(".action-select");
        const selectedAction = actionSelect.value;
        if (!selectedAction) return;

        // Get mode.
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
    const assignments = getActionAssignments();
    let tags = [];
    for (const charId in assignments) {
        tags = tags.concat(assignments[charId]);
    }
    return tags;
}