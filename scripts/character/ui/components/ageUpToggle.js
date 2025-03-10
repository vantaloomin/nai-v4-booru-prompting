/**
 * Age Up Toggle Module
 * 
 * Manages the age up toggle functionality.
 */

import { createElement, updateElementVisibility } from '../utils/domUtils.js';
import { populateDefaultTagPills } from './tagPills.js';
import logger from '../../../utils/logger-init.js';

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
            logger.debug(`Age Up toggle clicked for ID ${id}. New state: ${ageUpInput.checked}`);
        });
        
        // Add event listener to the Age Up toggle to refresh default tags
        ageUpInput.addEventListener('change', function() {
            // Find the selected character data
            const charData = characterData.find(item => item.name === selectedCharacterName);
            if (charData) {
                logger.debug(`Age Up change event for ID ${id}. Checked: ${this.checked}`);
                
                // Refresh default tags with the new age up setting
                populateDefaultTagPills(id, charData);
            }
        });
    }
} 