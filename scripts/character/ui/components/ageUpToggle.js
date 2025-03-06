/**
 * Age Up Toggle Module
 * 
 * Manages the age up toggle functionality and its associated breast size controls.
 */

import { createElement, updateElementVisibility } from '../utils/domUtils.js';
import { createBreastSizeSlider, updateBreastSizeVisibility } from './breastSizeSlider.js';
import { populateDefaultTagPills } from './tagPills.js';

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
        const ageUpContainer = createElement('div', { className: 'age-up-container' }, '', ageUpDiv);
        
        // Create label
        const ageUpLabel = createElement('label', {}, 'Age Up:', ageUpContainer);
        
        // Create toggle switch container
        const toggleContainer = createElement('div', { className: 'toggle-switch-container' }, '', ageUpContainer);
        
        // Create toggle switch
        const toggleSwitch = createElement('div', { className: 'toggle-switch' }, '', toggleContainer);
        
        // Create hidden checkbox input
        const ageUpInput = createElement('input', {
            type: 'checkbox',
            name: 'age-up-' + id,
            id: 'age-up-input-' + id,
            className: 'age-up-checkbox'
        }, '', toggleSwitch);
        
        // Create toggle slider
        const toggleSlider = createElement('span', { className: 'toggle-slider' }, '', toggleSwitch);
        
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
        
        // Create breast size container (initially hidden)
        const breastSizeContainer = createElement('div', {
            className: 'breast-size-container',
            id: 'breast-size-container-' + id,
            style: 'display: none;'
        }, '', ageUpContainer);
        
        // Create the breast size slider component
        createBreastSizeSlider(breastSizeContainer, id, selectedCharacterName);
        
        // Add event listener to the Age Up toggle to refresh default tags
        ageUpInput.addEventListener('change', function() {
            // Find the selected character data
            const charData = characterData.find(item => item.name === selectedCharacterName);
            if (charData) {
                // Get the current gender
                const selectedGender = document.querySelector(`input[name="gender-${id}"]:checked`)?.value;
                console.log(`Age Up change event for ID ${id}. Checked: ${this.checked}, Gender: ${selectedGender}`);
                
                // Always update breast size visibility when the toggle changes
                updateBreastSizeVisibility(id, selectedGender);
                
                // Refresh default tags with the new age up setting
                populateDefaultTagPills(id, charData);
                
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
            }
        });
        
        // Check initial gender and update breast size visibility
        const selectedGender = document.querySelector(`input[name="gender-${id}"]:checked`)?.value;
        if (selectedGender) {
            // Ensure the initial state of the breast size container is correct
            console.log(`Initial check for ID ${id}. Gender: ${selectedGender}, Age Up Input: ${!!ageUpInput}`);
            
            // Force update of breast size visibility based on current toggle state
            updateBreastSizeVisibility(id, selectedGender);
        }
    }
} 