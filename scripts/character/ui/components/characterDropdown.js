/**
 * Character Dropdown Module
 * 
 * Manages the character dropdown functionality.
 */

import { sortAlphabetically } from '../../utils/sorter.js';
import { cleanDisplayName } from '../../utils/nameFormatter.js';
import { updateGenderToggle } from './genderToggle.js';
import { updateAgeUpToggle } from './ageUpToggle.js';
import { updateEnhancerDropdown } from './enhancerDropdown.js';
import { populateDefaultTagPills } from './tagPills.js';

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