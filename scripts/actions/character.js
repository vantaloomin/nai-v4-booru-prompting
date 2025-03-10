/**
 * Character Module for Actions
 * 
 * Handles character-related functionality for actions
 */

/**
 * Gets all character options for populating action dropdown selectors
 * 
 * @return {Array} - Array of character objects with ID, value and display properties
 */
export function getCharacterOptions() {
    let options = [];
    
    // Get character blocks (both regular and custom)
    const allCharBlocks = document.querySelectorAll(".character-block, .custom-character-block");
    
    allCharBlocks.forEach(block => {
        // Determine if this is a custom character block (either old style or new unified style)
        const isCustom = block.classList.contains('custom-character-block') || 
                        block.classList.contains('custom-mode');
        
        // Extract the block ID correctly based on whether it's a custom character or not
        let blockId;
        if (block.classList.contains('custom-character-block')) {
            // Legacy custom character blocks have different ID format
            blockId = block.id.split("-")[2];
        } else {
            // Both regular and new custom character blocks use the same ID format
            blockId = block.id.split("-")[1];
        }
        
        if (!blockId) return; // Skip if ID can't be determined
        
        // Try to find the character value via the title or selected character
        let charValue = "";
        let charDisplay = "";
        
        // Check the appropriate title element based on block type
        const blockTitle = isCustom ? 
            (block.querySelector(".custom-block-title") || block.querySelector(".block-title")) :
            block.querySelector(".block-title");
            
        if (blockTitle && blockTitle.textContent) {
            // The title should contain the character name
            charDisplay = blockTitle.textContent.trim();
            
            if (isCustom) {
                // For custom characters, use the title directly
                charValue = `custom-${blockId}`;
                options.push({ 
                    value: charValue, 
                    realValue: charDisplay,
                    display: charDisplay,
                    blockId: blockId,
                    isCustom: true
                });
                return; // Skip the rest of the processing for custom characters
            }
            
            // For regular characters, continue with existing logic
            // Extract the character name from the display text (before the parenthesis)
            const nameMatch = charDisplay.match(/^(.*?)\s*\(/);
            if (nameMatch && nameMatch[1]) {
                charValue = nameMatch[1].trim();
            } else {
                charValue = charDisplay;
            }
        }
        
        // Create a unique identifier for this character that we can use in the mapping
        const uniqueId = `standard-${blockId}`;
        
        if (charValue) {
            options.push({ 
                value: uniqueId, // Use a unique ID format
                realValue: charValue, // Store the actual character name
                display: charDisplay,
                blockId: blockId
            });
        }
    });
    
    return options;
}

/**
 * Populate a given select element with character options.
 * 
 * @param {HTMLSelectElement} selectElement - The select element to populate
 */
export function populateCharacterOptions(selectElement) {
    selectElement.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Character --";
    selectElement.appendChild(defaultOption);
    
    const options = getCharacterOptions();
    options.sort((a, b) => a.display.localeCompare(b.display));
    
    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.display;
        option.dataset.realValue = opt.realValue;
        selectElement.appendChild(option);
    });
} 