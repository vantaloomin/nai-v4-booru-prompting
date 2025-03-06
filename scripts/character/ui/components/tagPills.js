/**
 * Tag Pills Module
 * 
 * Manages tag pill creation and default tag population for character blocks.
 */

import { createTagPill } from '../../../customCharacter/utils/tagUtils.js';

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