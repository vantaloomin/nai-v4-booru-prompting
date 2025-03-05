/**
 * Character Dropdowns Module
 * 
 * Handles creation and management of dropdown elements for character blocks.
 */

import { sortAlphabetically } from '../utils/sorter.js';
import { cleanDisplayName } from '../utils/nameFormatter.js';
import { processEnhancers } from '../utils/enhancerProcessor.js';

/**
 * Closes all open dropdown menus
 */
export function closeAllDropdowns() {
    const allLists = document.querySelectorAll('.dropdown-list');
    allLists.forEach(list => list.style.display = 'none');
}

/**
 * Updates the title options in a character block based on selected media type
 * 
 * @param {number} id - Character block ID
 * @param {string} selectedMedia - Selected media type
 */
export function updateTitleOptions(id, selectedMedia) {
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

/**
 * Updates the character dropdown based on selected media type and title
 * 
 * @param {number} id - Character block ID
 * @param {string} selectedMedia - Selected media type
 * @param {string} selectedTitle - Selected title
 */
export function updateCharacterDropdown(id, selectedMedia, selectedTitle) {
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
                
                // After updating the title, refresh action assignments to maintain connections
                if (typeof updateAllActionAssignments === "function") {
                    setTimeout(updateAllActionAssignments, 100);
                }
            }
        });
        charList.appendChild(charItem);
    });

    charDisplay.textContent = "-- Select Character --";
}

/**
 * Updates the gender toggle options based on the selected character
 * 
 * @param {number} id - Character block ID
 * @param {string} selectedCharacterName - Selected character name
 */
export function updateGenderToggle(id, selectedCharacterName) {
    const genderDiv = document.getElementById('gender-div-' + id);
    genderDiv.innerHTML = "";
    const selectedData = characterData.find(item => item.name === selectedCharacterName);
    if (selectedData && selectedData.genderswapAvailable) {
        // Create container for the gender toggle
        const genderToggleContainer = document.createElement('div');
        genderToggleContainer.className = 'gender-toggle-container';
        
        // Create labels for boy/girl
        const boyLabel = document.createElement('span');
        boyLabel.className = 'gender-label boy-label';
        boyLabel.textContent = 'Boy';
        
        const girlLabel = document.createElement('span');
        girlLabel.className = 'gender-label girl-label';
        girlLabel.textContent = 'Girl';
        
        // Create the toggle switch
        const toggleLabel = document.createElement('label');
        toggleLabel.className = 'gender-toggle-switch';
        
        const toggleInput = document.createElement('input');
        toggleInput.type = "checkbox";
        toggleInput.id = 'genderswap-' + id;
        
        // IMPORTANT: In the existing code, checkbox.checked means "apply a gender swap"
        // So initially we should set this to NOT checked (no swap)
        toggleInput.checked = false;
        
        // The toggle should visually reflect the character's gender
        // But the toggle state (checked) still means "apply a gender swap"
        // So we need to style based on whether it matches the default
        const defaultGender = selectedData.defaultGender || "girl";
        
        // Set a data attribute for styling purposes
        toggleInput.dataset.defaultGender = defaultGender;
        
        const sliderSpan = document.createElement('span');
        sliderSpan.className = 'gender-slider round';
        
        // Add elements to the DOM
        toggleLabel.appendChild(toggleInput);
        toggleLabel.appendChild(sliderSpan);
        
        // Add everything to the container
        genderToggleContainer.appendChild(boyLabel);
        genderToggleContainer.appendChild(toggleLabel);
        genderToggleContainer.appendChild(girlLabel);
        
        // Add a label to inform the user about the character's default gender
        const infoLabel = document.createElement('div');
        infoLabel.className = 'gender-info-label';
        infoLabel.textContent = `Default: ${defaultGender.charAt(0).toUpperCase() + defaultGender.slice(1)}`;
        genderToggleContainer.appendChild(infoLabel);
        
        genderDiv.appendChild(genderToggleContainer);
        
        // Add an event listener to update the visual state when toggle changes
        toggleInput.addEventListener('change', function() {
            // Use data attribute to determine which gender to show as active
            const isSwapped = this.checked;
            const defaultIsBoy = defaultGender === 'boy';
            
            // Update classes based on whether gender is swapped
            boyLabel.classList.toggle('active', isSwapped ? !defaultIsBoy : defaultIsBoy);
            girlLabel.classList.toggle('active', isSwapped ? defaultIsBoy : !defaultIsBoy);
        });
        
        // Trigger change event to set initial active state
        toggleInput.dispatchEvent(new Event('change'));
    }
}

/**
 * Updates the enhancer dropdown for a specific character
 * 
 * @param {number} id - Character block ID
 * @param {string} selectedCharacterName - Name of the selected character
 */
export function updateEnhancerDropdown(id, selectedCharacterName) {
    const enhancerDiv = document.getElementById('enhancer-div-' + id);
    if (!enhancerDiv) return; // Guard against missing element
    
    // Find the label container or create it if it doesn't exist
    let labelContainer = enhancerDiv.querySelector('div');
    if (!labelContainer) {
        labelContainer = document.createElement('div');
        enhancerDiv.appendChild(labelContainer);
    }
    
    enhancerDiv.innerHTML = ''; // Clear previous content
    enhancerDiv.appendChild(labelContainer); // Re-add label container

    const selectedData = characterData.find(item => item.name === selectedCharacterName);
    if (selectedData && selectedData.enhancers && selectedData.enhancers.length > 0) {
        labelContainer.style.display = 'block';
        
        // Create label if it doesn't exist
        if (!labelContainer.querySelector('label')) {
            const enhancerLabel = document.createElement('label');
            enhancerLabel.textContent = 'Select Optional Enhancer:';
            labelContainer.appendChild(enhancerLabel);
        }

        const enhancerContainer = document.createElement('div');
        enhancerContainer.className = 'custom-dropdown';

        const enhancerDisplay = document.createElement('div');
        enhancerDisplay.className = 'selected-display';
        enhancerDisplay.textContent = "-- None --";

        const enhancerList = document.createElement('div');
        enhancerList.className = 'dropdown-list suggestions-list';

        // Process and add enhancer options - now working with the new sub-array structure
        let processedEnhancers = processEnhancers(selectedData.enhancers);
        
        // Add "None" option at the top
        const noneOption = document.createElement('div');
        noneOption.className = 'suggestion-item';
        noneOption.textContent = "-- None --";
        noneOption.addEventListener('click', () => {
            enhancerDisplay.textContent = "-- None --";
            // Clear the original enhancer data attribute when selecting None
            delete enhancerDisplay.dataset.originalEnhancer;
            enhancerList.style.display = 'none';
            if (typeof updateAllActionAssignments === "function") {
                updateAllActionAssignments();
            }
        });
        enhancerList.appendChild(noneOption);
        
        // Add the processed enhancer options
        processedEnhancers.forEach(enh => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            // Display the user-friendly version without -- tags
            item.textContent = enh.display;
            // Store the original version with -- tags as a data attribute
            item.dataset.originalEnhancer = enh.original;
            
            item.addEventListener('click', () => {
                // Show user-friendly display version in the UI
                enhancerDisplay.textContent = enh.display;
                // Store original version with -- tags for processing
                enhancerDisplay.dataset.originalEnhancer = enh.original;
                enhancerList.style.display = 'none';
                if (typeof updateAllActionAssignments === "function") {
                    updateAllActionAssignments();
                }
            });
            enhancerList.appendChild(item);
        });

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

/**
 * Resets the character dropdown to its default state
 * 
 * @param {number} id - Character block ID
 */
export function resetCharacterDropdown(id) {
    const charList = document.getElementById(`char-list-${id}`);
    if (charList) {
        charList.innerHTML = "";
        const charDisplay = charList.previousElementSibling;
        if (charDisplay) {
            charDisplay.textContent = "-- Select Character --";
        }
    }
} 