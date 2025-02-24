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
 * @return {string[]} - Array of processed enhancers
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
                processed.push(group.join(", "));
                group = [];
                inGroup = false;
            }
        } else if (inGroup) {
            group.push(token);
            if (token.endsWith("]")) {
                let last = group[group.length - 1];
                last = last.replace(/\]$/, "").trim();
                group[group.length - 1] = last;
                processed.push(group.join(", "));
                group = [];
                inGroup = false;
            }
        } else {
            processed.push(token);
        }
    });
    // If there's an unfinished group, join it
    if (group.length > 0) {
        processed.push(group.join(", "));
    }
    return processed;
} 