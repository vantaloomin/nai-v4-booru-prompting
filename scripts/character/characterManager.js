/**
 * Character Manager Module
 * 
 * Manages character blocks, state, and provides the main API for character functionality.
 */

import { cleanDisplayName } from './utils/nameFormatter.js';
import { 
    closeAllDropdowns, 
    updateTitleOptions, 
    updateCharacterDropdown, 
    updateGenderToggle,
    updateEnhancerDropdown,
    resetCharacterDropdown
} from './ui/dropdowns.js';
import { showMaxCharacterWarning } from '../utils/modal.js';

// Try to import getActionAssignments from action.js, with a fallback to the global version
let getActionAssignments;
try {
    // Using dynamic import to avoid blocking module loading if this fails
    import('../action.js').then(module => {
        getActionAssignments = module.getActionAssignments;
    }).catch(() => {
        // Fallback to global version if import fails
        getActionAssignments = window.getActionAssignments || (() => ({}));
    });
} catch (e) {
    // Final fallback - empty function that returns an empty object
    getActionAssignments = window.getActionAssignments || (() => ({}));
}

// Character state
let characterCount = 0;
const maxCharacters = 4;

/**
 * Creates and adds a new character block to the UI
 * 
 * @return {number|null} - The ID of the new character block or null if max reached
 */
export function addCharacterBlock() {
    if (characterCount >= maxCharacters) {
        showMaxCharacterWarning(maxCharacters);
        return null;
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

    // Actions Display
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
        if (typeof updateAllActionAssignments === "function") {
            updateAllActionAssignments();
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
            closeAllDropdowns();
        }
    });

    container.appendChild(div);
    
    // Update action assignments whenever a character is added
    if (typeof updateAllActionAssignments === "function") {
        setTimeout(updateAllActionAssignments, 100);
    }

    return blockId;
}

/**
 * Adds a random character block with optional type filter
 * 
 * @param {string} type - The type of character to add: "all", "vg", or "media"
 * @return {number|null} - The ID of the new character block or null if creation failed
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
                updateEnhancerDropdown(blockId, randomCharacter.name);

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
                if (typeof updateAllActionAssignments === "function") {
                    updateAllActionAssignments();
                }
            }
        }, 100);
    }, 100);

    return blockId;
}

/**
 * Processes tags to replace gendered terms based on gender transformation
 * 
 * @param {string} tags - Original tags string
 * @param {string} fromGender - Original gender ("boy", "girl", "other")
 * @param {string} toGender - Target gender ("boy", "girl", "other")
 * @return {string} - Processed tags with gender-specific terms replaced
 */
function processGenderedTags(tags, fromGender, toGender) {
    // If no gender change or invalid inputs, return original tags
    if (fromGender === toGender || !fromGender || !toGender) {
        return tags;
    }
    
    // Split tags into array for processing
    let tagsArray = tags.split(",").map(t => t.trim()).filter(t => t !== "");
    
    // For "other" gender, we treat it as male for tag purposes
    // So male→other or other→male doesn't need tag changes
    // But female→other or other→female does
    const needsTransformation = !(
        (fromGender === "boy" && toGender === "other") || 
        (fromGender === "other" && toGender === "boy")
    );
    
    if (needsTransformation) {
        // Process each tag to replace gendered terms
        tagsArray = tagsArray.map(tag => {
            let processedTag = tag;
            
            // Define transformations based on direction
            if ((fromGender === "boy" && toGender === "girl") || 
                (fromGender === "other" && toGender === "girl")) {
                // Male/other to female transformations
                
                // Check for combined pants+shirt → dress replacement
                if (processedTag.includes("pants") && processedTag.includes("shirt")) {
                    // Extract any color that might precede "pants" or "shirt"
                    const colorMatch = processedTag.match(/(\w+)\s+(pants|shirt)/i);
                    const color = colorMatch && colorMatch[1] !== "and" ? colorMatch[1] : "";
                    
                    // Replace both terms with dress, preserving color if found
                    processedTag = processedTag
                        .replace(/\b\w*\s*pants\b/gi, "")
                        .replace(/\b\w*\s*shirt\b/gi, color ? `${color} dress` : "dress")
                        .replace(/\s{2,}/g, " "); // Clean up extra spaces
                } else {
                    // Process butler → maid carefully to avoid false positives
                    processedTag = processedTag
                        .replace(/\b(?<!wa\s)butler\b(?!_)/gi, "maid") // Avoid "wabutler" and "butler_"
                        
                        // Standard replacements with word boundaries to preserve colors
                        .replace(/\bdark-skinned male\b/gi, "dark-skinned female")
                        .replace(/\bmuscular male\b/gi, "muscular female")
                        .replace(/\bbreastplate\b/gi, "boobplate")
                        .replace(/\bdemon boy\b/gi, "demon girl")
                        .replace(/\bcat boy\b/gi, "cat girl")
                        
                        // New replacements with word boundaries to preserve colors
                        .replace(/\b(\w+\s+)?pants\b(?!\s*shirt)/gi, "$1pantyhose") // Preserve color prefix
                        .replace(/\b(\w+\s+)?shorts\b/gi, "$1miniskirt") // Preserve color prefix
                        .replace(/\bv-neck\b/gi, "plunging neckline")
                        .replace(/\bbowler hat\b/gi, "maid headdress");
                        
                    // Specific replacements for clothing
                    if (processedTag.includes("maid")) {
                        processedTag = processedTag.replace(/\bvest\b/gi, "apron");
                    }
                    
                    // Original replacements with color preservation
                    processedTag = processedTag
                        .replace(/\b(\w+\s+)?pants\b/gi, "$1skirt") // Preserve color prefix
                        .replace(/\b(\w+\s+)?wizard hat\b/gi, "$1witch hat") // Preserve color prefix
                        .replace(/\bmonster\b(?!\s+girl)/gi, "monster girl") // Special handling
                        .replace(/\b(\w+\s+)?tunic\b/gi, "$1dress") // Preserve color prefix
                        .replace(/\bsarashi\b/gi, "chest sarashi");
                        
                    // Handle uniform-specific transformations
                    if (/\b(school|military|police|security|maid|butler|sailor) uniform\b/i.test(processedTag)) {
                        processedTag = processedTag.replace(/\b(\w+\s+)?pants\b/gi, "$1skirt"); // Preserve color prefix
                    }
                }
            } 
            else if ((fromGender === "girl" && toGender === "boy") || 
                     (fromGender === "girl" && toGender === "other")) {
                // Female to male/other transformations
                
                // Check for dress → pants+shirt replacement
                if (processedTag.includes("dress") && !processedTag.includes("wedding dress")) {
                    // Extract any color that might precede "dress"
                    const colorMatch = processedTag.match(/(\w+)\s+dress/i);
                    const color = colorMatch && colorMatch[1] !== "and" ? colorMatch[1] : "";
                    
                    // Replace dress with pants and shirt, preserving color if found
                    processedTag = processedTag
                        .replace(/\b(\w*\s*)dress\b/gi, color ? `${color} pants, ${color} shirt` : "pants, shirt");
                } else {
                    // Process maid → butler carefully to avoid false positives
                    processedTag = processedTag
                        .replace(/\bmaid\b(?!(en|_|arian))/gi, "butler") // Avoid "maiden", "maid_", "maid arian"
                        
                        // Standard replacements
                        .replace(/\bdark-skinned female\b/gi, "dark-skinned male")
                        .replace(/\bmuscular female\b/gi, "muscular male")
                        .replace(/\bboobplate\b/gi, "breastplate")
                        .replace(/\bdemon girl\b/gi, "demon boy")
                        .replace(/\bcat girl\b/gi, "cat boy")
                        
                        // New replacements
                        .replace(/\b(\w+\s+)?pantyhose\b/gi, "$1pants") // Preserve color prefix
                        .replace(/\b(\w+\s+)?miniskirt\b/gi, "$1shorts") // Preserve color prefix
                        .replace(/\bplunging neckline\b/gi, "v-neck")
                        .replace(/\bmaid headdress\b/gi, "bowler hat");
                    
                    // Specific replacements for clothing
                    if (processedTag.includes("butler")) {
                        processedTag = processedTag.replace(/\bapron\b/gi, "vest");
                    }
                    
                    // Original replacements with color preservation
                    processedTag = processedTag
                        .replace(/\b(\w+\s+)?skirt\b/gi, "$1pants") // Preserve color prefix
                        .replace(/\b(\w+\s+)?witch hat\b/gi, "$1wizard hat") // Preserve color prefix
                        .replace(/\bmonster girl\b/gi, "monster") // Special handling
                        .replace(/\b(\w+\s+)?dress\b/gi, "$1tunic") // Preserve color prefix
                        .replace(/\bchest sarashi\b/gi, "sarashi");
                        
                    // Handle uniform-specific transformations
                    if (/\b(school|military|police|security|maid|butler|sailor) uniform\b/i.test(processedTag)) {
                        processedTag = processedTag.replace(/\b(\w+\s+)?skirt\b/gi, "$1pants"); // Preserve color prefix
                    }
                }
            }
            
            return processedTag;
        });
    }
    
    return tagsArray.join(", ");
}

/**
 * Gets character subjects and metadata for prompt generation
 * 
 * @return {Object} - Object containing subjects array and subjectCountObj
 */
export function getCharacterSubjects() {
    let subjects = [];
    let subjectCountObj = { girl: 0, boy: 0, other: 0 };

    // Get action assignments mapping - safely handle case where getActionAssignments might not be available yet
    const actionAssignments = typeof getActionAssignments === 'function' 
        ? getActionAssignments() 
        : (window.getActionAssignments ? window.getActionAssignments() : {});

    // Process standard character blocks
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
                // Get the selected gender from the radio buttons
                const selectedGender = document.querySelector(`input[name="gender-${i}"]:checked`)?.value;
                const defaultGender = selectedData.defaultGender || "girl";
                
                // If selected gender is different from default, we need to add genderswap tags
                if (selectedGender && selectedGender !== defaultGender) {
                    gender = selectedGender;
                    
                    // Process gendered tags before adding genderswap tags
                    finalTags = processGenderedTags(finalTags, defaultGender, selectedGender);
                    
                    // Create an array of tags
                    let tagsArray = finalTags.split(",").map(t => t.trim()).filter(t => t !== "");
                    
                    // Add general genderswap tag
                    if (tagsArray.length >= 2) {
                        tagsArray.splice(tagsArray.length - 1, 0, "genderswap");
                    } else {
                        tagsArray.push("genderswap");
                    }
                    
                    // Add directional genderswap tag based on the transformation
                    let directionTag = "";
                    if (defaultGender === "boy" && selectedGender === "girl") {
                        directionTag = "genderswap mtf"; // male to female
                    } else if (defaultGender === "girl" && selectedGender === "boy") {
                        directionTag = "genderswap ftm"; // female to male
                    } else if (defaultGender === "other" && selectedGender === "boy") {
                        directionTag = "genderswap otm"; // other to male
                    } else if (defaultGender === "other" && selectedGender === "girl") {
                        directionTag = "genderswap otf"; // other to female
                    } else if (defaultGender === "boy" && selectedGender === "other") {
                        directionTag = "genderswap mto"; // male to other
                    } else if (defaultGender === "girl" && selectedGender === "other") {
                        directionTag = "genderswap fto"; // female to other
                    }
                    
                    // Add the directional tag
                    if (directionTag) {
                        tagsArray.splice(tagsArray.length - 1, 0, directionTag);
                    }
                    
                    finalTags = tagsArray.join(", ");
                } else {
                    gender = defaultGender;
                }
            } else {
                gender = selectedData.defaultGender || "girl";
            }

            // Process enhancer selection
            const enhancerDisplay = block.querySelector('#enhancer-div-' + i + ' .selected-display');
            if (enhancerDisplay && enhancerDisplay.textContent !== "-- None --") {
                // Get the selected gender from the radio buttons if there was a gender swap
                const selectedGender = document.querySelector(`input[name="gender-${i}"]:checked`)?.value;
                const defaultGender = selectedData.defaultGender || "girl";
                const wasGenderSwapped = selectedGender && selectedGender !== defaultGender;
                
                let tagsArray = finalTags.split(",").map(t => t.trim()).filter(t => t !== "");
                
                // Use the original enhancer text (with -- tags) from the data attribute if available
                // Otherwise fall back to the displayed text
                let enhancerText = enhancerDisplay.dataset.originalEnhancer || enhancerDisplay.textContent;
                
                // Process gendered tags in the enhancer if there was a gender swap
                if (wasGenderSwapped) {
                    enhancerText = processGenderedTags(enhancerText, defaultGender, selectedGender);
                }
                
                if (tagsArray.length >= 2) {
                    tagsArray.splice(tagsArray.length - 1, 0, enhancerText);
                } else {
                    tagsArray.push(enhancerText);
                }
                finalTags = tagsArray.join(", ");
            }

            // Append any action tags assigned to this character block
            if (actionAssignments[selectedName]) {
                // Get the selected gender from the radio buttons if there was a gender swap
                const selectedGender = document.querySelector(`input[name="gender-${i}"]:checked`)?.value;
                const defaultGender = selectedData.defaultGender || "girl";
                const wasGenderSwapped = selectedGender && selectedGender !== defaultGender;
                
                // Process each action tag for gender-specific terms if needed
                let actionTags = actionAssignments[selectedName];
                if (wasGenderSwapped) {
                    actionTags = actionTags.map(tag => 
                        processGenderedTags(tag, defaultGender, selectedGender)
                    );
                }
                
                finalTags += ", " + actionTags.join(", ");
            }

            subjectCountObj[gender] = (subjectCountObj[gender] || 0) + 1;
            subjects.push(`${gender} ${finalTags}`);
        }
    }

    // Process custom character blocks
    const customBlocks = document.querySelectorAll('.custom-character-block');
    customBlocks.forEach(block => {
        // Default gender is "girl" unless we detect otherwise from tags
        let gender = "girl";
        let detectedGender = null;
        let hasGenderswap = false;
        let swapDirection = '';
        
        // Find the gender selection if available
        const genderRadios = block.querySelectorAll('input[type="radio"][name^="gender-custom-"]');
        if (genderRadios.length > 0) {
            const selectedRadio = Array.from(genderRadios).find(radio => radio.checked);
            if (selectedRadio) {
                gender = selectedRadio.value;
                
                // Check if this is different from the detected gender from tags
                if (detectedGender && gender !== detectedGender) {
                    hasGenderswap = true;
                    swapDirection = `${detectedGender}-to-${gender}`;
                }
            }
        }
        
        // Find the pill container with the custom tags
        const pillContainer = block.querySelector('.custom-pill-container');
        if (pillContainer) {
            // Get all tag pills and extract the original tag value from data attribute
            // If not available, fall back to the text content minus the "×"
            const tags = Array.from(pillContainer.querySelectorAll('.custom-tag-pill'))
                .map(pill => {
                    // Try to get the original tag from data attribute
                    const originalTag = pill.dataset.originalTag;
                    if (originalTag) return originalTag;
                    
                    // Fall back to text content with "×" removed
                    return pill.textContent.replace('×', '').trim();
                })
                .filter(tag => tag.length > 0);
            
            if (tags.length > 0) {
                // Process tags to detect gender and format them
                let processedTags = [];
                
                for (const tag of tags) {
                    // Try to detect gender from this tag
                    const genderInfo = window.detectGenderFromTag ? window.detectGenderFromTag(tag) : null;
                    
                    if (genderInfo) {
                        // We found a gender tag
                        detectedGender = genderInfo.gender;
                        
                        // Set this as the default gender if no selection was made
                        if (!gender && detectedGender) {
                            gender = detectedGender;
                        }
                        
                        // Check if we need to add genderswap tags
                        if (gender !== detectedGender) {
                            hasGenderswap = true;
                            swapDirection = `${detectedGender}-to-${gender}`;
                        }
                        
                        // Don't include the gender tag in the processed tags
                        continue;
                    }
                    
                    // Process the tag for gender-specific terms if we have a gender swap
                    let processedTag = tag;
                    if (hasGenderswap && detectedGender && gender) {
                        processedTag = processGenderedTags(tag, detectedGender, gender);
                    }
                    
                    // Format the tag (replace underscores with spaces)
                    processedTag = window.formatTag ? window.formatTag(processedTag) : processedTag;
                    processedTags.push(processedTag);
                }
                
                // Add genderswap tags if needed
                if (hasGenderswap) {
                    processedTags.push("genderswap");
                    
                    // Add directional tag
                    let directionTag = "";
                    if (detectedGender === "boy" && gender === "girl") {
                        directionTag = "genderswap mtf"; // male to female
                    } else if (detectedGender === "girl" && gender === "boy") {
                        directionTag = "genderswap ftm"; // female to male
                    } else if (detectedGender === "other" && gender === "boy") {
                        directionTag = "genderswap otm"; // other to male
                    } else if (detectedGender === "other" && gender === "girl") {
                        directionTag = "genderswap otf"; // other to female
                    } else if (detectedGender === "boy" && gender === "other") {
                        directionTag = "genderswap mto"; // male to other
                    } else if (detectedGender === "girl" && gender === "other") {
                        directionTag = "genderswap fto"; // female to other
                    }
                    
                    if (directionTag) {
                        processedTags.push(directionTag);
                    }
                }
                
                // Add the gender and join the processed tags with commas
                subjectCountObj[gender] = (subjectCountObj[gender] || 0) + 1;
                subjects.push(`${gender} ${processedTags.join(', ')}`);
            }
        }
    });

    return { subjects, subjectCountObj };
}

/**
 * Returns the current character count
 * 
 * @return {number} - Current number of character blocks
 */
export function getCurrentCharacterCount() {
    return characterCount;
}

/**
 * Returns the maximum allowed character count
 * 
 * @return {number} - Maximum number of allowed character blocks
 */
export function getMaxCharacters() {
    return maxCharacters;
} 