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
        if (!block) continue;

        // Check for the pill container which holds all the character tags
        const pillContainer = block.querySelector('.custom-pill-container');
        if (!pillContainer) continue;
        
        // Get all default tag pills (these are added automatically when a character is selected)
        const defaultTags = pillContainer.querySelectorAll('.custom-tag-pill.default-tag');
        if (defaultTags.length === 0) continue;
        
        // Find the gender tag (1girl, 1boy, 1other)
        let gender = null;
        let characterTags = [];
        
        defaultTags.forEach(tagElement => {
            const tagText = tagElement.dataset.originalTag || tagElement.textContent.trim();
            
            // Check if this is a gender tag
            if (tagText.match(/^1(girl|boy|other)$/)) {
                gender = tagText.replace(/^1/, '');
                // Update the count
                subjectCountObj[gender]++;
            } else {
                // Add to our character tags collection
                characterTags.push(tagText);
            }
        });
        
        // If no gender tag found, skip this character
        if (!gender) continue;
        
        // Also collect custom tags (user-added tags that aren't default)
        const customTags = pillContainer.querySelectorAll('.custom-tag-pill:not(.default-tag)');
        customTags.forEach(tagElement => {
            // Get the original tag from data attribute or text content (removing the × if present)
            const tagText = tagElement.dataset.originalTag || tagElement.textContent.replace('×', '').trim();
            
            // For NovelAI mode, convert underscores to spaces
            // Using replace to convert underscores to spaces for all custom tags
            const formattedTag = tagText.replace(/_/g, ' ');
            
            // Add to our character tags collection
            characterTags.push(formattedTag);
        });
        
        // Create the final subject string
        // IMPORTANT: Gender must be the first token in the string (without a comma after it)
        // The name should follow the gender and then other tags after commas
        // This is expected by the code in prompt.js that processes subjects
        
        // Try to get the character name from the block title or data attribute
        let characterName = "";
        if (block.dataset.character) {
            characterName = block.dataset.character;
        } else {
            const blockTitle = block.querySelector('.block-title');
            if (blockTitle && blockTitle.textContent !== `Character ${i}`) {
                // Extract character name from the title (format is "Name (Category)")
                const titleText = blockTitle.textContent;
                const match = titleText.match(/(.*?) \((.*?)\)/);
                if (match) {
                    characterName = match[1];
                }
            }
        }
        
        const tagString = characterTags.join(', ');
        
        // Add this character to our subjects array
        // Format: "gender name, tag1, tag2, tag3"
        subjects.push(`${gender} ${characterName}, ${tagString}`);
    }

    // Process action characters (if that functionality exists)
    if (typeof window.getActionCharacterData === 'function') {
        const actionData = window.getActionCharacterData();
        if (actionData && actionData.length) {
            for (const action of actionData) {
                if (action.isPrepopulated) continue; // Skip prepopulated actions as they're included in mainTags
                
                // We need a valid action with target, source and action property
                if (!action.target || !action.source || !action.action || 
                    actionAssignments[action.target] === undefined || 
                    actionAssignments[action.source] === undefined) {
                    continue;
                }
                
                // Source and target must be different characters
                if (action.source === action.target) continue;
                
                // Get the character name for each
                const sourceChar = document.getElementById('character-' + action.source);
                const targetChar = document.getElementById('character-' + action.target);
                if (!sourceChar || !targetChar) continue;
                
                // Get the existing tags for formatting
                let sourceGender = '';
                let sourceName = '';
                let targetGender = '';
                let targetName = '';
                
                // Try to find character names
                if (sourceChar.dataset.character) {
                    sourceName = sourceChar.dataset.character;
                } else {
                    const sourceTitle = sourceChar.querySelector('.block-title');
                    if (sourceTitle) {
                        const match = sourceTitle.textContent.match(/(.*?) \((.*?)\)/);
                        if (match) sourceName = match[1];
                    }
                }
                
                if (targetChar.dataset.character) {
                    targetName = targetChar.dataset.character;
                } else {
                    const targetTitle = targetChar.querySelector('.block-title');
                    if (targetTitle) {
                        const match = targetTitle.textContent.match(/(.*?) \((.*?)\)/);
                        if (match) targetName = match[1];
                    }
                }
                
                // Find gender in the pill containers
                const sourcePillContainer = sourceChar.querySelector('.custom-pill-container');
                const targetPillContainer = targetChar.querySelector('.custom-pill-container');
                
                if (sourcePillContainer) {
                    const genderPill = Array.from(sourcePillContainer.querySelectorAll('.custom-tag-pill.default-tag'))
                        .find(pill => {
                            const tagText = pill.dataset.originalTag || pill.textContent.trim();
                            return tagText.match(/^1(girl|boy|other)$/);
                        });
                    
                    if (genderPill) {
                        sourceGender = (genderPill.dataset.originalTag || genderPill.textContent.trim()).replace(/^1/, '');
                    }
                }
                
                if (targetPillContainer) {
                    const genderPill = Array.from(targetPillContainer.querySelectorAll('.custom-tag-pill.default-tag'))
                        .find(pill => {
                            const tagText = pill.dataset.originalTag || pill.textContent.trim();
                            return tagText.match(/^1(girl|boy|other)$/);
                        });
                    
                    if (genderPill) {
                        targetGender = (genderPill.dataset.originalTag || genderPill.textContent.trim()).replace(/^1/, '');
                    }
                }
                
                // If genders can't be found, use fallback defaults
                sourceGender = sourceGender || 'girl';
                targetGender = targetGender || 'girl';
                
                // Format and add the action tag - the action format in prompt.js is:
                // "{sourceGender} {sourceName}, {action} {targetGender} {targetName}"
                let actionString = '';
                switch (action.action) {
                    case 'kiss':
                        actionString = `${sourceGender} ${sourceName}, kissing ${targetGender} ${targetName}`;
                        break;
                    case 'hug':
                        actionString = `${sourceGender} ${sourceName}, hugging ${targetGender} ${targetName}`;
                        break;
                    // Add more cases as needed for different actions
                    default:
                        continue; // Skip unknown actions
                }
                
                subjects.push(actionString);
            }
        }
    }

    return { subjects, subjectCountObj };
} 