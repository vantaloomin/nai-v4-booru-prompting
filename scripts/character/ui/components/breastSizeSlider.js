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
                // If no size is selected, default to OFF
                const offInput = document.getElementById(`breast-size-off-${id}`);
                if (offInput) {
                    offInput.checked = true;
                    offInput.dispatchEvent(new Event('change'));
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
    
    // Create size labels with Off option
    const sizes = ['off', 'small', 'medium', 'large', 'huge'];
    const sizeLabels = {};
    
    // Create labels container
    const breastSizeLabelContainer = document.createElement('div');
    breastSizeLabelContainer.className = 'breast-size-label-container';
    
    // Create each size label
    sizes.forEach(size => {
        const label = document.createElement('span');
        label.className = `breast-size-label ${size}-label ${size === 'off' ? 'active' : ''}`;
        label.textContent = size === 'off' ? 'Off' : size.charAt(0).toUpperCase() + size.slice(1);
        breastSizeLabelContainer.appendChild(label);
        sizeLabels[size] = label;
    });
    
    breastSizeContainer.appendChild(breastSizeLabelContainer);
    
    // Create slider container
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'breast-size-slider-container';
    
    // Create the track element that will contain the sections
    const sliderTrack = document.createElement('div');
    sliderTrack.className = 'breast-size-track';
    
    // Create a track wrapper to avoid overflow issues
    const trackWrapper = document.createElement('div');
    trackWrapper.className = 'breast-size-track-wrapper';
    
    // Add the "off" section to the slider with a distinct border
    const offSection = document.createElement('div');
    offSection.className = 'breast-size-off-section';
    
    // Add gradient section for the sizes
    const gradientSection = document.createElement('div');
    gradientSection.className = 'breast-size-gradient-section';
    
    // Add sections to track wrapper
    trackWrapper.appendChild(offSection);
    trackWrapper.appendChild(gradientSection);
    
    // Add track wrapper to track
    sliderTrack.appendChild(trackWrapper);
    
    const sliderHandle = document.createElement('div');
    sliderHandle.className = 'breast-size-handle position-off';
    
    // Create hidden radio inputs for the size options
    const sizeInputs = {};
    sizes.forEach(size => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `breast-size-${id}`;
        input.id = `breast-size-${size}-${id}`;
        input.value = size === 'off' ? 'no breasts' : `${size} breasts`;
        input.className = 'breast-size-radio';
        input.checked = (size === 'off'); // Default to OFF instead of small
        
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
    
    // Create a wider clickable area around the slider
    const sliderHitArea = document.createElement('div');
    sliderHitArea.className = 'breast-size-hit-area';
    sliderContainer.appendChild(sliderHitArea);
    
    // Function to set breast size based on position
    function setBreastSizeByPosition(position) {
        let size;
        // Adjusted boundaries to match the new handle positions:
        // off: 0-15%, small: 15-40%, medium: 40-65%, large: 65-85%, huge: 85-100%
        if (position <= 15) {
            size = 'off';
            sizeInputs.off.checked = true;
        } else if (position <= 40) {
            size = 'small';
            sizeInputs.small.checked = true;
        } else if (position <= 65) {
            size = 'medium';
            sizeInputs.medium.checked = true;
        } else if (position <= 85) {
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
        
        return size === 'off' ? 'no breasts' : `${size} breasts`;
    }
    
    // Set up enhanced slider drag functionality
    // We're implementing custom drag handlers for better control and reliability
    let isDragging = false;
    
    // Handle direct clicks on the track and hit area
    sliderTrack.addEventListener('mousedown', handleTrackClick);
    sliderHitArea.addEventListener('mousedown', handleTrackClick);
    
    function handleTrackClick(e) {
        const rect = sliderTrack.getBoundingClientRect();
        const position = ((e.clientX - rect.left) / rect.width) * 100;
        setBreastSizeByPosition(position);
        
        // Initiate dragging immediately on track click
        isDragging = true;
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDrag);
    }
    
    // Handle drag start on the handle
    sliderHandle.addEventListener('mousedown', function(e) {
        e.preventDefault(); // Prevent text selection during drag
        isDragging = true;
        
        // Add global mouse events
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDrag);
    });
    
    // Handle mouse drag
    function handleDrag(e) {
        if (isDragging) {
            e.preventDefault(); // Prevent selection and default behaviors
            const rect = sliderTrack.getBoundingClientRect();
            let position = ((e.clientX - rect.left) / rect.width) * 100;
            
            // Constrain to track bounds
            position = Math.max(0, Math.min(100, position));
            
            setBreastSizeByPosition(position);
        }
    }
    
    // Handle drag end
    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', stopDrag);
    }
    
    // Add touch support
    sliderTrack.addEventListener('touchstart', handleTouchStart);
    sliderHitArea.addEventListener('touchstart', handleTouchStart);
    sliderHandle.addEventListener('touchstart', handleTouchStart);
    
    function handleTouchStart(e) {
        e.preventDefault(); // Prevent scrolling during touch
        
        const touch = e.touches[0];
        const rect = sliderTrack.getBoundingClientRect();
        const position = ((touch.clientX - rect.left) / rect.width) * 100;
        
        setBreastSizeByPosition(position);
        
        isDragging = true;
        document.addEventListener('touchmove', handleTouchDrag);
        document.addEventListener('touchend', stopTouchDrag);
    }
    
    function handleTouchDrag(e) {
        if (isDragging) {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = sliderTrack.getBoundingClientRect();
            let position = ((touch.clientX - rect.left) / rect.width) * 100;
            
            // Constrain to track bounds
            position = Math.max(0, Math.min(100, position));
            
            setBreastSizeByPosition(position);
        }
    }
    
    function stopTouchDrag() {
        isDragging = false;
        document.removeEventListener('touchmove', handleTouchDrag);
        document.removeEventListener('touchend', stopTouchDrag);
    }

    // Add click events to labels
    Object.entries(sizeLabels).forEach(([size, label]) => {
        label.addEventListener('click', () => {
            sizeInputs[size].checked = true;
            sizeInputs[size].dispatchEvent(new Event('change'));
        });
    });
    
    // Return the slider component interface
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