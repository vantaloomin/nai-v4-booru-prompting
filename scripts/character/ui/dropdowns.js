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
        // Create container for the gender selection
        const genderSelectionContainer = document.createElement('div');
        genderSelectionContainer.className = 'gender-selection-container';
        
        // Create labels for boy/girl/other
        const boyLabel = document.createElement('span');
        boyLabel.className = 'gender-label boy-label';
        boyLabel.textContent = 'Boy';
        
        const girlLabel = document.createElement('span');
        girlLabel.className = 'gender-label girl-label';
        girlLabel.textContent = 'Girl';
        
        const otherLabel = document.createElement('span');
        otherLabel.className = 'gender-label other-label';
        otherLabel.textContent = 'Other';
        
        // Create the trio select slider
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'gender-trio-slider-container';
        
        const sliderTrack = document.createElement('div');
        sliderTrack.className = 'gender-trio-track';
        
        const sliderHandle = document.createElement('div');
        sliderHandle.className = 'gender-trio-handle';
        
        // Create hidden radio inputs for the three options
        const boyInput = document.createElement('input');
        boyInput.type = 'radio';
        boyInput.name = 'gender-' + id;
        boyInput.id = 'gender-boy-' + id;
        boyInput.value = 'boy';
        boyInput.className = 'gender-radio';
        
        const girlInput = document.createElement('input');
        girlInput.type = 'radio';
        girlInput.name = 'gender-' + id;
        girlInput.id = 'gender-girl-' + id;
        girlInput.value = 'girl';
        girlInput.className = 'gender-radio';
        
        const otherInput = document.createElement('input');
        otherInput.type = 'radio';
        otherInput.name = 'gender-' + id;
        otherInput.id = 'gender-other-' + id;
        otherInput.value = 'other';
        otherInput.className = 'gender-radio';
        
        // Set default selection based on character's default gender
        const defaultGender = selectedData.defaultGender || "girl";
        if (defaultGender === 'boy') {
            boyInput.checked = true;
            sliderHandle.classList.add('position-boy');
        } else if (defaultGender === 'girl') {
            girlInput.checked = true;
            sliderHandle.classList.add('position-girl');
        } else {
            otherInput.checked = true;
            sliderHandle.classList.add('position-other');
        }
        
        // Store default gender for reference
        sliderContainer.dataset.defaultGender = defaultGender;
        
        // Add track and handle to slider container
        sliderTrack.appendChild(sliderHandle);
        sliderContainer.appendChild(sliderTrack);
        
        // Add radio inputs to container
        sliderContainer.appendChild(boyInput);
        sliderContainer.appendChild(girlInput);
        sliderContainer.appendChild(otherInput);
        
        // Function to update active labels
        function updateGenderLabels() {
            const selectedGender = document.querySelector(`input[name="gender-${id}"]:checked`).value;
            boyLabel.classList.toggle('active', selectedGender === 'boy');
            girlLabel.classList.toggle('active', selectedGender === 'girl');
            otherLabel.classList.toggle('active', selectedGender === 'other');
        }
        
        // Function to set the gender based on position
        function setGenderByPosition(position) {
            let gender;
            if (position <= 33.3) {
                gender = 'boy';
                sliderHandle.className = 'gender-trio-handle position-boy';
                boyInput.checked = true;
            } else if (position <= 66.6) {
                gender = 'girl';
                sliderHandle.className = 'gender-trio-handle position-girl';
                girlInput.checked = true;
            } else {
                gender = 'other';
                sliderHandle.className = 'gender-trio-handle position-other';
                otherInput.checked = true;
            }
            updateGenderLabels();
            return gender;
        }
        
        // Add event listeners to radio inputs
        boyInput.addEventListener('change', function() {
            if (this.checked) {
                sliderHandle.className = 'gender-trio-handle position-boy';
                updateGenderLabels();
            }
        });
        
        girlInput.addEventListener('change', function() {
            if (this.checked) {
                sliderHandle.className = 'gender-trio-handle position-girl';
                updateGenderLabels();
            }
        });
        
        otherInput.addEventListener('change', function() {
            if (this.checked) {
                sliderHandle.className = 'gender-trio-handle position-other';
                updateGenderLabels();
            }
        });
        
        // Add click event to the track for direct position selection
        sliderTrack.addEventListener('click', function(e) {
            // Calculate click position as percentage of track width
            const rect = this.getBoundingClientRect();
            const clickPosition = ((e.clientX - rect.left) / rect.width) * 100;
            
            // Set gender based on where the user clicked
            setGenderByPosition(clickPosition);
        });
        
        // Drag functionality for the handle
        let isDragging = false;
        
        sliderHandle.addEventListener('mousedown', function(e) {
            isDragging = true;
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', stopDrag);
            // Prevent default to avoid text selection during drag
            e.preventDefault();
        });
        
        function handleDrag(e) {
            if (!isDragging) return;
            
            const rect = sliderTrack.getBoundingClientRect();
            let position = ((e.clientX - rect.left) / rect.width) * 100;
            
            // Constrain to track bounds
            position = Math.max(0, Math.min(100, position));
            
            // Set gender based on drag position
            setGenderByPosition(position);
        }
        
        function stopDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', stopDrag);
        }
        
        // Clickable labels to select gender
        boyLabel.addEventListener('click', function() {
            boyInput.checked = true;
            boyInput.dispatchEvent(new Event('change'));
        });
        
        girlLabel.addEventListener('click', function() {
            girlInput.checked = true;
            girlInput.dispatchEvent(new Event('change'));
        });
        
        otherLabel.addEventListener('click', function() {
            otherInput.checked = true;
            otherInput.dispatchEvent(new Event('change'));
        });
        
        // Add elements to the container
        genderSelectionContainer.appendChild(sliderContainer);
        genderSelectionContainer.appendChild(boyLabel);
        genderSelectionContainer.appendChild(girlLabel);
        genderSelectionContainer.appendChild(otherLabel);
        
        // Add a label to inform the user about the character's default gender
        const infoLabel = document.createElement('div');
        infoLabel.className = 'gender-info-label';
        infoLabel.textContent = `Default: ${defaultGender.charAt(0).toUpperCase() + defaultGender.slice(1)}`;
        genderSelectionContainer.appendChild(infoLabel);
        
        genderDiv.appendChild(genderSelectionContainer);
        
        // Initialize label states
        updateGenderLabels();
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