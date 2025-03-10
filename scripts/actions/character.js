/**
 * Character Module for Actions
 * 
 * Handles character-related functionality for actions
 */

/**
 * Get current character options (only those with a valid selection).
 * @returns {Array} Array of character options objects
 */
export function getCharacterOptions() {
    let options = [];
    
    // Get regular character blocks
    const charBlocks = document.querySelectorAll(".character-block");
    charBlocks.forEach(block => {
        const blockId = block.id.split("-")[1];
        
        // Try to find the character value via the title or selected character
        let charValue = "";
        let charDisplay = "";
        
        // First check the block title - it contains the character name and game
        const blockTitle = block.querySelector(".block-title");
        if (blockTitle && blockTitle.textContent) {
            // The title should contain the character name
            charDisplay = blockTitle.textContent.trim();
            
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
    
    // Get custom character blocks (both old style and new unified style)
    const customCharBlocks = document.querySelectorAll(".custom-character-block, .character-block.custom-mode");
    customCharBlocks.forEach(block => {
        let blockId;
        let titleText;
        
        // Handle both legacy and new unified format
        if (block.classList.contains('custom-character-block')) {
            // Legacy format: custom-character-{id}
            blockId = block.id.split("-")[2];
            const blockTitle = block.querySelector(".custom-block-title");
            titleText = blockTitle ? blockTitle.textContent.trim() : `Custom Character ${blockId}`;
        } else {
            // New unified format: character-{id} with custom-mode class
            blockId = block.id.split("-")[1];
            const blockTitle = block.querySelector(".block-title");
            titleText = blockTitle ? blockTitle.textContent.trim() : `Custom Character ${blockId}`;
        }
        
        if (blockId) {
            const customCharId = `custom-${blockId}`;
            options.push({ 
                value: customCharId, 
                realValue: titleText,
                display: titleText,
                blockId: blockId,
                isCustom: true
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