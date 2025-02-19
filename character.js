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
    const blockId = characterCount; // capture current block id
    const container = document.getElementById('characters-container');

    // Create main block container.
    const div = document.createElement('div');
    div.className = 'character-block';
    div.id = 'character-' + blockId;

    // Create header with dynamic title and collapse/expand button.
    const headerDiv = document.createElement('div');
    headerDiv.className = 'block-header';
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';

    const headerTitle = document.createElement('span');
    headerTitle.className = 'block-title';
    headerTitle.textContent = `Character ${blockId}`;
    headerDiv.appendChild(headerTitle);

    const collapseBtn = document.createElement('button');
    collapseBtn.type = "button";
    collapseBtn.className = "collapse-btn";
    collapseBtn.textContent = "Collapse";
    headerDiv.appendChild(collapseBtn);

    // Create container for block content.
    const contentDiv = document.createElement('div');
    contentDiv.className = 'block-content';

    // --- Media Type Dropdown ---
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

    // --- Title Dropdown (using Category as Title) ---
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

    // --- Character Dropdown ---
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

    // --- Gender Toggle container (if applicable) ---
    const genderDiv = document.createElement('div');
    genderDiv.id = 'gender-div-' + blockId;
    contentDiv.appendChild(genderDiv);

    // --- Enhancer Dropdown container ---
    const enhancerDiv = document.createElement('div');
    enhancerDiv.id = 'enhancer-div-' + blockId;
    contentDiv.appendChild(enhancerDiv);

    // Append content container to main block.
    div.appendChild(headerDiv);
    div.appendChild(contentDiv);

    // --- Remove Button ---
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove Character";
    removeBtn.type = "button";
    removeBtn.addEventListener('click', function() {
        container.removeChild(div);
        characterCount--;
    });
    div.appendChild(removeBtn);

    // --- Event Listeners ---
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
            // Update header title dynamically.
            const selectedTitle = titleSelect.value;
            headerTitle.textContent = `${cleanDisplayName(this.value)} (${cleanDisplayName(selectedTitle)})`;
            // Auto-collapse the content.
            contentDiv.style.display = "none";
            collapseBtn.textContent = "Expand";
        } else {
            headerTitle.textContent = `Character ${blockId}`;
        }
    });

    collapseBtn.addEventListener('click', function() {
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "";
            this.textContent = "Collapse";
        } else {
            contentDiv.style.display = "none";
            this.textContent = "Expand";
        }
    });

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