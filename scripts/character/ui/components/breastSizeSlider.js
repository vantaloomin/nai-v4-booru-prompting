/**
 * Breast Size Slider Module
 * 
 * Manages the breast size slider control.
 */

import { setupSliderEvents } from '../utils/sliderUtils.js';
import { updateElementVisibility } from '../utils/domUtils.js';
import { populateDefaultTagPills } from './tagPills.js';

/**
 * Updates the visibility of the breast size container based on gender
 * 
 * @param {number} id - Character block ID
 * @param {string} gender - Selected gender ('girl', 'boy', 'other')
 */
export function updateBreastSizeVisibility(id, gender) {
    // First, make the parent div visible
    const breastSizeDiv = document.getElementById(`breast-size-div-${id}`);
    const breastSizeContainer = document.getElementById(`breast-size-container-${id}`);
    
    const isVisible = (gender === 'girl');
    
    // Update the visibility of both the parent div and the container
    if (breastSizeDiv) {
        console.log(`Updating breast size div visibility for ID ${id}. Gender: ${gender}, Visible: ${isVisible}`);
        updateElementVisibility(breastSizeDiv, isVisible);
    }
    
    if (breastSizeContainer) {
        console.log(`Updating breast size container visibility for ID ${id}. Gender: ${gender}, Visible: ${isVisible}`);
        updateElementVisibility(breastSizeContainer, isVisible);
        
        // Ensure a breast size is selected if none is currently selected
        if (isVisible) {
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
    } else if (isVisible) {
        console.warn(`Missing breast size container for visibility update. ID: ${id}, breastSizeContainer: ${!!breastSizeContainer}`);
    }
}

/**
 * Creates and initializes the breast size slider component
 * 
 * @param {HTMLElement} breastSizeContainer - The container element for the breast size slider
 * @param {number} id - Character block ID
 * @param {string} selectedCharacterName - Name of the selected character
 * @returns {Object} - Object with references to created elements
 */
export function createBreastSizeSlider(breastSizeContainer, id, selectedCharacterName) {
    // Create breast size label
    const breastSizeLabel = document.createElement('label');
    breastSizeLabel.textContent = 'Breast Size:';
    breastSizeContainer.appendChild(breastSizeLabel);
    
    // Create size labels
    const sizes = ['small', 'medium', 'large', 'huge'];
    const sizeLabels = {};
    
    // Create labels container
    const breastSizeLabelContainer = document.createElement('div');
    breastSizeLabelContainer.className = 'breast-size-label-container';
    
    // Create each size label
    sizes.forEach(size => {
        const label = document.createElement('span');
        label.className = `breast-size-label ${size}-label ${size === 'small' ? 'active' : ''}`;
        label.textContent = size.charAt(0).toUpperCase() + size.slice(1);
        breastSizeLabelContainer.appendChild(label);
        sizeLabels[size] = label;
    });
    
    breastSizeContainer.appendChild(breastSizeLabelContainer);
    
    // Create slider container
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'breast-size-slider-container';
    
    const sliderTrack = document.createElement('div');
    sliderTrack.className = 'breast-size-track';
    
    const sliderHandle = document.createElement('div');
    sliderHandle.className = 'breast-size-handle position-small';
    
    // Create hidden radio inputs for the size options
    const sizeInputs = {};
    sizes.forEach(size => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `breast-size-${id}`;
        input.id = `breast-size-${size}-${id}`;
        input.value = `${size} breasts`;
        input.className = 'breast-size-radio';
        input.checked = (size === 'small'); // Default to small
        
        // Add event listeners to refresh default tags when size changes
        input.addEventListener('change', function() {
            if (this.checked) {
                // Update handle position
                sliderHandle.className = `breast-size-handle position-${size}`;
                
                // Update label active states
                Object.values(sizeLabels).forEach(label => label.classList.remove('active'));
                sizeLabels[size].classList.add('active');
                
                // Refresh default tags
                const characterItem = characterData.find(item => item.name === selectedCharacterName);
                if (characterItem) {
                    populateDefaultTagPills(id, characterItem);
                }
            }
        });
        
        sliderContainer.appendChild(input);
        sizeInputs[size] = input;
    });
    
    // Add track and handle to slider container
    sliderTrack.appendChild(sliderHandle);
    sliderContainer.appendChild(sliderTrack);
    breastSizeContainer.appendChild(sliderContainer);
    
    // Function to set breast size based on position
    function setBreastSizeByPosition(position) {
        let size;
        if (position <= 25) {
            size = 'small';
            sizeInputs.small.checked = true;
        } else if (position <= 50) {
            size = 'medium';
            sizeInputs.medium.checked = true;
        } else if (position <= 75) {
            size = 'large';
            sizeInputs.large.checked = true;
        } else {
            size = 'huge';
            sizeInputs.huge.checked = true;
        }
        
        // Update handle position
        sliderHandle.className = `breast-size-handle position-${size}`;
        
        // Update label active states
        Object.values(sizeLabels).forEach(label => label.classList.remove('active'));
        sizeLabels[size].classList.add('active');
        
        // Trigger change event
        sizeInputs[size].dispatchEvent(new Event('change'));
        
        return `${size} breasts`;
    }
    
    // Set up slider events
    setupSliderEvents(sliderTrack, sliderHandle, setBreastSizeByPosition);
    
    // Add click events to labels
    Object.entries(sizeLabels).forEach(([size, label]) => {
        label.addEventListener('click', () => {
            sizeInputs[size].checked = true;
            sizeInputs[size].dispatchEvent(new Event('change'));
        });
    });
    
    return {
        container: breastSizeContainer,
        handle: sliderHandle,
        inputs: sizeInputs,
        labels: sizeLabels,
        setBreastSizeByPosition
    };
}

/**
 * Initializes the breast size slider for a character block
 *
 * @param {number} id - Character block ID
 * @param {string} selectedCharacterName - Name of the selected character
 */
export function initializeBreastSizeSlider(id, selectedCharacterName) {
    const breastSizeDiv = document.getElementById('breast-size-div-' + id);
    if (!breastSizeDiv) {
        console.warn(`Breast size div not found for ID ${id}`);
        return;
    }
    
    breastSizeDiv.innerHTML = "";
    
    const selectedData = characterData.find(item => item.name === selectedCharacterName);
    if (selectedData) {
        // Create main container for the breast size slider
        const breastSizeContainer = document.createElement('div');
        breastSizeContainer.className = 'breast-size-container';
        breastSizeContainer.id = 'breast-size-container-' + id;
        breastSizeDiv.appendChild(breastSizeContainer);
        
        // Create the breast size slider component
        createBreastSizeSlider(breastSizeContainer, id, selectedCharacterName);
        
        // Check initial gender and update visibility
        const selectedGender = document.querySelector(`input[name="gender-${id}"]:checked`)?.value;
        if (selectedGender) {
            console.log(`Initializing breast size slider for ID ${id} with gender ${selectedGender}`);
            // Update the breast size visibility based on gender
            updateBreastSizeVisibility(id, selectedGender);
        } else {
            console.warn(`No gender selected for ID ${id}`);
            // Default hide since no gender is selected
            updateElementVisibility(breastSizeDiv, false);
            updateElementVisibility(breastSizeContainer, false);
        }
    } else {
        console.warn(`Character data not found for ${selectedCharacterName}`);
        // Hide the breast size div if no character data is found
        updateElementVisibility(breastSizeDiv, false);
    }
} 