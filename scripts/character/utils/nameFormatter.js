/**
 * Name Formatter Utility
 * 
 * Provides functions for formatting and cleaning character names.
 */

/**
 * Cleans and formats a display name for a character
 * - Handles custom character IDs
 * - Removes text after commas
 * - Removes prefixes like "artist:" or "by"
 * - Removes parentheses and their content
 * - Title-cases each word and hyphenated parts
 * 
 * @param {string} name - The name to clean and format
 * @return {string} - The cleaned and formatted name
 */
export function cleanDisplayName(name) {
    // Handle custom character IDs
    if (name && name.startsWith('custom-')) {
        const customId = name.split('-')[1];
        
        // Try to find the block in both legacy and new unified formats
        const customBlock = document.getElementById(`custom-character-${customId}`) || 
                            document.querySelector(`.character-block.custom-mode#character-${customId}`);
        
        if (customBlock) {
            // Check for title in either legacy or new unified format
            const title = customBlock.querySelector('.custom-block-title') || 
                          customBlock.querySelector('.block-title');
            
            if (title) {
                return title.textContent;
            }
            return `Custom Character ${customId}`;
        }
    }
    
    // Regular character name processing
    // Remove any text after the first comma
    let firstPart = name.split(",")[0].trim();
    // Remove prefixes "artist:" or "by" (case-insensitive)
    firstPart = firstPart.replace(/^(artist:|by\s+)/i, "").trim();
    // Remove any parentheses and their content
    firstPart = firstPart.replace(/\s*\([^)]*\)/g, "").trim();
    // Title-case each word and any hyphenated parts
    return firstPart.split(" ").map(word => {
        return word.split("-").map(part => {
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        }).join("-");
    }).join(" ");
} 