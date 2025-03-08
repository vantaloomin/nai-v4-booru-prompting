// actionList.js - Action/pose tags for the application
// Modified to load actions from CSV file instead of hardcoded list

// Initial empty array that will be filled when loadActionsFromCSV is called
export let actionList = [];
// Store the full action list (including explicit actions)
export let fullActionList = [];
// Store action metadata (including explicit flag)
export let actionMetadata = {};

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
 * Process CSV text into an array of action names and metadata
 * @param {string} csvText - The CSV content
 * @returns {Object} Object with action names array and metadata
 */
function processCSVText(csvText) {
    if (!csvText || csvText.trim() === '') {
        console.error("CSV text is empty");
        return { actions: [], metadata: {} };
    }
    
    console.log(`Processing CSV, first 100 chars:`, csvText.substring(0, 100));
    
    const lines = csvText.split('\n');
    console.log(`CSV has ${lines.length} lines`);
    
    // Skip header row
    const actionSet = new Set();
    const allActionSet = new Set();
    const metadata = {};
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const columns = line.split(',');
        if (columns.length >= 4) {
            const actionName = columns[0].trim();
            const isExplicit = columns[3].trim().toLowerCase() === 'true';
            
            if (actionName) {
                // Add to all actions set
                allActionSet.add(actionName);
                
                // Add to filtered set if not explicit
                if (!isExplicit) {
                    actionSet.add(actionName);
                }
                
                // Store metadata
                metadata[actionName] = {
                    category: columns[1]?.trim() || '',
                    type: columns[2]?.trim() || '',
                    explicit: isExplicit,
                    count: parseInt(columns[4]?.trim() || '0', 10)
                };
            }
        }
    }
    
    if (allActionSet.size === 0) {
        console.error("No valid actions found in CSV");
        return { actions: [], fullActions: [], metadata: {} };
    }
    
    // Convert Sets to arrays and sort alphabetically
    return { 
        actions: Array.from(actionSet).sort(),
        fullActions: Array.from(allActionSet).sort(),
        metadata
    };
}

/**
 * Updates the action list based on the NSFW mode toggle
 */
export function updateActionListBasedOnNSFWMode() {
    const nsfwModeEnabled = document.getElementById('nsfw-toggle')?.checked || false;
    
    if (nsfwModeEnabled) {
        // If NSFW mode is on, use the full action list
        actionList = [...fullActionList];
    } else {
        // If NSFW mode is off, filter out explicit actions
        actionList = fullActionList.filter(action => !actionMetadata[action]?.explicit);
    }
    
    // Notify that actions have been updated
    window.dispatchEvent(new Event('actionsUpdated'));
    console.log(`Action list updated based on NSFW mode (${nsfwModeEnabled ? 'on' : 'off'}): ${actionList.length} actions`);
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
            const { actions, fullActions, metadata } = processCSVText(csvText);
            
            if (fullActions.length > 0) {
                // Store the full actions list and metadata
                fullActionList = fullActions;
                actionMetadata = metadata;
                
                // Initialize the filtered action list based on NSFW mode
                const nsfwModeEnabled = document.getElementById('nsfw-toggle')?.checked || false;
                actionList = nsfwModeEnabled ? fullActions : actions;
                
                console.log(`Loaded ${actionList.length}/${fullActionList.length} actions from CSV file at ${path}`);
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
        
        const { actions, fullActions, metadata } = processCSVText(fallbackCSV);
        
        if (fullActions.length > 0) {
            // Store the full actions list and metadata
            fullActionList = fullActions;
            actionMetadata = metadata;
            
            // Initialize the filtered action list based on NSFW mode
            const nsfwModeEnabled = document.getElementById('nsfw-toggle')?.checked || false;
            actionList = nsfwModeEnabled ? fullActions : actions;
            
            console.log(`Loaded ${actionList.length}/${fullActionList.length} actions from fallback CSV method`);
            loaded = true;
            
            // Notify that actions have been loaded
            window.dispatchEvent(new Event('actionsLoaded'));
        } else {
            // Use basic fallback if all else fails
            fullActionList = [...fallbackActions];
            actionList = [...fallbackActions];
            console.log(`All CSV methods failed. Using ${actionList.length} fallback actions`);
            window.dispatchEvent(new Event('actionsLoaded'));
        }
    }
}

// Load actions immediately when this module is imported
loadActionsFromCSV();
