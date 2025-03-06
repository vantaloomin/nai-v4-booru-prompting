/**
 * Gender Toggle Module
 * 
 * Manages the gender toggle functionality.
 */

import { setupSliderEvents } from '../utils/sliderUtils.js';
import { createElement } from '../utils/domUtils.js';
import { populateDefaultTagPills } from './tagPills.js';
import { updateBreastSizeVisibility } from './breastSizeSlider.js';

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
        const genderTitle = createElement('label', { className: 'gender-title' }, 'Character Gender:', genderDiv);
        
        // Create container for all gender selection elements
        const genderContainer = createElement('div', { className: 'gender-trio-container' }, '', genderDiv);
        
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
            const input = createElement('input', {
                type: 'radio',
                name: `gender-${id}`,
                value: gender,
                className: 'gender-radio',
                checked: isDefault,
                id: `gender-${id}-${gender}`
            }, '', genderContainer);
            
            // Add event listener to refresh default tags when gender changes
            input.addEventListener('change', function() {
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
        });
        
        // Verify that all radio buttons were created before proceeding
        const radioCheck = genderContainer.querySelectorAll('.gender-radio');
        if (radioCheck.length < 3) {
            console.error(`Failed to create all gender radio buttons for ID ${id}. Found: ${radioCheck.length}`);
            return; // Exit early to prevent errors in slider setup
        }
        
        // Create the slider component
        const sliderContainer = createElement('div', { className: 'gender-trio-slider-container' }, '', genderContainer);
        
        const sliderTrack = createElement('div', { className: 'gender-trio-track' }, '', sliderContainer);
        
        const sliderHandle = createElement('div', { className: `gender-trio-handle position-${defaultGender}` }, '', sliderTrack);
        
        // Create the labels container that will appear below the slider
        const labelsContainer = createElement('div', { className: 'gender-labels-container' }, '', genderContainer);
        
        // Create labels in the order: Boy / Other / Girl
        genders.forEach(gender => {
            const isDefault = gender === defaultGender;
            
            // Label for the radio input
            const label = createElement('label', {
                htmlFor: `gender-${id}-${gender}`,
                className: `gender-label ${gender}-label ${isDefault ? 'active' : ''}`
            }, gender.charAt(0).toUpperCase() + gender.slice(1), labelsContainer);
            
            // If this is the default gender, add an indicator
            if (isDefault) {
                const defaultIndicator = createElement('span', { className: 'default-indicator' }, '(default)', label);
            }
            
            // Add click event to the label
            label.addEventListener('click', () => {
                const radios = genderContainer.querySelectorAll('.gender-radio');
                const labels = labelsContainer.querySelectorAll('.gender-label');
                
                // Update slider position based on the clicked label
                sliderHandle.className = `gender-trio-handle position-${gender}`;
                
                // Find the corresponding radio button index
                const index = genders.indexOf(gender);
                if (index >= 0 && index < radios.length) {
                    radios[index].checked = true;
                    
                    // Update active state for all labels
                    labels.forEach(l => l.classList.remove('active'));
                    label.classList.add('active');
                    
                    // Trigger change event on the selected radio
                    radios[index].dispatchEvent(new Event('change'));
                }
            });
        });
        
        // Helper function to set gender based on slider position
        function setGenderByPosition(position) {
            // Query from genderContainer directly
            const radios = genderContainer.querySelectorAll('.gender-radio');
            const labels = labelsContainer.querySelectorAll('.gender-label');
            
            // Check if all radio buttons exist before proceeding
            if (radios.length < 3) {
                console.error(`Expected 3 gender radio buttons but found ${radios.length} for ID ${id}`);
                return; // Exit function to prevent error
            }
            
            // Remove all position classes
            sliderHandle.classList.remove('position-boy', 'position-girl', 'position-other');
            
            // Set position based on the clicked area
            let selectedIndex = 0;
            if (position < 33.3) {
                sliderHandle.classList.add('position-boy');
                radios[0].checked = true;
                selectedIndex = 0;
            } else if (position < 66.6) {
                sliderHandle.classList.add('position-other');
                radios[1].checked = true;
                selectedIndex = 1;
            } else {
                sliderHandle.classList.add('position-girl');
                radios[2].checked = true;
                selectedIndex = 2;
            }
            
            // Update labels
            if (labels.length > 0) {
                labels.forEach(l => l.classList.remove('active'));
                if (selectedIndex < labels.length) {
                    labels[selectedIndex].classList.add('active');
                }
            }
            
            // Trigger change event
            radios[selectedIndex].dispatchEvent(new Event('change'));
        }
        
        // Set up slider events
        setupSliderEvents(sliderTrack, sliderHandle, setGenderByPosition);
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