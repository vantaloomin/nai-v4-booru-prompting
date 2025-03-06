/**
 * Tag Processor Module
 * 
 * Provides utilities for processing and transforming character tags.
 */

/**
 * Processes gender-specific tags and transforms them based on gender change
 * 
 * @param {string} tags - Comma-separated list of tags
 * @param {string} fromGender - Original gender ('boy', 'girl', or 'other')
 * @param {string} toGender - New gender ('boy', 'girl', or 'other')
 * @return {string} - Processed tags as comma-separated string
 */
export function processGenderedTags(tags, fromGender, toGender) {
    // If no gender change or invalid inputs, return original tags
    if (fromGender === toGender || !fromGender || !toGender) {
        return tags;
    }
    
    // Split tags into array for processing
    let tagsArray = tags.split(",").map(t => t.trim()).filter(t => t !== "");
    
    // For "other" gender, we treat it as male for tag purposes
    // So male→other or other→male doesn't need tag changes
    // But female→other or other→female does
    const needsTransformation = !(
        (fromGender === "boy" && toGender === "other") || 
        (fromGender === "other" && toGender === "boy")
    );
    
    if (needsTransformation) {
        // Process each tag to replace gendered terms
        tagsArray = tagsArray.map(tag => {
            let processedTag = tag;
            
            // Define transformations based on direction
            if ((fromGender === "boy" && toGender === "girl") || 
                (fromGender === "other" && toGender === "girl")) {
                // Male/other to female transformations
                
                // Check for combined pants+shirt → dress replacement
                if (processedTag.includes("pants") && processedTag.includes("shirt")) {
                    // Extract any color that might precede "pants" or "shirt"
                    const colorMatch = processedTag.match(/(\w+)\s+(pants|shirt)/i);
                    const color = colorMatch && colorMatch[1] !== "and" ? colorMatch[1] : "";
                    
                    // Replace both terms with dress, preserving color if found
                    processedTag = processedTag
                        .replace(/\b\w*\s*pants\b/gi, "")
                        .replace(/\b\w*\s*shirt\b/gi, color ? `${color} dress` : "dress")
                        .replace(/\s{2,}/g, " "); // Clean up extra spaces
                } else {
                    // Process butler → maid carefully to avoid false positives
                    processedTag = processedTag
                        .replace(/\b(?<!wa\s)butler\b(?!_)/gi, "maid") // Avoid "wabutler" and "butler_"
                        
                        // Standard replacements with word boundaries to preserve colors
                        .replace(/\bdark-skinned male\b/gi, "dark-skinned female")
                        .replace(/\bmuscular male\b/gi, "muscular female")
                        .replace(/\bbreastplate\b/gi, "boobplate")
                        .replace(/\bdemon boy\b/gi, "demon girl")
                        .replace(/\bcat boy\b/gi, "cat girl")
                        
                        // New replacements with word boundaries to preserve colors
                        .replace(/\b(\w+\s+)?pants\b(?!\s*shirt)/gi, "$1pantyhose") // Preserve color prefix
                        .replace(/\b(\w+\s+)?shorts\b/gi, "$1miniskirt") // Preserve color prefix
                        .replace(/\bv-neck\b/gi, "plunging neckline")
                        .replace(/\bbowler hat\b/gi, "maid headdress");
                        
                    // Specific replacements for clothing
                    if (processedTag.includes("maid")) {
                        processedTag = processedTag.replace(/\bvest\b/gi, "apron");
                    }
                    
                    // Original replacements with color preservation
                    processedTag = processedTag
                        .replace(/\b(\w+\s+)?pants\b/gi, "$1skirt") // Preserve color prefix
                        .replace(/\b(\w+\s+)?wizard hat\b/gi, "$1witch hat") // Preserve color prefix
                        .replace(/\bmonster\b(?!\s+girl)/gi, "monster girl") // Special handling
                        .replace(/\b(\w+\s+)?tunic\b/gi, "$1dress") // Preserve color prefix
                        .replace(/\bsarashi\b/gi, "chest sarashi");
                        
                    // Handle uniform-specific transformations
                    if (/\b(school|military|police|security|maid|butler|sailor) uniform\b/i.test(processedTag)) {
                        processedTag = processedTag.replace(/\b(\w+\s+)?pants\b/gi, "$1skirt"); // Preserve color prefix
                    }
                }
            } 
            else if ((fromGender === "girl" && toGender === "boy") || 
                     (fromGender === "girl" && toGender === "other")) {
                // Female to male/other transformations
                
                // Check for dress → pants+shirt replacement
                if (processedTag.includes("dress") && !processedTag.includes("wedding dress")) {
                    // Extract any color that might precede "dress"
                    const colorMatch = processedTag.match(/(\w+)\s+dress/i);
                    const color = colorMatch && colorMatch[1] !== "and" ? colorMatch[1] : "";
                    
                    // Replace dress with pants and shirt, preserving color if found
                    processedTag = processedTag
                        .replace(/\b(\w*\s*)dress\b/gi, color ? `${color} pants, ${color} shirt` : "pants, shirt");
                } else {
                    // Process maid → butler carefully to avoid false positives
                    processedTag = processedTag
                        .replace(/\bmaid\b(?!(en|_|arian))/gi, "butler") // Avoid "maiden", "maid_", "maid arian"
                        
                        // Standard replacements
                        .replace(/\bdark-skinned female\b/gi, "dark-skinned male")
                        .replace(/\bmuscular female\b/gi, "muscular male")
                        .replace(/\bboobplate\b/gi, "breastplate")
                        .replace(/\bdemon girl\b/gi, "demon boy")
                        .replace(/\bcat girl\b/gi, "cat boy")
                        
                        // New replacements
                        .replace(/\b(\w+\s+)?pantyhose\b/gi, "$1pants") // Preserve color prefix
                        .replace(/\b(\w+\s+)?miniskirt\b/gi, "$1shorts") // Preserve color prefix
                        .replace(/\bplunging neckline\b/gi, "v-neck")
                        .replace(/\bmaid headdress\b/gi, "bowler hat");
                    
                    // Specific replacements for clothing
                    if (processedTag.includes("butler")) {
                        processedTag = processedTag.replace(/\bapron\b/gi, "vest");
                    }
                    
                    // Original replacements with color preservation
                    processedTag = processedTag
                        .replace(/\b(\w+\s+)?skirt\b/gi, "$1pants") // Preserve color prefix
                        .replace(/\b(\w+\s+)?witch hat\b/gi, "$1wizard hat") // Preserve color prefix
                        .replace(/\bmonster girl\b/gi, "monster") // Special handling
                        .replace(/\b(\w+\s+)?dress\b/gi, "$1tunic") // Preserve color prefix
                        .replace(/\bchest sarashi\b/gi, "sarashi");
                        
                    // Handle uniform-specific transformations
                    if (/\b(school|military|police|security|maid|butler|sailor) uniform\b/i.test(processedTag)) {
                        processedTag = processedTag.replace(/\b(\w+\s+)?skirt\b/gi, "$1pants"); // Preserve color prefix
                    }
                }
            }
            
            return processedTag;
        });
    }
    
    return tagsArray.join(", ");
} 