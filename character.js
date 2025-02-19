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
            // Remove leading bracket.
            token = token.replace(/^\[/, "").trim();
            group.push(token);
            // If it also ends with ']', complete the group.
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
    // If there's an unfinished group, join it.
    if (group.length > 0) {
        processed.push(group.join(", "));
    }
    return processed;
}


function cleanDisplayName(name) {
    // Remove any text after the first comma.
    let firstPart = name.split(",")[0].trim();
    // Remove prefixes "artist:" or "by" (case-insensitive)
    firstPart = firstPart.replace(/^(artist:|by\s+)/i, "").trim();
    // Remove any parentheses and their content.
    firstPart = firstPart.replace(/\s*\([^)]*\)/g, "").trim();
    // Title-case each word and any hyphenated parts.
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

    // Main card element (now a flex column).
    const div = document.createElement('div');
    div.className = 'character-block';
    div.id = 'character-' + blockId;

    // Header (collapsible).
    const headerDiv = document.createElement('div');
    headerDiv.className = 'block-header';
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';

    // Drag handle
    const dragHandle = document.createElement('span');
    dragHandle.className = 'drag-handle';
    dragHandle.textContent = "≡";
    // Prevent clicking the handle from toggling collapse.
    dragHandle.addEventListener('click', function(e) {
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
    toggleIcon.textContent = "▼"; // content is initially visible
    headerDiv.appendChild(toggleIcon);

    // --- New: Add Action Drag Handle ---
    const actionDragHandle = document.createElement('span');
    actionDragHandle.className = 'action-drag-handle';
    actionDragHandle.textContent = "🡆"; // Use an arrow icon to indicate action assignment
    actionDragHandle.setAttribute("draggable", "true");
    // When dragging starts from the action handle, record this character block's id
    actionDragHandle.addEventListener('dragstart', function(e) {
        // Use the block id (number) as the transferable data.
        e.dataTransfer.setData("text/plain", blockId.toString());
        e.dataTransfer.effectAllowed = "move";
        // Prevent the sortable drag from also triggering.
        e.stopPropagation();
    });
    headerDiv.appendChild(actionDragHandle);

    // --- Make the entire character block a drop target for action assignments ---
    div.addEventListener('dragover', function(e) {
        // Allow drop.
        e.preventDefault();
    });
    div.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const sourceId = e.dataTransfer.getData("text/plain");
        const targetId = blockId.toString();
        // Only proceed if the drop is coming from a different character block.
        if (sourceId && sourceId !== targetId) {
            // Call the pop-up to choose an action – this function is defined in action.js.
            showActionSelectionPopup(sourceId, targetId);
        }
    });

    // Collapsible content container
    const contentDiv = document.createElement('div');
    contentDiv.className = 'block-content';

    // --- Media Type ---
    const mediaTypeLabel = document.createElement('label');
    mediaTypeLabel.textContent = 'Select Media Type:';
    contentDiv.appendChild(mediaTypeLabel);

    const mediaTypeSelect = document.createElement('select');
    mediaTypeSelect.id = 'media-select-' + blockId;
    const defaultMediaOption = document.createElement('option');
    defaultMediaOption.value = "";
    defaultMediaOption.textContent = "-- Select Media Type --";
    mediaTypeSelect.appendChild(defaultMediaOption);

    const mediaTypes = [...new Set(characterData.map(item => item.mediaType))];
    mediaTypes.forEach(media => {
        const option = document.createElement('option');
        option.value = media;
        option.textContent = media;
        mediaTypeSelect.appendChild(option);
    });
    contentDiv.appendChild(mediaTypeSelect);

    // --- Title (Game/Show) ---
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Select Title (Game/Show):';
    contentDiv.appendChild(titleLabel);

    const titleSelect = document.createElement('select');
    titleSelect.id = 'title-select-' + blockId;
    const defaultTitleOption = document.createElement('option');
    defaultTitleOption.value = "";
    defaultTitleOption.textContent = "-- Select Title --";
    titleSelect.appendChild(defaultTitleOption);
    contentDiv.appendChild(titleSelect);

    // --- Character ---
    const charSelectLabel = document.createElement('label');
    charSelectLabel.textContent = 'Select Character:';
    contentDiv.appendChild(charSelectLabel);

    const charSelect = document.createElement('select');
    charSelect.id = 'char-select-' + blockId;
    const defaultCharOption = document.createElement('option');
    defaultCharOption.value = "";
    defaultCharOption.textContent = "-- Select Character --";
    charSelect.appendChild(defaultCharOption);
    contentDiv.appendChild(charSelect);

    // --- Gender Toggle Container ---
    const genderDiv = document.createElement('div');
    genderDiv.id = 'gender-div-' + blockId;
    contentDiv.appendChild(genderDiv);

    // --- Enhancer Dropdown Container ---
    const enhancerDiv = document.createElement('div');
    enhancerDiv.id = 'enhancer-div-' + blockId;
    contentDiv.appendChild(enhancerDiv);

    // Append header + content to the card
    div.appendChild(headerDiv);
    div.appendChild(contentDiv);

    // --- Remove Button pinned at bottom ---
    const removeBtnContainer = document.createElement('div');
    removeBtnContainer.className = 'remove-btn-container';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove Character";
    removeBtn.type = "button";
    removeBtn.addEventListener('click', function() {
        container.removeChild(div);
        characterCount--;
    });
    removeBtnContainer.appendChild(removeBtn);
    div.appendChild(removeBtnContainer);

    // Collapsible toggle on header click
    headerDiv.addEventListener('click', function() {
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "";
            toggleIcon.textContent = "▼";
        } else {
            contentDiv.style.display = "none";
            toggleIcon.textContent = "▲";
        }
    });

    // Event listeners
    mediaTypeSelect.addEventListener('change', function() {
        updateTitleOptions(blockId, this.value);
        resetCharacterDropdown(blockId);
        enhancerDiv.innerHTML = "";
        genderDiv.innerHTML = "";
    });

    titleSelect.addEventListener('change', function() {
        updateCharacterDropdown(blockId, mediaTypeSelect.value, this.value);
        enhancerDiv.innerHTML = "";
        genderDiv.innerHTML = "";
    });

    charSelect.addEventListener('change', function() {
        updateGenderToggle(blockId, this.value);
        updateEnhancerDropdown(blockId, this.value);
        if (this.value) {
            const selectedTitle = titleSelect.value;
            headerTitle.textContent = `${cleanDisplayName(this.value)} (${cleanDisplayName(selectedTitle)})`;
        } else {
            headerTitle.textContent = `Character ${blockId}`;
        }
    });

    // Finally, append the card to the container
    container.appendChild(div);
}



function addRandomCharacterBlock(type) {
    // type: "all", "vg", or "media"
    // Create a new blank character block.
    addCharacterBlock();
    const blockId = characterCount; // the newly added block's id

    // Filter characterData based on type.
    let filtered = characterData;
    if (type === "vg") {
        filtered = characterData.filter(item => item.mediaType === "Video Games");
    } else if (type === "media") {
        filtered = characterData.filter(item => item.mediaType === "Shows or Movies");
    }

    if (filtered.length === 0) return; // safety check

    // Pick a random character from filtered list.
    const randomCharacter = filtered[Math.floor(Math.random() * filtered.length)];

    // Set Media Type dropdown.
    const mediaSelect = document.getElementById('media-select-' + blockId);
    mediaSelect.value = randomCharacter.mediaType;
    mediaSelect.dispatchEvent(new Event('change', { bubbles: true }));

    // Set Title (Category) dropdown.
    const titleSelect = document.getElementById('title-select-' + blockId);
    // Wait a moment for updateTitleOptions to populate, then set value.
    setTimeout(() => {
        titleSelect.value = randomCharacter.category;
        titleSelect.dispatchEvent(new Event('change', { bubbles: true }));

        // Set Character dropdown.
        const charSelect = document.getElementById('char-select-' + blockId);
        // Wait for updateCharacterDropdown to finish.
        setTimeout(() => {
            charSelect.value = randomCharacter.name;
            charSelect.dispatchEvent(new Event('change', { bubbles: true }));

            // Optionally randomly toggle gender swap if available.
            if (randomCharacter.genderswapAvailable) {
                const genderCheckbox = document.getElementById('genderswap-' + blockId);
                if (genderCheckbox) {
                    // 50% chance.
                    genderCheckbox.checked = Math.random() < 0.5;
                }
            }
        }, 100);
    }, 100);
}


function updateTitleOptions(id, selectedMedia) {
    const titleSelect = document.getElementById('title-select-' + id);
    titleSelect.innerHTML = "";
    const defaultTitleOption = document.createElement('option');
    defaultTitleOption.value = "";
    defaultTitleOption.textContent = "-- Select Title --";
    titleSelect.appendChild(defaultTitleOption);

    // Get unique titles (categories) for the selected media.
    let titles = [...new Set(characterData
        .filter(item => item.mediaType === selectedMedia)
        .map(item => item.category))];

    // Sort titles alphabetically using the cleaned display value.
    titles = sortAlphabetically(titles, t => cleanDisplayName(t));

    titles.forEach(title => {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = cleanDisplayName(title);
        titleSelect.appendChild(option);
    });
}


function updateCharacterDropdown(id, selectedMedia, selectedTitle) {
    const charSelect = document.getElementById('char-select-' + id);
    charSelect.innerHTML = "";
    const defaultCharOption = document.createElement('option');
    defaultCharOption.value = "";
    defaultCharOption.textContent = "-- Select Character --";
    charSelect.appendChild(defaultCharOption);

    // Filter characters based on media and category.
    let characters = characterData.filter(item =>
        item.mediaType === selectedMedia && item.category === selectedTitle
    );

    // Sort characters alphabetically by cleaned name.
    characters = sortAlphabetically(characters, item => cleanDisplayName(item.name));

    characters.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = cleanDisplayName(item.name);
        charSelect.appendChild(option);
    });
}


function resetCharacterDropdown(id) {
    const charSelect = document.getElementById('char-select-' + id);
    charSelect.innerHTML = "";
    const defaultCharOption = document.createElement('option');
    defaultCharOption.value = "";
    defaultCharOption.textContent = "-- Select Character --";
    charSelect.appendChild(defaultCharOption);
}

function updateEnhancerDropdown(id, selectedCharacterName) {
    const enhancerDiv = document.getElementById('enhancer-div-' + id);
    enhancerDiv.innerHTML = "";
    const selectedData = characterData.find(item => item.name === selectedCharacterName);
    if (selectedData && selectedData.enhancers && selectedData.enhancers.length > 0) {
        const enhancerLabel = document.createElement('label');
        enhancerLabel.textContent = 'Select Optional Enhancer:';
        enhancerDiv.appendChild(enhancerLabel);

        const enhancerSelect = document.createElement('select');
        enhancerSelect.id = 'enhancer-select-' + id;
        const defaultEnhancerOption = document.createElement('option');
        defaultEnhancerOption.value = "";
        defaultEnhancerOption.textContent = "-- None --";
        enhancerSelect.appendChild(defaultEnhancerOption);

        let processedEnhancers = processEnhancers(selectedData.enhancers);
        processedEnhancers.forEach(enh => {
            const option = document.createElement('option');
            option.value = enh;
            // For enhancer dropdowns, you might want to display them as-is.
            option.textContent = enh;
            enhancerSelect.appendChild(option);
        });

        enhancerDiv.appendChild(enhancerSelect);
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

function getCharacterSubjects() {
    let subjects = [];
    let subjectCountObj = { girl: 0, boy: 0 };

    // Get action assignments mapping.
    const actionAssignments = getActionAssignments();

    for (let i = 1; i <= maxCharacters; i++) {
        const block = document.getElementById('character-' + i);
        if (block) {
            const charSelect = document.getElementById('char-select-' + i);
            const selectedName = charSelect.value;
            if (!selectedName) continue;
            const selectedData = characterData.find(item => item.name === selectedName);
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

            // Process enhancer selection.
            const enhancerSelect = document.getElementById('enhancer-select-' + i);
            if (enhancerSelect && enhancerSelect.value) {
                let tagsArray = finalTags.split(",").map(t => t.trim()).filter(t => t !== "");
                if (tagsArray.length >= 2) {
                    tagsArray.splice(tagsArray.length - 1, 0, enhancerSelect.value);
                } else {
                    tagsArray.push(enhancerSelect.value);
                }
                finalTags = tagsArray.join(", ");
            }

            // Append any action tags assigned to this character block.
            if (actionAssignments[selectedName]) {
                finalTags += ", " + actionAssignments[selectedName].join(", ");
            }
            subjectCountObj[gender] = (subjectCountObj[gender] || 0) + 1;
            subjects.push(`${gender} ${finalTags}`);
        }
    }
    return { subjects, subjectCountObj };
}
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("character-search");
    const clearButton = document.getElementById("clear-search");
    const suggestionsContainer = document.getElementById("search-suggestions");

    // Extract character names and titles
    const characterNames = characterData.map(c => c.name.toLowerCase());
    const titleNames = [...new Set(characterData.map(c => c.category.toLowerCase()))];

    function filterSearchResults(query) {
        if (query.length < 3) {
            suggestionsContainer.innerHTML = "";
            clearButton.style.display = "none"; // Hide clear button if empty
            return;
        }

        query = query.toLowerCase();
        let results = [];

        // Always search both characters and titles
        results = characterNames.filter(name => name.includes(query))
            .map(name => ({ type: "Character", value: name }));

        results = results.concat(titleNames.filter(title => title.includes(query))
            .map(title => ({ type: "Title", value: title })));

        displaySearchSuggestions(results);
        clearButton.style.display = "block"; // Show clear button when typing
    }

    function displaySearchSuggestions(results) {
        suggestionsContainer.innerHTML = "";
        if (results.length === 0) return;

        results.forEach(result => {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            div.textContent = `${result.value} (${result.type})`;
            div.addEventListener("click", function() {
                searchInput.value = result.value;
                suggestionsContainer.innerHTML = "";
                clearButton.style.display = "block"; // Show clear button after selecting
                autofillCharacter(result.value);
            });
            suggestionsContainer.appendChild(div);
        });
    }

    function autofillCharacter(selectedValue) {
        let foundCharacter = characterData.find(c => c.name.toLowerCase() === selectedValue.toLowerCase());
        let foundTitle = characterData.find(c => c.category.toLowerCase() === selectedValue.toLowerCase());

        if (foundCharacter) {
            addCharacterBlock();
            const blockId = characterCount;

            // Set Media Type dropdown
            const mediaSelect = document.getElementById(`media-select-${blockId}`);
            mediaSelect.value = foundCharacter.mediaType;
            mediaSelect.dispatchEvent(new Event("change", { bubbles: true }));

            // Set Title dropdown
            setTimeout(() => {
                const titleSelect = document.getElementById(`title-select-${blockId}`);
                titleSelect.value = foundCharacter.category;
                titleSelect.dispatchEvent(new Event("change", { bubbles: true }));

                // Set Character dropdown
                setTimeout(() => {
                    const charSelect = document.getElementById(`char-select-${blockId}`);
                    charSelect.value = foundCharacter.name;
                    charSelect.dispatchEvent(new Event("change", { bubbles: true }));
                }, 100);
            }, 100);
        } else if (foundTitle) {
            addCharacterBlock();
            const blockId = characterCount;

            // Set Media Type dropdown
            const mediaSelect = document.getElementById(`media-select-${blockId}`);
            mediaSelect.value = foundTitle.mediaType;
            mediaSelect.dispatchEvent(new Event("change", { bubbles: true }));

            // Set Title dropdown
            setTimeout(() => {
                const titleSelect = document.getElementById(`title-select-${blockId}`);
                titleSelect.value = foundTitle.category;
                titleSelect.dispatchEvent(new Event("change", { bubbles: true }));
            }, 100);
        }
    }

    searchInput.addEventListener("input", function() {
        filterSearchResults(this.value);
    });

    // Clear search when clicking ✖
    clearButton.addEventListener("click", function() {
        searchInput.value = "";
        suggestionsContainer.innerHTML = "";
        clearButton.style.display = "none"; // Hide clear button
    });

    document.addEventListener("click", function(event) {
        if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.innerHTML = "";
        }
    });
});

/*function //updateCharacterCardsLayout() {
    const container = document.getElementById('characters-container');
    const cards = container.querySelectorAll('.character-block');
    const count = cards.length;
    let widthValue = "100%"; // default for 1 card

    if (count === 2) {
        widthValue = "calc(50% - 5px)"; // subtract half the gap (10px/2)
    } else if (count === 3) {
        widthValue = "calc(33.33% - 7px)";
    } else if (count === 4) {
        widthValue = "calc(25% - 7px)";
    }

    cards.forEach(card => {
        card.style.flex = `0 0 ${widthValue}`;
    });
}*/