/**
 * Tag Pills Module
 * 
 * Manages tag pill creation and default tag population for character blocks.
 */

import { createTagPill } from '../../../customCharacter/utils/tagUtils.js';
import logger from '../../../utils/logger-init.js';

/**
 * Populates default tag pills for a character
 * 
 * @param {number} id - The character block ID
 * @param {Object} characterData - The character data object
 */
export function populateDefaultTagPills(id, characterData) {
    // Get the pill container
    const pillContainer = document.querySelector(`#custom-tag-div-${id} .custom-pill-container`);
    if (!pillContainer) {
        logger.error(`Could not find pill container for ID ${id}`);
        return;
    }
    
    // Save custom (user-added) tags before clearing
    const customTags = [];
    const customPills = pillContainer.querySelectorAll('.custom-tag-pill:not(.default-tag)');
    customPills.forEach(pill => {
        if (pill.dataset.originalTag) {
            customTags.push(pill.dataset.originalTag);
        }
    });
    
    // Clear all existing pills
    pillContainer.innerHTML = '';
    
    // Get the currently selected gender
    const genderRadios = document.querySelectorAll(`input[name="gender-${id}"]`);
    let selectedGender = characterData.defaultGender || 'girl';
    genderRadios.forEach(radio => {
        if (radio.checked) {
            selectedGender = radio.value;
        }
    });
    
    logger.debug(`Populating tags for ID ${id}, character ${characterData.name}, gender ${selectedGender}`);
    
    // Add the gender count tag (1girl, 1boy, 1other)
    const genderTag = `1${selectedGender}`;
    createTagPill(genderTag, pillContainer, null, true);
    
    // Add genderswap tags if the selected gender is different from default
    const defaultGender = characterData.defaultGender || 'girl';
    if (selectedGender !== defaultGender) {
        // Add generic genderswap tag
        createTagPill('genderswap', pillContainer, null, true);
        
        // Add specific directional genderswap tag
        if (defaultGender === 'boy' && selectedGender === 'girl') {
            createTagPill('genderswap mtf', pillContainer, null, true);
        } else if (defaultGender === 'girl' && selectedGender === 'boy') {
            createTagPill('genderswap ftm', pillContainer, null, true);
        } else if (defaultGender === 'boy' && selectedGender === 'other') {
            createTagPill('genderswap mto', pillContainer, null, true);
        } else if (defaultGender === 'girl' && selectedGender === 'other') {
            createTagPill('genderswap fto', pillContainer, null, true);
        } else if (defaultGender === 'other' && selectedGender === 'boy') {
            createTagPill('genderswap otm', pillContainer, null, true);
        } else if (defaultGender === 'other' && selectedGender === 'girl') {
            createTagPill('genderswap otf', pillContainer, null, true);
        }
    }
    
    // Check if Age Up is enabled and add appropriate tag - MOVED UP before mainTags
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
    }
    
    // Always add breast size tag for female characters, regardless of Age Up setting
    if (selectedGender === 'girl') {
        // Get the actively checked breast size radio button
        const selectedBreastSize = document.querySelector(`input[name="breast-size-${id}"]:checked`);
        if (selectedBreastSize && selectedBreastSize.value !== 'no breasts') {
            // Only add the breast size tag if it's not "OFF" (no breasts)
            createTagPill(selectedBreastSize.value, pillContainer, null, true);
        }
    }
    
    // Add each comma-separated term in mainTags AFTER Age Up and Breast Size
    const mainTags = characterData.mainTags ? characterData.mainTags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
    mainTags.forEach(tag => {
        createTagPill(tag, pillContainer, null, true);
    });
    
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
    
    // Collect all default tags that were just added
    const defaultTagsAdded = Array.from(pillContainer.querySelectorAll('.custom-tag-pill.default-tag'))
        .map(pill => pill.dataset.originalTag);
    
    // Re-add custom (user-added) tags, avoiding duplicates with default tags
    customTags.forEach(tagText => {
        if (!defaultTagsAdded.includes(tagText)) {
            createTagPill(tagText, pillContainer, null, false);
        }
    });
    
    // Verify we've actually added content before attempting layout update
    if (pillContainer.children.length === 0) {
        logger.warn(`No pills were added for character ${characterData.name} (ID: ${id})`);
        return;
    }
    
    // Force a DOM update to ensure tags are immediately visible
    // This fixes the bug where tags are not visible until a custom tag is added
    pillContainer.style.display = 'none';
    requestAnimationFrame(() => {
        pillContainer.style.display = 'flex';
    });
} 