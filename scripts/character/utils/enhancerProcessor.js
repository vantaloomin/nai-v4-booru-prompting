/**
 * Enhancer Processor Utility
 * 
 * Provides functions for processing enhancer strings for characters.
 */

/**
 * Processes an array of enhancer tokens, handling grouped enhancers
 * marked with square brackets
 * 
 * @param {string[]} enhancers - Array of enhancer tokens
 * @return {Array} - Array of processed enhancers objects with display text and original text
 */
export function processEnhancers(enhancers) {
    let processed = [];
    let group = [];
    let inGroup = false;
    
    enhancers.forEach(token => {
        token = token.trim();
        if (token.startsWith("[")) {
            inGroup = true;
            // Remove leading bracket
            token = token.replace(/^\[/, "").trim();
            group.push(token);
            // If it also ends with ']', complete the group
            if (token.endsWith("]")) {
                token = token.replace(/\]$/, "").trim();
                group[group.length - 1] = token;
                const groupText = group.join(", ");
                
                // Create an object with both the original text (with -- tags) and display text (without -- tags)
                processed.push({
                    original: groupText,
                    display: removeDashDashPrefix(groupText)
                });
                
                group = [];
                inGroup = false;
            }
        } else if (inGroup) {
            group.push(token);
            if (token.endsWith("]")) {
                let last = group[group.length - 1];
                last = last.replace(/\]$/, "").trim();
                group[group.length - 1] = last;
                const groupText = group.join(", ");
                
                // Create an object with both the original text (with -- tags) and display text (without -- tags)
                processed.push({
                    original: groupText,
                    display: removeDashDashPrefix(groupText)
                });
                
                group = [];
                inGroup = false;
            }
        } else {
            // Create an object with both the original text (with -- tags) and display text (without -- tags)
            processed.push({
                original: token,
                display: removeDashDashPrefix(token)
            });
        }
    });
    
    // If there's an unfinished group, join it
    if (group.length > 0) {
        const groupText = group.join(", ");
        
        // Create an object with both the original text (with -- tags) and display text (without -- tags)
        processed.push({
            original: groupText,
            display: removeDashDashPrefix(groupText)
        });
    }
    
    return processed;
}

/**
 * Helper function to remove -- prefixes from text for display purposes
 * 
 * @param {string} text - The enhancer text possibly containing -- prefixes
 * @return {string} - Text with -- prefixes and their tags completely removed for display
 */
function removeDashDashPrefix(text) {
    // Split the text by commas
    const parts = text.split(',').map(part => part.trim());
    
    // Filter out parts that start with --
    const filteredParts = parts.filter(part => !part.startsWith('--'));
    
    // Join the remaining parts
    return filteredParts.join(', ');
} 