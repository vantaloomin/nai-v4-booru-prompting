let characterCount = 0;
const maxCharacters = 4;

// Helper: Sorts an array alphabetically based on a getter function.
function sortAlphabetically(arr, getValue) {
    return arr.sort((a, b) => getValue(a).localeCompare(getValue(b)));
}

function processEnhancers(enhancers) {
    let processed = [];
    let group = [];
    let inGroup = false;
    enhancers.forEach(token => {
        token = token.trim();
        if (token.startsWith("[")) {
            inGroup = true;
            // Remove leading bracket
            token = token.replace(/^\[/, "").trim();
            group.push(token);
            // If it also ends with ']', complete the group
            if (token.endsWith("]")) {
                token = token.replace(/\]$/, "").trim();
                group[group.length - 1] = token;
                processed.push(group.join(", "));
                group = [];
                inGroup = false;
            }
        } else if (inGroup) {
            group.push(token);
            if (token.endsWith("]")) {
                let last = group[group.length - 1];
                last = last.replace(/\]$/, "").trim();
                group[group.length - 1] = last;
                processed.push(group.join(", "));
                group = [];
                inGroup = false;
            }
        } else {
            processed.push(token);
        }
    });
    // If there's an unfinished group, join it
    if (group.length > 0) {
        processed.push(group.join(", "));
    }
    return processed;
}

function cleanDisplayName(name) {
    // Remove any text after the first comma
    let firstPart = name.split(",")[0].trim();
    // Remove prefixes "artist:" or "by" (case-insensitive)
    firstPart = firstPart.replace(/^(artist:|by\s+)/i, "").trim();
    // Remove any parentheses and their content
    firstPart = firstPart.replace(/\s*\([^)]*\)/g, "").trim();
    // Title-case each word and any hyphenated parts
    return firstPart.split(" ").map(word => {
        return word.split("-").map(part => {
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        }).join("-");
    }).join(" ");
}

function addCharacterBlock() {
    if (characterCount >= maxCharacters) {
        alert("Maximum of " + maxCharacters + " characters reached.");
        return;
    }

    characterCount++;
    const blockId = characterCount;
    const container = document.getElementById('characters-container');

    // Main card element
    const div = document.createElement('div');
    div.className = 'character-block';
    div.id = 'character-' + blockId;

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
    titleLabel.textContent = 'Select Title (Game/Show):';
    contentDiv.appendChild(titleLabel);

    const titleContainer = document.createElement('div');
    titleContainer.className = 'custom-dropdown';

    const titleDisplay = document.createElement('div');
    titleDisplay.className = 'selected-display';
    titleDisplay.textContent = "-- Select Title --";

    const titleList = document.createElement('div');
    titleList.className = 'dropdown-list suggestions-list';
    titleList.id = `title-list-${blockId}`;

    titleContainer.appendChild(titleDisplay);
    titleContainer.appendChild(titleList);
    contentDiv.appendChild(titleContainer);

    // Character Dropdown
    const charSelectLabel = document.createElement('label');
    charSelectLabel.textContent = 'Select Character:';
    contentDiv.appendChild(charSelectLabel);

    const charContainer = document.createElement('div');
    charContainer.className = 'custom-dropdown';

    const charDisplay = document.createElement('div');
    charDisplay.className = 'selected-display';
    charDisplay.textContent = "-- Select Character --";

    const charList = document.createElement('div');
    charList.className = 'dropdown-list suggestions-list';
    charList.id = `char-list-${blockId}`;

    charContainer.appendChild(charDisplay);
    charContainer.appendChild(charList);
    contentDiv.appendChild(charContainer);

    // Gender Toggle Container
    const genderDiv = document.createElement('div');
    genderDiv.id = 'gender-div-' + blockId;
    contentDiv.appendChild(genderDiv);

    // Enhancer Dropdown Container
    const enhancerDiv = document.createElement('div');
    enhancerDiv.id = 'enhancer-div-' + blockId;

    // Create the label container that will be shown/hidden with the dropdown
    const enhancerLabelContainer = document.createElement('div');
    enhancerLabelContainer.style.display = 'none';

    const enhancerLabel = document.createElement('label');
    enhancerLabel.textContent = 'Select Optional Enhancer:';
    enhancerLabelContainer.appendChild(enhancerLabel);

    enhancerDiv.appendChild(enhancerLabelContainer);
    contentDiv.appendChild(enhancerDiv);

    // NEW: Assigned Actions Display
    const actionsDisplayDiv = document.createElement('div');
    actionsDisplayDiv.className = 'assigned-actions';
    actionsDisplayDiv.style.marginTop = "8px";
    actionsDisplayDiv.style.fontStyle = "italic";
    actionsDisplayDiv.style.color = "#ff99ff";
    actionsDisplayDiv.textContent = "";
    contentDiv.appendChild(actionsDisplayDiv);

    // Append header + content
    div.appendChild(headerDiv);
    div.appendChild(contentDiv);

    // Remove Button Container
    const removeBtnContainer = document.createElement('div');
    removeBtnContainer.className = 'remove-btn-container';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove Character";
    removeBtn.type = "button";
    removeBtn.addEventListener('click', function () {
        container.removeChild(div);
        characterCount--;
        if (typeof updateAssignedActionsDisplay === "function") {
            updateAssignedActionsDisplay();
        }
    });
    removeBtnContainer.appendChild(removeBtn);
    div.appendChild(removeBtnContainer);

    // Make the entire character block a drop target for action assignments
    div.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    div.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const sourceId = e.dataTransfer.getData("text/plain");
        const targetId = blockId.toString();
        if (sourceId && sourceId !== targetId) {
            showActionSelectionPopup(sourceId, targetId);
        }
    });

    // Collapsible toggle on header click
    headerDiv.addEventListener('click', function () {
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "";
            toggleIcon.textContent = "▼";
        } else {
            contentDiv.style.display = "none";
            toggleIcon.textContent = "▲";
        }
    });

    // Toggle dropdown display
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
            const allLists = document.querySelectorAll('.dropdown-list');
            allLists.forEach(list => list.style.display = 'none');
        }
    });

    container.appendChild(div);
}

function closeAllDropdowns() {
    const allLists = document.querySelectorAll('.dropdown-list');
    allLists.forEach(list => list.style.display = 'none');
}

function updateTitleOptions(id, selectedMedia) {
    const titleList = document.getElementById(`title-list-${id}`);
    const titleDisplay = titleList.previousElementSibling;
    titleList.innerHTML = "";

    let titles = [...new Set(characterData
        .filter(item => item.mediaType === selectedMedia)
        .map(item => item.category))];

    titles = sortAlphabetically(titles, t => cleanDisplayName(t));

    titles.forEach(title => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = cleanDisplayName(title);
        item.dataset.value = title;
        item.addEventListener('click', () => {
            titleDisplay.textContent = cleanDisplayName(title);
            updateCharacterDropdown(id, selectedMedia, title);
            titleList.style.display = 'none';
        });
        titleList.appendChild(item);
    });

    titleDisplay.textContent = "-- Select Title --";
}

function updateCharacterDropdown(id, selectedMedia, selectedTitle) {
    const charList = document.getElementById(`char-list-${id}`);
    const charDisplay = charList.previousElementSibling;
    charList.innerHTML = "";

    let characters = characterData.filter(item =>
        item.mediaType === selectedMedia && item.category === selectedTitle
    );

    characters = sortAlphabetically(characters, item => cleanDisplayName(item.name));

    characters.forEach(item => {
        const charItem = document.createElement('div');
        charItem.className = 'suggestion-item';
        charItem.textContent = cleanDisplayName(item.name);
        charItem.dataset.value = item.name;
        charItem.addEventListener('click', () => {
            charDisplay.textContent = cleanDisplayName(item.name);
            updateGenderToggle(id, item.name);
            updateEnhancerDropdown(id, item.name);
            charList.style.display = 'none';
            // Update the character block title
            const blockTitle = document.querySelector(`#character-${id} .block-title`);
            if (blockTitle) {
                blockTitle.textContent = `${cleanDisplayName(item.name)} (${cleanDisplayName(selectedTitle)})`;
            }
        });
        charList.appendChild(charItem);
    });

    charDisplay.textContent = "-- Select Character --";
}

function updateEnhancerDropdown(id, selectedCharacterName) {
    const enhancerDiv = document.getElementById('enhancer-div-' + id);
    const labelContainer = enhancerDiv.querySelector('div');
    enhancerDiv.innerHTML = ''; // Clear previous content
    enhancerDiv.appendChild(labelContainer); // Re-add label container

    const selectedData = characterData.find(item => item.name === selectedCharacterName);
    if (selectedData && selectedData.enhancers && selectedData.enhancers.length > 0) {
        labelContainer.style.display = 'block';

        const enhancerContainer = document.createElement('div');
        enhancerContainer.className = 'custom-dropdown';

        const enhancerDisplay = document.createElement('div');
        enhancerDisplay.className = 'selected-display';
        enhancerDisplay.textContent = "-- None --";

        const enhancerList = document.createElement('div');
        enhancerList.className = 'dropdown-list suggestions-list';

        // Process and add enhancer options
        let processedEnhancers = processEnhancers(selectedData.enhancers);
        processedEnhancers.forEach(enh => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.textContent = enh;
            item.addEventListener('click', () => {
                enhancerDisplay.textContent = enh;
                enhancerList.style.display = 'none';
                if (typeof updateAssignedActionsDisplay === "function") {
                    updateAssignedActionsDisplay();
                }
            });
            enhancerList.appendChild(item);
        });

        // Add "None" option at the top
        const noneOption = document.createElement('div');
        noneOption.className = 'suggestion-item';
        noneOption.textContent = "-- None --";
        noneOption.addEventListener('click', () => {
            enhancerDisplay.textContent = "-- None --";
            enhancerList.style.display = 'none';
            if (typeof updateAssignedActionsDisplay === "function") {
                updateAssignedActionsDisplay();
            }
        });
        enhancerList.insertBefore(noneOption, enhancerList.firstChild);

        // Toggle dropdown display
        enhancerDisplay.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllDropdowns();
            enhancerList.style.display = enhancerList.style.display === 'block' ? 'none' : 'block';
        });

        enhancerContainer.appendChild(enhancerDisplay);
        enhancerContainer.appendChild(enhancerList);
        enhancerDiv.appendChild(enhancerContainer);
    } else {
        labelContainer.style.display = 'none';
    }
}

function updateGenderToggle(id, selectedCharacterName) {
    const genderDiv = document.getElementById('gender-div-' + id);
    genderDiv.innerHTML = "";
    const selectedData = characterData.find(item => item.name === selectedCharacterName);
    if (selectedData && selectedData.genderswapAvailable) {
        const swapLabel = document.createElement('label');
        const swapCheckbox = document.createElement('input');
        swapCheckbox.type = "checkbox";
        swapCheckbox.id = 'genderswap-' + id;
        swapLabel.appendChild(swapCheckbox);
        const newGender = (selectedData.defaultGender === "boy" ? "girl" : "boy");
        swapLabel.appendChild(document.createTextNode(" Apply Gender Swap (default: " + selectedData.defaultGender + " becomes " + newGender + ")"));
        genderDiv.appendChild(swapLabel);
    }
}

function addRandomCharacterBlock(type) {
    // type: "all", "vg", or "media"
    addCharacterBlock();
    const blockId = characterCount;

    // Filter characterData based on type
    let filtered = characterData;
    if (type === "vg") {
        filtered = characterData.filter(item => item.mediaType === "Video Games");
    } else if (type === "media") {
        filtered = characterData.filter(item => item.mediaType === "Shows or Movies");
    }

    if (filtered.length === 0) return;

    // Pick a random character
    const randomCharacter = filtered[Math.floor(Math.random() * filtered.length)];

    // Get the character block
    const characterBlock = document.getElementById(`character-${blockId}`);
    if (!characterBlock) return;

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
                updateEnhancerDropdown(blockId, randomCharacter.name);

                // Update the character block title
                const blockTitle = characterBlock.querySelector('.block-title');
                if (blockTitle) {
                    blockTitle.textContent = `${cleanDisplayName(randomCharacter.name)} (${cleanDisplayName(randomCharacter.category)})`;
                }

                // Randomly toggle gender swap if available
                if (randomCharacter.genderswapAvailable) {
                    const genderCheckbox = document.getElementById('genderswap-' + blockId);
                    if (genderCheckbox) {
                        genderCheckbox.checked = Math.random() < 0.5;
                    }
                }

                // Trigger any necessary updates
                if (typeof updateAssignedActionsDisplay === "function") {
                    updateAssignedActionsDisplay();
                }
            }
        }, 100);
    }, 100);
}


function getCharacterSubjects() {
    let subjects = [];
    let subjectCountObj = { girl: 0, boy: 0 };

    // Get action assignments mapping
    const actionAssignments = getActionAssignments();

    for (let i = 1; i <= maxCharacters; i++) {
        const block = document.getElementById('character-' + i);
        if (block) {
            // Find all custom-dropdowns in this block
            const dropdowns = block.querySelectorAll('.custom-dropdown');
            // The character dropdown should be the third one
            const charDisplay = dropdowns[2]?.querySelector('.selected-display');

            if (!charDisplay || charDisplay.textContent === "-- Select Character --") continue;

            const selectedName = charDisplay.textContent;
            const selectedData = characterData.find(item => cleanDisplayName(item.name) === selectedName);

            if (!selectedData) continue;

            let finalTags = selectedData.mainTags;

            let gender = "";
            if (selectedData.genderswapAvailable) {
                const swapCheckbox = document.getElementById('genderswap-' + i);
                if (swapCheckbox && swapCheckbox.checked) {
                    gender = selectedData.defaultGender === "boy" ? "girl" : "boy";
                    let tagsArray = finalTags.split(",").map(t => t.trim()).filter(t => t !== "");
                    if (tagsArray.length >= 2) {
                        tagsArray.splice(tagsArray.length - 1, 0, "genderswap");
                    } else {
                        tagsArray.push("genderswap");
                    }
                    finalTags = tagsArray.join(", ");
                } else {
                    gender = selectedData.defaultGender || "girl";
                }
            } else {
                gender = selectedData.defaultGender || "girl";
            }

            // Process enhancer selection
            const enhancerDisplay = block.querySelector('#enhancer-div-' + i + ' .selected-display');
            if (enhancerDisplay && enhancerDisplay.textContent !== "-- None --") {
                let tagsArray = finalTags.split(",").map(t => t.trim()).filter(t => t !== "");
                if (tagsArray.length >= 2) {
                    tagsArray.splice(tagsArray.length - 1, 0, enhancerDisplay.textContent);
                } else {
                    tagsArray.push(enhancerDisplay.textContent);
                }
                finalTags = tagsArray.join(", ");
            }

            // Append any action tags assigned to this character block
            if (actionAssignments[selectedName]) {
                finalTags += ", " + actionAssignments[selectedName].join(", ");
            }

            subjectCountObj[gender] = (subjectCountObj[gender] || 0) + 1;
            subjects.push(`${gender} ${finalTags}`);
        }
    }
    return { subjects, subjectCountObj };
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("character-search");
    const clearButton = document.getElementById("clear-search");
    const suggestionsContainer = document.getElementById("search-suggestions");

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-dropdown')) {
            closeAllDropdowns();
        }
    });
});
