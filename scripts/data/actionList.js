// actionList.js - Action/pose tags for the application
// Modified to load actions from CSV file instead of hardcoded list

// Initial empty array that will be filled when loadActionsFromCSV is called
export let actionList = [];

// Fallback basic actions in case CSV can't be loaded
const fallbackActions = [
    "dancing", "fighting", "kissing", "flirting", "pointing", 
    "kicking", "slapping", "cuddling", "headpat", "groping", 
    "hugging", "sitting", "standing", "lying", "looking"
];

/**
 * Gets the base URL for the application
 * @returns {string} The base URL
 */
function getBaseUrl() {
    // Get the base URL from window.location
    const url = window.location.href;
    // Remove any file name and parameters
    const baseUrl = url.substring(0, url.lastIndexOf('/') + 1);
    console.log("Base URL:", baseUrl);
    return baseUrl;
}

/**
 * Process CSV text into an array of action names
 * @param {string} csvText - The CSV content
 * @returns {string[]} Array of action names
 */
function processCSVText(csvText) {
    if (!csvText || csvText.trim() === '') {
        console.error("CSV text is empty");
        return [];
    }
    
    console.log(`Processing CSV, first 100 chars:`, csvText.substring(0, 100));
    
    const lines = csvText.split('\n');
    console.log(`CSV has ${lines.length} lines`);
    
    // Skip header row
    const actionSet = new Set();
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const columns = line.split(',');
        if (columns.length >= 1) {
            const actionName = columns[0].trim();
            if (actionName) {
                actionSet.add(actionName);
            }
        }
    }
    
    if (actionSet.size === 0) {
        console.error("No valid actions found in CSV");
        return [];
    }
    
    // Convert Set to array and sort alphabetically
    return Array.from(actionSet).sort();
}

/**
 * Loads action tags from the CSV file.
 * This is called during initialization.
 */
export async function loadActionsFromCSV() {
    // Get the base URL
    const baseUrl = getBaseUrl();
    
    // Try multiple path formats for the CSV file
    const csvPaths = [
        // Absolute URLs (preferred)
        `${baseUrl}scripts/custom/action_with_count.csv`,
        // Relative paths as fallbacks
        '../../custom/action_with_count.csv',
        '../custom/action_with_count.csv',  
        '/scripts/custom/action_with_count.csv',
        'scripts/custom/action_with_count.csv',
        './scripts/custom/action_with_count.csv'
    ];
    
    console.log("Current location:", window.location.href);
    console.log("Attempting to load CSV file from multiple possible paths");
    
    let loaded = false;
    
    // Try each path until we successfully load the CSV
    for (const path of csvPaths) {
        if (loaded) break;
        
        try {
            console.log(`Attempting to load actions from: ${path}`);
            const response = await fetch(path, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/csv',
                    'Cache-Control': 'no-cache'
                }
            });
            
            console.log(`Response status: ${response.status}, ${response.statusText}`);
            
            if (!response.ok) {
                console.error(`Failed to load action CSV from ${path}: ${response.status}`);
                continue;
            }
            
            const csvText = await response.text();
            const processedActions = processCSVText(csvText);
            
            if (processedActions.length > 0) {
                actionList = processedActions;
                console.log(`Loaded ${actionList.length} actions from CSV file at ${path}`);
                loaded = true;
                
                // Notify that actions have been loaded
                window.dispatchEvent(new Event('actionsLoaded'));
            }
        } catch (error) {
            console.error(`Error loading actions from ${path}:`, error);
        }
    }
    
    // If all fetch attempts failed, try with a fallback method
    if (!loaded) {
        console.log("All fetch attempts failed. Trying direct CSV inclusion method.");
        
        // This loads the first 20 lines of the CSV as a fallback
        // In a real implementation, you might want to include the full file or a subset
        const fallbackCSV = `name,category,type,explicit,count
holding,action,contact_self,false,1426857
sitting,action,pose,false,971965
standing,action,pose,false,937808
lying,action,pose,false,460635
hand_up,action,gesture,false,367117
looking_back,action,gaze,false,287992
looking_at_another,action,gaze,false,279252
holding_weapon,action,contact_self,false,274797
spread_legs,action,pose,true,260243
arm_up,action,gesture,false,216915
clothes_lift,action,gesture,false,214025
arms_up,action,gesture,false,194174
hands_up,action,gesture,false,188376
looking_to_the_side,action,gaze,false,186722
hand_on_own_hip,action,gesture,false,159650
head_tilt,action,gesture,false,142031
hug,action,contact_others,false,124763
kneeling,action,pose,false,121797
leaning_forward,action,pose,false,119783`;
        
        const processedActions = processCSVText(fallbackCSV);
        
        if (processedActions.length > 0) {
            actionList = processedActions;
            console.log(`Loaded ${actionList.length} actions from fallback CSV method`);
            loaded = true;
            
            // Notify that actions have been loaded
            window.dispatchEvent(new Event('actionsLoaded'));
        } else {
            // Use basic fallback if all else fails
            actionList = [...fallbackActions];
            console.log(`All CSV methods failed. Using ${actionList.length} fallback actions`);
            window.dispatchEvent(new Event('actionsLoaded'));
        }
    }
}

// Load actions immediately when this module is imported
loadActionsFromCSV();
