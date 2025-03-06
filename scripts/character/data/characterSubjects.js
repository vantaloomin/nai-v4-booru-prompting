/**
 * Character Subjects Module
 * 
 * Retrieves and processes character subjects for prompt generation.
 */

import { processGenderedTags } from '../utils/tagProcessor.js';
import { cleanDisplayName } from '../utils/nameFormatter.js';

// Initialize action functions with fallbacks
let getActionAssignments = () => ({});
let detectGenderFromTag = () => null;
let formatTag = tag => tag;

// Set up action function references if they exist in the global scope
if (typeof window.getActionAssignments === 'function') {
    getActionAssignments = window.getActionAssignments;
}

if (typeof window.detectGenderFromTag === 'function') {
    detectGenderFromTag = window.detectGenderFromTag;
}

if (typeof window.formatTag === 'function') {
    formatTag = window.formatTag;
}

/**
 * Gets character subjects and metadata for prompt generation
 * 
 * @return {Object} - Object containing subjects array and subjectCountObj
 */
export function getCharacterSubjects() {
    let subjects = [];
    let subjectCountObj = { girl: 0, boy: 0, other: 0 };
    const maxCharacters = 4; // This should match the value in characterState.js

    // Get action assignments mapping - safely handle case where getActionAssignments might not be available yet
    const actionAssignments = typeof getActionAssignments === 'function' 
        ? getActionAssignments() 
        : (window.getActionAssignments ? window.getActionAssignments() : {});

    // Process standard character blocks
    for (let i = 1; i <= maxCharacters; i++) {
        const block = document.getElementById('character-' + i);
        if (block) {
            // Find all custom-dropdowns in this block
            const dropdowns = block.querySelectorAll('.custom-dropdown');
            // The character dropdown should be the third one
            const charDisplay = dropdowns[2]?.querySelector('.selected-display');

            if (!charDisplay || charDisplay.textContent === "-- Select Character --") continue;

            const selectedName = charDisplay.textContent;
            const selectedData = characterData.find(item => cleanDisplayName(item.name) === selectedName);

            if (!selectedData) continue;

            let finalTags = selectedData.mainTags;

            let gender = "";
            if (selectedData.genderswapAvailable) {
                // Get the selected gender from the radio buttons
                const selectedGender = document.querySelector(`input[name="gender-${i}"]:checked`)?.value;
                const defaultGender = selectedData.defaultGender || "girl";
                
                // If selected gender is different from default, we need to add genderswap tags
                if (selectedGender && selectedGender !== defaultGender) {
                    gender = selectedGender;
                    
                    // Process gendered tags before adding genderswap tags
                    finalTags = processGenderedTags(finalTags, defaultGender, selectedGender);
                    
                    // Create an array of tags
                    let tagsArray = finalTags.split(",").map(t => t.trim()).filter(t => t !== "");
                    
                    // Add general genderswap tag
                    if (tagsArray.length >= 2) {
                        tagsArray.splice(tagsArray.length - 1, 0, "genderswap");
                    } else {
                        tagsArray.push("genderswap");
                    }
                    
                    // Add directional genderswap tag based on the transformation
                    let directionTag = "";
                    if (defaultGender === "boy" && selectedGender === "girl") {
                        directionTag = "genderswap mtf"; // male to female
                    } else if (defaultGender === "girl" && selectedGender === "boy") {
                        directionTag = "genderswap ftm"; // female to male
                    } else if (defaultGender === "other" && selectedGender === "boy") {
                        directionTag = "genderswap otm"; // other to male
                    } else if (defaultGender === "other" && selectedGender === "girl") {
                        directionTag = "genderswap otf"; // other to female
                    } else if (defaultGender === "boy" && selectedGender === "other") {
                        directionTag = "genderswap mto"; // male to other
                    } else if (defaultGender === "girl" && selectedGender === "other") {
                        directionTag = "genderswap fto"; // female to other
                    }
                    
                    // Add the directional tag
                    if (directionTag) {
                        tagsArray.splice(tagsArray.length - 1, 0, directionTag);
                    }
                    
                    finalTags = tagsArray.join(", ");
                } else {
                    gender = defaultGender;
                }
            } else {
                gender = selectedData.defaultGender || "girl";
            }

            // Process enhancer selection
            const enhancerDisplay = block.querySelector('#enhancer-div-' + i + ' .selected-display');
            
            // Check for Age Up toggle
            const ageUpInput = document.getElementById(`age-up-input-${i}`);
            if (ageUpInput && ageUpInput.checked) {
                let tagsArray = finalTags.split(",").map(t => t.trim()).filter(t => t !== "");
                
                // Add "aged up" tag right after the gender tag (at index 0)
                tagsArray.splice(1, 0, "aged up");
                
                // Add gender-specific tag based on selected gender
                const selectedGender = document.querySelector(`input[name="gender-${i}"]:checked`)?.value;
                if (selectedGender === 'boy') {
                    tagsArray.splice(2, 0, "mature male");
                } else if (selectedGender === 'girl') {
                    // For female, add the selected breast size tag
                    const breastSizeInput = document.querySelector(`input[name="breast-size-${i}"]:checked`);
                    if (breastSizeInput) {
                        const breastSize = breastSizeInput.value;
                        tagsArray.splice(2, 0, breastSize);
                    }
                }
                
                finalTags = tagsArray.join(", ");
            }
            
            if (enhancerDisplay && enhancerDisplay.textContent !== "-- None --") {
                // Get the selected gender from the radio buttons if there was a gender swap
                const selectedGender = document.querySelector(`input[name="gender-${i}"]:checked`)?.value;
                const defaultGender = selectedData.defaultGender || "girl";
                const wasGenderSwapped = selectedGender && selectedGender !== defaultGender;
                
                let tagsArray = finalTags.split(",").map(t => t.trim()).filter(t => t !== "");
                
                // Use the original enhancer text (with -- tags) from the data attribute if available
                // Otherwise fall back to the displayed text
                let enhancerText = enhancerDisplay.dataset.originalEnhancer || enhancerDisplay.textContent;
                
                // Process gendered tags in the enhancer if there was a gender swap
                if (wasGenderSwapped) {
                    enhancerText = processGenderedTags(enhancerText, defaultGender, selectedGender);
                }
                
                if (tagsArray.length >= 2) {
                    tagsArray.splice(tagsArray.length - 1, 0, enhancerText);
                } else {
                    tagsArray.push(enhancerText);
                }
                finalTags = tagsArray.join(", ");
            }

            // Append any action tags assigned to this character block
            if (actionAssignments[selectedName]) {
                // Get the selected gender from the radio buttons if there was a gender swap
                const selectedGender = document.querySelector(`input[name="gender-${i}"]:checked`)?.value;
                const defaultGender = selectedData.defaultGender || "girl";
                const wasGenderSwapped = selectedGender && selectedGender !== defaultGender;
                
                // Process each action tag for gender-specific terms if needed
                let actionTags = actionAssignments[selectedName];
                if (wasGenderSwapped) {
                    actionTags = actionTags.map(tag => 
                        processGenderedTags(tag, defaultGender, selectedGender)
                    );
                }
                
                finalTags += ", " + actionTags.join(", ");
            }

            // Get custom tags from the standard character card
            const customTagPillContainer = block.querySelector('#custom-tag-div-' + i + ' .custom-pill-container');
            if (customTagPillContainer) {
                const customTags = Array.from(customTagPillContainer.querySelectorAll('.custom-tag-pill'))
                    .map(pill => pill.dataset.originalTag || pill.textContent.replace('×', '').trim());
                
                if (customTags.length > 0) {
                    finalTags += ", " + customTags.join(", ");
                }
            }

            subjectCountObj[gender] = (subjectCountObj[gender] || 0) + 1;
            subjects.push(`${gender} ${finalTags}`);
        }
    }

    // Process custom character blocks
    const customBlocks = document.querySelectorAll('.custom-character-block');
    customBlocks.forEach(block => {
        // Default gender is "girl" unless we detect otherwise from tags
        let gender = "girl";
        let detectedGender = null;
        let hasGenderswap = false;
        let swapDirection = '';
        
        // Find the gender selection if available
        const genderRadios = block.querySelectorAll('input[type="radio"][name^="gender-custom-"]');
        if (genderRadios.length > 0) {
            const selectedRadio = Array.from(genderRadios).find(radio => radio.checked);
            if (selectedRadio) {
                gender = selectedRadio.value;
                
                // Check if this is different from the detected gender from tags
                if (detectedGender && gender !== detectedGender) {
                    hasGenderswap = true;
                    swapDirection = `${detectedGender}-to-${gender}`;
                }
            }
        }
        
        // Find the pill container with the custom tags
        const pillContainer = block.querySelector('.custom-pill-container');
        if (pillContainer) {
            // Get all tag pills and extract the original tag value from data attribute
            // If not available, fall back to the text content minus the "×"
            const tags = Array.from(pillContainer.querySelectorAll('.custom-tag-pill'))
                .map(pill => {
                    // Try to get the original tag from data attribute
                    const originalTag = pill.dataset.originalTag;
                    if (originalTag) return originalTag;
                    
                    // Fall back to text content with "×" removed
                    return pill.textContent.replace('×', '').trim();
                })
                .filter(tag => tag.length > 0);
            
            if (tags.length > 0) {
                // Process tags to detect gender and format them
                let processedTags = [];
                
                for (const tag of tags) {
                    // Try to detect gender from this tag
                    const genderInfo = detectGenderFromTag ? detectGenderFromTag(tag) : null;
                    
                    if (genderInfo) {
                        // We found a gender tag
                        detectedGender = genderInfo.gender;
                        
                        // Set this as the default gender if no selection was made
                        if (!gender && detectedGender) {
                            gender = detectedGender;
                        }
                        
                        // Check if we need to add genderswap tags
                        if (gender !== detectedGender) {
                            hasGenderswap = true;
                            swapDirection = `${detectedGender}-to-${gender}`;
                        }
                        
                        // Don't include the gender tag in the processed tags
                        continue;
                    }
                    
                    // Process the tag for gender-specific terms if we have a gender swap
                    let processedTag = tag;
                    if (hasGenderswap && detectedGender && gender) {
                        processedTag = processGenderedTags(tag, detectedGender, gender);
                    }
                    
                    // Format the tag (replace underscores with spaces)
                    processedTag = formatTag ? formatTag(processedTag) : processedTag;
                    processedTags.push(processedTag);
                }
                
                // Add genderswap tags if needed
                if (hasGenderswap) {
                    processedTags.push("genderswap");
                    
                    // Add directional tag
                    let directionTag = "";
                    if (detectedGender === "boy" && gender === "girl") {
                        directionTag = "genderswap mtf"; // male to female
                    } else if (detectedGender === "girl" && gender === "boy") {
                        directionTag = "genderswap ftm"; // female to male
                    } else if (detectedGender === "other" && gender === "boy") {
                        directionTag = "genderswap otm"; // other to male
                    } else if (detectedGender === "other" && gender === "girl") {
                        directionTag = "genderswap otf"; // other to female
                    } else if (detectedGender === "boy" && gender === "other") {
                        directionTag = "genderswap mto"; // male to other
                    } else if (detectedGender === "girl" && gender === "other") {
                        directionTag = "genderswap fto"; // female to other
                    }
                    
                    if (directionTag) {
                        processedTags.push(directionTag);
                    }
                }
                
                // Add the gender and join the processed tags with commas
                subjectCountObj[gender] = (subjectCountObj[gender] || 0) + 1;
                subjects.push(`${gender} ${processedTags.join(', ')}`);
            }
        }
    });

    return { subjects, subjectCountObj };
} 