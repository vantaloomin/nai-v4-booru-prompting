/**
 * Enhancer Processor Utility
 * 
 * Provides functions for processing enhancer strings for characters.
 */

/**
 * Processes an array of enhancer arrays, handling the new sub-array structure
 * 
 * @param {Array} enhancers - Array of enhancer arrays
 * @return {Array} - Array of processed enhancers objects with display text and original text
 */
export function processEnhancers(enhancers) {
    let processed = [];
    
    // Handle the new structure where enhancers is an array of arrays
    if (Array.isArray(enhancers)) {
        enhancers.forEach(enhancerGroup => {
            // Check if the enhancer item is an array (new structure)
            if (Array.isArray(enhancerGroup)) {
                // Join all items in the sub-array with commas to form a single enhancer option
                const groupText = enhancerGroup.join(", ");
                
                // Create an object with both the original text and display text (without -- tags)
                processed.push({
                    original: groupText,
                    display: removeDashDashPrefix(groupText)
                });
            } else if (typeof enhancerGroup === 'string') {
                // Handle legacy format (string items directly in the array)
                processed.push({
                    original: enhancerGroup,
                    display: removeDashDashPrefix(enhancerGroup)
                });
            }
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