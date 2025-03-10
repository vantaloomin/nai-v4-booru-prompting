/**
 * Enhancer Dropdown Module
 * 
 * Manages the enhancer dropdown functionality.
 */

import { processEnhancers } from '../../utils/enhancerProcessor.js';
import { closeAllDropdowns } from './dropdownCore.js';
import { populateDefaultTagPills } from './tagPills.js';
import { createElement } from '../utils/domUtils.js';

/**
 * Updates the enhancer dropdown for a specific character
 * 
 * @param {number} id - Character block ID
 * @param {string} selectedCharacterName - Name of the selected character
 */
export function updateEnhancerDropdown(id, selectedCharacterName) {
    const enhancerDiv = document.getElementById('enhancer-div-' + id);
    if (!enhancerDiv) return; // Guard against missing element
    
    // Find the label container or create it if it doesn't exist
    let labelContainer = enhancerDiv.querySelector('div');
    if (!labelContainer) {
        labelContainer = document.createElement('div');
        enhancerDiv.appendChild(labelContainer);
    }
    
    enhancerDiv.innerHTML = ''; // Clear previous content
    enhancerDiv.appendChild(labelContainer); // Re-add label container

    const selectedData = characterData.find(item => item.name === selectedCharacterName);
    if (selectedData && selectedData.enhancers && selectedData.enhancers.length > 0) {
        labelContainer.style.display = 'block';
        
        // Create label if it doesn't exist
        if (!labelContainer.querySelector('label')) {
            createElement('label', {}, 'Select Optional Enhancer:', labelContainer);
        }

        const enhancerContainer = createElement('div', { className: 'custom-dropdown' }, '', enhancerDiv);

        const enhancerDisplay = createElement('div', { className: 'selected-display' }, '-- None --', enhancerContainer);

        const enhancerList = createElement('div', { className: 'dropdown-list suggestions-list' }, '', enhancerContainer);

        // Process and add enhancer options - now working with the new sub-array structure
        let processedEnhancers = processEnhancers(selectedData.enhancers);
        
        // Add "None" option at the top
        const noneOption = createElement('div', { className: 'suggestion-item' }, '-- None --', enhancerList);
        noneOption.addEventListener('click', () => {
            enhancerDisplay.textContent = "-- None --";
            // Clear the original enhancer data attribute when selecting None
            delete enhancerDisplay.dataset.originalEnhancer;
            enhancerList.style.display = 'none';
            if (typeof updateAllActionAssignments === "function") {
                updateAllActionAssignments();
            }
            
            // Add logging for clearing enhancer
            import('../../../utils/logger-init.js').then(module => {
                const logger = module.default;
                logger.batch(
                    `character-update-${id}`,
                    logger.LOG_LEVELS.INFO,
                    'info',
                    `Character ${selectedCharacterName} updated`,
                    `enhancer: cleared`
                );
            });
            
            // Find the selected character data
            const charData = characterData.find(item => item.name === selectedCharacterName);
            if (charData) {
                // Refresh default tags with no enhancer
                populateDefaultTagPills(id, charData);
            }
        });
        
        // Add the processed enhancer options
        processedEnhancers.forEach(enh => {
            const item = createElement('div', {
                className: 'suggestion-item',
                dataset: { originalEnhancer: enh.original }
            }, enh.display, enhancerList);
            
            item.addEventListener('click', () => {
                // Show user-friendly display version in the UI
                enhancerDisplay.textContent = enh.display;
                // Store original version with -- tags for processing
                enhancerDisplay.dataset.originalEnhancer = enh.original;
                enhancerList.style.display = 'none';
                
                // Add logging for enhancer selection
                import('../../../utils/logger-init.js').then(module => {
                    const logger = module.default;
                    logger.batch(
                        `character-update-${id}`,
                        logger.LOG_LEVELS.INFO,
                        'info',
                        `Character ${selectedCharacterName} updated`,
                        `enhancer: ${enh.display}`
                    );
                });
                
                if (typeof updateAllActionAssignments === "function") {
                    updateAllActionAssignments();
                }
                
                // Find the selected character data
                const charData = characterData.find(item => item.name === selectedCharacterName);
                if (charData) {
                    // Refresh default tags with the new enhancer
                    populateDefaultTagPills(id, charData);
                }
            });
        });

        // Toggle dropdown display
        enhancerDisplay.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllDropdowns();
            enhancerList.style.display = enhancerList.style.display === 'block' ? 'none' : 'block';
        });
    } else {
        labelContainer.style.display = 'none';
    }
} 