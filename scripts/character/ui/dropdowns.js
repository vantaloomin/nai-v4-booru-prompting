/**
 * Character Dropdowns Module
 * 
 * Handles creation and management of dropdown elements for character blocks.
 */

import { sortAlphabetically } from '../utils/sorter.js';
import { cleanDisplayName } from '../utils/nameFormatter.js';
import { processEnhancers } from '../utils/enhancerProcessor.js';
import { searchTags, createTagPill, formatTag } from '../../customCharacter/utils/tagUtils.js';

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
            updateAgeUpToggle(id, item.name);
            updateEnhancerDropdown(id, item.name);
            
            // Populate default tag pills for this character
            populateDefaultTagPills(id, item);
            
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
        // Add the gender selection title outside the container
        const genderTitle = document.createElement('label');
        genderTitle.className = 'gender-title';
        genderTitle.textContent = 'Character Gender:';
        genderDiv.appendChild(genderTitle);
        
        // Create container for all gender selection elements
        const genderContainer = document.createElement('div');
        genderContainer.className = 'gender-trio-container';
        genderDiv.appendChild(genderContainer);
        
        // Determine the default gender
        let defaultGender = 'girl'; // Default if not specified
        if (selectedData.hasOwnProperty('defaultGender')) {
            defaultGender = selectedData.defaultGender.toLowerCase();
        }
        
        // Create the gender radio inputs in order: boy, other, girl
        const genders = ['boy', 'other', 'girl'];
        genders.forEach(gender => {
            const isDefault = gender === defaultGender;
            
            // Radio input (hidden)
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `gender-${id}`;
            input.value = gender;
            input.className = 'gender-radio';
            input.checked = isDefault;
            input.id = `gender-${id}-${gender}`;
            
            // Add event listener to refresh default tags when gender changes
            input.addEventListener('change', () => {
                // Find the selected character data again
                const characterItem = characterData.find(item => item.name === selectedCharacterName);
                if (characterItem) {
                    // Get the selected gender
                    const selectedGender = this.value;
                    
                    // Check if breast size visibility should be updated
                    updateBreastSizeVisibility(id, selectedGender);
                    
                    // Refresh default tags with updated gender
                    populateDefaultTagPills(id, characterItem);
                }
            });
            
            genderContainer.appendChild(input);
        });
        
        // Verify that all radio buttons were created before proceeding
        const radioCheck = genderContainer.querySelectorAll('.gender-radio');
        if (radioCheck.length < 3) {
            console.error(`Failed to create all gender radio buttons for ID ${id}. Found: ${radioCheck.length}`);
            return; // Exit early to prevent errors in slider setup
        }
        
        // Create the slider component
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'gender-trio-slider-container';
        
        const sliderTrack = document.createElement('div');
        sliderTrack.className = 'gender-trio-track';
        
        const sliderHandle = document.createElement('div');
        sliderHandle.className = 'gender-trio-handle';
        
        // Set initial position based on default gender
        if (defaultGender === 'boy') {
            sliderHandle.classList.add('position-boy');
        } else if (defaultGender === 'girl') {
            sliderHandle.classList.add('position-girl');
        } else {
            sliderHandle.classList.add('position-other');
        }
        
        sliderTrack.appendChild(sliderHandle);
        sliderContainer.appendChild(sliderTrack);
        
        // Create the labels container that will appear below the slider
        const labelsContainer = document.createElement('div');
        labelsContainer.className = 'gender-labels-container';
        
        // Create labels in the order: Boy / Other / Girl
        genders.forEach(gender => {
            const isDefault = gender === defaultGender;
            
            // Label for the radio input
            const label = document.createElement('label');
            label.htmlFor = `gender-${id}-${gender}`;
            label.className = `gender-label ${gender}-label ${isDefault ? 'active' : ''}`;
            label.textContent = gender.charAt(0).toUpperCase() + gender.slice(1);
            
            // If this is the default gender, add an indicator
            if (isDefault) {
                const defaultIndicator = document.createElement('span');
                defaultIndicator.className = 'default-indicator';
                defaultIndicator.textContent = '(default)';
                label.appendChild(defaultIndicator);
            }
            
            labelsContainer.appendChild(label);
        });
        
        // Add slider functionality
        let isDragging = false;
        
        // Helper function to set gender based on slider position
        function setGenderByPosition(position) {
            // Query from genderContainer directly instead of genderDiv
            const radios = genderContainer.querySelectorAll('.gender-radio');
            const labels = genderContainer.querySelectorAll('.gender-label');
            
            // Check if all radio buttons exist before proceeding
            if (radios.length < 3) {
                console.error(`Expected 3 gender radio buttons but found ${radios.length} for ID ${id}`);
                return; // Exit function to prevent error
            }
            
            // Remove all position classes
            sliderHandle.classList.remove('position-boy', 'position-girl', 'position-other');
            
            // Set position based on the clicked area
            if (position < 33.3) {
                sliderHandle.classList.add('position-boy');
                radios[0].checked = true;
                
                // Update labels
                if (labels.length > 0) {
                    labels.forEach(l => l.classList.remove('active'));
                    labels[0].classList.add('active');
                }
                
                // Trigger change event
                radios[0].dispatchEvent(new Event('change'));
            } else if (position < 66.6) {
                sliderHandle.classList.add('position-other');
                radios[1].checked = true;
                
                // Update labels
                if (labels.length > 1) {
                    labels.forEach(l => l.classList.remove('active'));
                    labels[1].classList.add('active');
                }
                
                // Trigger change event
                radios[1].dispatchEvent(new Event('change'));
            } else {
                sliderHandle.classList.add('position-girl');
                radios[2].checked = true;
                
                // Update labels
                if (labels.length > 2) {
                    labels.forEach(l => l.classList.remove('active'));
                    labels[2].classList.add('active');
                }
                
                // Trigger change event
                radios[2].dispatchEvent(new Event('change'));
            }
        }
        
        // Handle mouse and touch events for the slider
        sliderTrack.addEventListener('mousedown', function(e) {
            const rect = sliderTrack.getBoundingClientRect();
            const position = ((e.clientX - rect.left) / rect.width) * 100;
            setGenderByPosition(position);
        });
        
        sliderHandle.addEventListener('mousedown', function(e) {
            isDragging = true;
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', stopDrag);
            e.preventDefault(); // Prevent text selection during drag
        });
        
        function handleDrag(e) {
            if (isDragging) {
                const rect = sliderTrack.getBoundingClientRect();
                let position = ((e.clientX - rect.left) / rect.width) * 100;
                
                // Constrain to track bounds
                position = Math.max(0, Math.min(100, position));
                
                setGenderByPosition(position);
            }
        }
        
        function stopDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', stopDrag);
        }
        
        // Add touch support
        sliderTrack.addEventListener('touchstart', function(e) {
            const rect = sliderTrack.getBoundingClientRect();
            const touch = e.touches[0];
            const position = ((touch.clientX - rect.left) / rect.width) * 100;
            setGenderByPosition(position);
            e.preventDefault();
        });
        
        sliderHandle.addEventListener('touchstart', function(e) {
            isDragging = true;
            document.addEventListener('touchmove', handleTouchDrag);
            document.addEventListener('touchend', stopTouchDrag);
            e.preventDefault();
        });
        
        function handleTouchDrag(e) {
            if (isDragging) {
                const rect = sliderTrack.getBoundingClientRect();
                const touch = e.touches[0];
                let position = ((touch.clientX - rect.left) / rect.width) * 100;
                
                // Constrain to track bounds
                position = Math.max(0, Math.min(100, position));
                
                setGenderByPosition(position);
            }
        }
        
        function stopTouchDrag() {
            isDragging = false;
            document.removeEventListener('touchmove', handleTouchDrag);
            document.removeEventListener('touchend', stopTouchDrag);
        }
        
        // Add click handlers for labels as well
        const labels = labelsContainer.querySelectorAll('.gender-label');
        labels.forEach((label, index) => {
            label.addEventListener('click', () => {
                const radios = genderContainer.querySelectorAll('.gender-radio');
                
                // Update slider position based on the clicked label
                if (index === 0) {
                    // Boy
                    sliderHandle.classList.remove('position-girl', 'position-other');
                    sliderHandle.classList.add('position-boy');
                    radios[0].checked = true;
                } else if (index === 1) {
                    // Other
                    sliderHandle.classList.remove('position-boy', 'position-girl');
                    sliderHandle.classList.add('position-other');
                    radios[1].checked = true;
                } else {
                    // Girl
                    sliderHandle.classList.remove('position-boy', 'position-other');
                    sliderHandle.classList.add('position-girl');
                    radios[2].checked = true;
                }
                
                // Update active state for all labels
                labels.forEach(l => l.classList.remove('active'));
                label.classList.add('active');
                
                // Trigger change event on the selected radio
                radios[index].dispatchEvent(new Event('change'));
            });
        });
        
        // Append the slider container and labels
        genderContainer.appendChild(sliderContainer);
        genderContainer.appendChild(labelsContainer);
        genderDiv.appendChild(genderContainer);
    }

    // Add event listeners to radio inputs for gender selection
    document.querySelectorAll(`input[name="gender-${id}"]`).forEach(radio => {
        const existingChangeHandler = radio.onchange;
        radio.addEventListener('change', function() {
            // Run the existing handler if available
            if (existingChangeHandler) existingChangeHandler.call(this);
            
            // Find the selected character data
            const charData = characterData.find(item => item.name === selectedCharacterName);
            if (charData) {
                // Get the selected gender
                const selectedGender = this.value;
                
                // Check if breast size visibility should be updated
                updateBreastSizeVisibility(id, selectedGender);
                
                // Refresh default tags with the new gender
                populateDefaultTagPills(id, charData);
            }
        });
    });
}

// Helper function to update breast size container visibility based on gender and age up toggle state
function updateBreastSizeVisibility(id, gender) {
    const ageUpInput = document.getElementById(`age-up-input-${id}`);
    const breastSizeContainer = document.getElementById(`breast-size-container-${id}`);
    
    if (ageUpInput && breastSizeContainer) {
        console.log(`Updating breast size visibility for ID ${id}. Gender: ${gender}, Age Up checked: ${ageUpInput.checked}`);
        if (gender === 'girl' && ageUpInput.checked) {
            breastSizeContainer.style.display = 'block';
            
            // Ensure a breast size is selected if none is currently selected
            const selectedBreastSize = document.querySelector(`input[name="breast-size-${id}"]:checked`);
            if (!selectedBreastSize) {
                // If no size is selected, default to small
                const smallInput = document.getElementById(`breast-size-small-${id}`);
                if (smallInput) {
                    smallInput.checked = true;
                    smallInput.dispatchEvent(new Event('change'));
                }
            }
        } else {
            breastSizeContainer.style.display = 'none';
        }
    } else {
        console.warn(`Missing elements for breast size visibility update. ID: ${id}, ageUpInput: ${!!ageUpInput}, breastSizeContainer: ${!!breastSizeContainer}`);
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

        // For each enhancer option, add an event handler to refresh default tags
        enhancerList.querySelectorAll('.suggestion-item').forEach(item => {
            const existingClickHandler = item.onclick;
            item.addEventListener('click', function() {
                // Run the existing handler if available
                if (existingClickHandler) existingClickHandler.call(this);
                
                // Find the selected character data
                const charData = characterData.find(item => item.name === selectedCharacterName);
                if (charData) {
                    // Refresh default tags with the new enhancer
                    populateDefaultTagPills(id, charData);
                }
            });
        });

        // Also handle the "None" option to refresh tags
        const noneEnhancerOption = enhancerList.querySelector('.suggestion-item:first-child');
        if (noneEnhancerOption) {
            const existingClickHandler = noneEnhancerOption.onclick;
            noneEnhancerOption.addEventListener('click', function() {
                // Run the existing handler if available
                if (existingClickHandler) existingClickHandler.call(this);
                
                // Find the selected character data
                const charData = characterData.find(item => item.name === selectedCharacterName);
                if (charData) {
                    // Refresh default tags with no enhancer
                    populateDefaultTagPills(id, charData);
                }
            });
        }
    } else {
        labelContainer.style.display = 'none';
    }
}

/**
 * Updates the Age Up toggle for a character block based on selected character
 * 
 * @param {number} id - Character block ID
 * @param {string} selectedCharacterName - Name of the selected character
 */
export function updateAgeUpToggle(id, selectedCharacterName) {
    const ageUpDiv = document.getElementById('age-up-div-' + id);
    ageUpDiv.innerHTML = "";
    
    const selectedData = characterData.find(item => item.name === selectedCharacterName);
    if (selectedData && selectedData.ageUpAvailable) {
        // Create main container for the Age Up toggle
        const ageUpContainer = document.createElement('div');
        ageUpContainer.className = 'age-up-container';
        
        // Create label
        const ageUpLabel = document.createElement('label');
        ageUpLabel.textContent = 'Age Up:';
        ageUpContainer.appendChild(ageUpLabel);
        
        // Create toggle switch container
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'toggle-switch-container';
        
        // Create toggle switch
        const toggleSwitch = document.createElement('div');
        toggleSwitch.className = 'toggle-switch';
        
        // Create hidden checkbox input
        const ageUpInput = document.createElement('input');
        ageUpInput.type = 'checkbox';
        ageUpInput.name = 'age-up-' + id;
        ageUpInput.id = 'age-up-input-' + id;
        ageUpInput.className = 'age-up-checkbox';
        
        // Create toggle slider
        const toggleSlider = document.createElement('span');
        toggleSlider.className = 'toggle-slider';
        
        // Add input and slider to toggle switch
        toggleSwitch.appendChild(ageUpInput);
        toggleSwitch.appendChild(toggleSlider);
        
        // Add click event to the slider to toggle the checkbox
        toggleSlider.addEventListener('click', function() {
            ageUpInput.checked = !ageUpInput.checked;
            // Trigger the change event manually
            ageUpInput.dispatchEvent(new Event('change'));
            
            // Log toggle action for debugging
            console.log(`Age Up toggle clicked for ID ${id}. New state: ${ageUpInput.checked}`);
            
            // Get the current gender and update breast size visibility directly
            const selectedGender = document.querySelector(`input[name="gender-${id}"]:checked`)?.value;
            if (selectedGender) {
                updateBreastSizeVisibility(id, selectedGender);
            }
        });
        
        // Add toggle switch to container
        toggleContainer.appendChild(toggleSwitch);
        ageUpContainer.appendChild(toggleContainer);
        
        // Create breast size container (initially hidden)
        const breastSizeContainer = document.createElement('div');
        breastSizeContainer.className = 'breast-size-container';
        breastSizeContainer.style.display = 'none';
        breastSizeContainer.id = 'breast-size-container-' + id;
        
        // Create breast size label
        const breastSizeLabel = document.createElement('label');
        breastSizeLabel.textContent = 'Breast Size:';
        breastSizeContainer.appendChild(breastSizeLabel);
        
        // Create labels for breast sizes
        const smallLabel = document.createElement('span');
        smallLabel.className = 'breast-size-label small-label active';
        smallLabel.textContent = 'Small';
        
        const mediumLabel = document.createElement('span');
        mediumLabel.className = 'breast-size-label medium-label';
        mediumLabel.textContent = 'Medium';
        
        const largeLabel = document.createElement('span');
        largeLabel.className = 'breast-size-label large-label';
        largeLabel.textContent = 'Large';
        
        const hugeLabel = document.createElement('span');
        hugeLabel.className = 'breast-size-label huge-label';
        hugeLabel.textContent = 'Huge';
        
        // Create label container
        const breastSizeLabelContainer = document.createElement('div');
        breastSizeLabelContainer.className = 'breast-size-label-container';
        breastSizeLabelContainer.appendChild(smallLabel);
        breastSizeLabelContainer.appendChild(mediumLabel);
        breastSizeLabelContainer.appendChild(largeLabel);
        breastSizeLabelContainer.appendChild(hugeLabel);
        breastSizeContainer.appendChild(breastSizeLabelContainer);
        
        // Create slider container
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'breast-size-slider-container';
        
        const sliderTrack = document.createElement('div');
        sliderTrack.className = 'breast-size-track';
        
        const sliderHandle = document.createElement('div');
        sliderHandle.className = 'breast-size-handle position-small';
        
        // Create hidden radio inputs for the size options
        const smallInput = document.createElement('input');
        smallInput.type = 'radio';
        smallInput.name = 'breast-size-' + id;
        smallInput.id = 'breast-size-small-' + id;
        smallInput.value = 'small breasts';
        smallInput.className = 'breast-size-radio';
        smallInput.checked = true;
        
        const mediumInput = document.createElement('input');
        mediumInput.type = 'radio';
        mediumInput.name = 'breast-size-' + id;
        mediumInput.id = 'breast-size-medium-' + id;
        mediumInput.value = 'medium breasts';
        mediumInput.className = 'breast-size-radio';
        
        const largeInput = document.createElement('input');
        largeInput.type = 'radio';
        largeInput.name = 'breast-size-' + id;
        largeInput.id = 'breast-size-large-' + id;
        largeInput.value = 'large breasts';
        largeInput.className = 'breast-size-radio';
        
        const hugeInput = document.createElement('input');
        hugeInput.type = 'radio';
        hugeInput.name = 'breast-size-' + id;
        hugeInput.id = 'breast-size-huge-' + id;
        hugeInput.value = 'huge breasts';
        hugeInput.className = 'breast-size-radio';
        
        // Add track and handle to slider container
        sliderTrack.appendChild(sliderHandle);
        sliderContainer.appendChild(sliderTrack);
        
        // Add radio inputs to container
        sliderContainer.appendChild(smallInput);
        sliderContainer.appendChild(mediumInput);
        sliderContainer.appendChild(largeInput);
        sliderContainer.appendChild(hugeInput);
        
        breastSizeContainer.appendChild(sliderContainer);
        
        // Add event listeners to breast size radio inputs to refresh default tags
        [smallInput, mediumInput, largeInput, hugeInput].forEach(input => {
            const existingChangeHandler = input.onchange;
            input.addEventListener('change', function() {
                // Run the existing handler if available
                if (existingChangeHandler) existingChangeHandler.call(this);
                
                // Find the selected character data
                const charData = characterData.find(item => item.name === selectedCharacterName);
                if (charData) {
                    // Refresh default tags with the new breast size setting
                    populateDefaultTagPills(id, charData);
                }
            });
        });
        
        // Function to update active labels
        function updateBreastSizeLabels() {
            const selectedSize = document.querySelector(`input[name="breast-size-${id}"]:checked`).value;
            smallLabel.classList.toggle('active', selectedSize === 'small breasts');
            mediumLabel.classList.toggle('active', selectedSize === 'medium breasts');
            largeLabel.classList.toggle('active', selectedSize === 'large breasts');
            hugeLabel.classList.toggle('active', selectedSize === 'huge breasts');
        }
        
        // Function to set breast size based on position
        function setBreastSizeByPosition(position) {
            let size;
            if (position <= 25) {
                size = 'small breasts';
                sliderHandle.className = 'breast-size-handle position-small';
                smallInput.checked = true;
            } else if (position <= 50) {
                size = 'medium breasts';
                sliderHandle.className = 'breast-size-handle position-medium';
                mediumInput.checked = true;
            } else if (position <= 75) {
                size = 'large breasts';
                sliderHandle.className = 'breast-size-handle position-large';
                largeInput.checked = true;
            } else {
                size = 'huge breasts';
                sliderHandle.className = 'breast-size-handle position-huge';
                hugeInput.checked = true;
            }
            updateBreastSizeLabels();
            
            // Refresh the tag pills to show the updated breast size
            const characterItem = characterData.find(item => item.name === selectedCharacterName);
            if (characterItem) {
                populateDefaultTagPills(id, characterItem);
            }
            
            return size;
        }
        
        // Add event listeners to radio inputs
        smallInput.addEventListener('change', function() {
            if (this.checked) {
                sliderHandle.className = 'breast-size-handle position-small';
                updateBreastSizeLabels();
                
                // Refresh tag pills
                const characterItem = characterData.find(item => item.name === selectedCharacterName);
                if (characterItem) {
                    populateDefaultTagPills(id, characterItem);
                }
            }
        });
        
        mediumInput.addEventListener('change', function() {
            if (this.checked) {
                sliderHandle.className = 'breast-size-handle position-medium';
                updateBreastSizeLabels();
                
                // Refresh tag pills
                const characterItem = characterData.find(item => item.name === selectedCharacterName);
                if (characterItem) {
                    populateDefaultTagPills(id, characterItem);
                }
            }
        });
        
        largeInput.addEventListener('change', function() {
            if (this.checked) {
                sliderHandle.className = 'breast-size-handle position-large';
                updateBreastSizeLabels();
                
                // Refresh tag pills
                const characterItem = characterData.find(item => item.name === selectedCharacterName);
                if (characterItem) {
                    populateDefaultTagPills(id, characterItem);
                }
            }
        });
        
        hugeInput.addEventListener('change', function() {
            if (this.checked) {
                sliderHandle.className = 'breast-size-handle position-huge';
                updateBreastSizeLabels();
                
                // Refresh tag pills
                const characterItem = characterData.find(item => item.name === selectedCharacterName);
                if (characterItem) {
                    populateDefaultTagPills(id, characterItem);
                }
            }
        });
        
        // Add click event to the track for direct position selection
        sliderTrack.addEventListener('click', function(e) {
            // Calculate click position as percentage of track width
            const rect = this.getBoundingClientRect();
            const clickPosition = ((e.clientX - rect.left) / rect.width) * 100;
            
            // Set size based on where the user clicked
            setBreastSizeByPosition(clickPosition);
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
            
            // Set size based on drag position
            setBreastSizeByPosition(position);
        }
        
        function stopDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', stopDrag);
        }
        
        // Clickable labels to select size
        smallLabel.addEventListener('click', function() {
            smallInput.checked = true;
            smallInput.dispatchEvent(new Event('change'));
        });
        
        mediumLabel.addEventListener('click', function() {
            mediumInput.checked = true;
            mediumInput.dispatchEvent(new Event('change'));
        });
        
        largeLabel.addEventListener('click', function() {
            largeInput.checked = true;
            largeInput.dispatchEvent(new Event('change'));
        });
        
        hugeLabel.addEventListener('click', function() {
            hugeInput.checked = true;
            hugeInput.dispatchEvent(new Event('change'));
        });
        
        // Add breast size container to main container
        ageUpContainer.appendChild(breastSizeContainer);

        // Add event listener to toggle for showing/hiding breast size selector
        ageUpInput.addEventListener('change', function() {
            // Get the current gender
            const selectedGender = document.querySelector(`input[name="gender-${id}"]:checked`)?.value;
            console.log(`Age Up change event for ID ${id}. Checked: ${this.checked}, Gender: ${selectedGender}`);
            
            // Always update breast size visibility when the toggle changes
            updateBreastSizeVisibility(id, selectedGender);
            
            // If this is being enabled and gender is girl, ensure the breast size inputs are initialized
            if (this.checked && selectedGender === 'girl') {
                // Get the current selected breast size, or default to small
                const selectedBreastSize = document.querySelector(`input[name="breast-size-${id}"]:checked`);
                if (!selectedBreastSize) {
                    // If no size is selected, default to small
                    const smallInput = document.getElementById(`breast-size-small-${id}`);
                    if (smallInput) {
                        smallInput.checked = true;
                        smallInput.dispatchEvent(new Event('change'));
                    }
                }
            }
        });
        
        // Add an event listener to the Age Up toggle to refresh default tags
        if (ageUpInput) {
            const existingChangeHandler = ageUpInput.onchange;
            ageUpInput.addEventListener('change', function() {
                // Run the existing handler if available
                if (existingChangeHandler) existingChangeHandler.call(this);
                
                // Find the selected character data
                const charData = characterData.find(item => item.name === selectedCharacterName);
                if (charData) {
                    // Refresh default tags with the new age up setting
                    populateDefaultTagPills(id, charData);
                }
            });
        }
        
        // Add the age up container to age up div
        ageUpDiv.appendChild(ageUpContainer);
        
        // Check initial gender and update breast size visibility
        const selectedGender = document.querySelector(`input[name="gender-${id}"]:checked`)?.value;
        if (selectedGender) {
            // Ensure the initial state of the breast size container is correct
            console.log(`Initial check for ID ${id}. Gender: ${selectedGender}, Age Up Input: ${!!ageUpInput}`);
            
            // Force update of breast size visibility based on current toggle state
            if (ageUpInput) {
                updateBreastSizeVisibility(id, selectedGender);
                
                // If this is a girl character and Age Up is already checked, ensure breast size is visible
                if (selectedGender === 'girl' && ageUpInput.checked) {
                    const breastSizeContainer = document.getElementById(`breast-size-container-${id}`);
                    if (breastSizeContainer) {
                        breastSizeContainer.style.display = 'block';
                        
                        // Ensure a breast size is selected
                        const selectedBreastSize = document.querySelector(`input[name="breast-size-${id}"]:checked`);
                        if (!selectedBreastSize) {
                            const smallInput = document.getElementById(`breast-size-small-${id}`);
                            if (smallInput) {
                                smallInput.checked = true;
                                smallInput.dispatchEvent(new Event('change'));
                            }
                        }
                    }
                }
            }
        }
    }
}

/**
 * Resets the character dropdown to its default state
 * 
 * @param {number} id - Character block ID
 */
export function resetCharacterDropdown(id) {
    const charList = document.getElementById(`char-list-${id}`);
    const genderDiv = document.getElementById('gender-div-' + id);
    const ageUpDiv = document.getElementById('age-up-div-' + id);
    
    if (charList) {
        const charDisplay = charList.previousElementSibling;
        charDisplay.textContent = "-- Select Character --";
    }
    
    if (genderDiv) {
        genderDiv.innerHTML = "";
    }
    
    if (ageUpDiv) {
        ageUpDiv.innerHTML = "";
    }
}

/**
 * Populates default tag pills for a character
 * 
 * @param {number} id - The character block ID
 * @param {Object} characterData - The character data object
 */
export function populateDefaultTagPills(id, characterData) {
    // Get the pill container
    const pillContainer = document.querySelector(`#custom-tag-div-${id} .custom-pill-container`);
    if (!pillContainer) return;
    
    // Clear any existing pills
    pillContainer.innerHTML = '';
    
    // Get the currently selected gender
    const selectedGender = document.querySelector(`input[name="gender-${id}"]:checked`)?.value || characterData.defaultGender || 'girl';
    
    // Add the gender count tag (1girl, 1boy, 1other)
    const genderTag = `1${selectedGender}`;
    createTagPill(genderTag, pillContainer, null, true);
    
    // No longer adding character name as a tag to avoid duplication
    
    // Add each comma-separated term in mainTags
    const mainTags = characterData.mainTags.split(',').map(tag => tag.trim()).filter(tag => tag);
    mainTags.forEach(tag => {
        createTagPill(tag, pillContainer, null, true);
    });
    
    // Check if Age Up is enabled and add appropriate tag
    const ageUpInput = document.getElementById(`age-up-input-${id}`);
    if (ageUpInput && ageUpInput.checked) {
        // Always add the generic "aged up" tag first
        createTagPill('aged up', pillContainer, null, true);
        
        // Then add the gender-specific tag
        if (selectedGender === 'girl') {
            createTagPill('mature female', pillContainer, null, true);
        } else if (selectedGender === 'boy') {
            createTagPill('mature male', pillContainer, null, true);
        }
        
        // If gender is girl and Age Up is enabled, check for breast size
        if (selectedGender === 'girl') {
            // Get the actively checked breast size radio button
            const selectedBreastSize = document.querySelector(`input[name="breast-size-${id}"]:checked`);
            if (selectedBreastSize) {
                // Use the value directly from the checked radio button
                createTagPill(selectedBreastSize.value, pillContainer, null, true);
            }
        }
    }
    
    // Check for enhancer tags
    const enhancerDisplay = document.querySelector(`#enhancer-div-${id} .selected-display`);
    if (enhancerDisplay && enhancerDisplay.textContent !== '-- None --') {
        // Get enhancer text from data attribute or displayed text
        const enhancerText = enhancerDisplay.dataset.originalEnhancer || enhancerDisplay.textContent;
        
        // Parse enhancer text and add non "--term" tags
        const enhancerTags = enhancerText.split(',').map(tag => tag.trim()).filter(tag => tag && !tag.startsWith('--'));
        enhancerTags.forEach(tag => {
            createTagPill(tag, pillContainer, null, true);
        });
    }
    
    // Verify we've actually added content before attempting layout update
    if (pillContainer.children.length === 0) return;
    
    // Force a DOM update to ensure tags are immediately visible
    // This fixes the bug where tags are not visible until a custom tag is added
    const originalDisplay = window.getComputedStyle(pillContainer).display;
    pillContainer.style.display = 'none';
    setTimeout(() => {
        // Restore original display or use flex as fallback (default for .custom-pill-container)
        pillContainer.style.display = originalDisplay || 'flex';
    }, 0);
} 