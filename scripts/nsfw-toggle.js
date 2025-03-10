/**
 * NSFW Toggle Functionality
 * 
 * This module handles the NSFW toggle functionality, filtering out explicit actions
 * when the toggle is off.
 */

import { updateActionListBasedOnNSFWMode } from './data/actionList.js';
import { updateTagListBasedOnNSFWMode } from './customCharacter/utils/tagUtils.js';

// Create a global event to inform the system when the toggle is ready
export const nsfwToggleReadyEvent = new Event('nsfwToggleReady');

/**
 * Initialize the NSFW toggle functionality
 */
function initNSFWToggle() {
    const nsfwToggle = document.getElementById('nsfw-toggle');
    const nsfwToggleLabel = document.getElementById('nsfw-toggle-label');
    
    if (!nsfwToggle || !nsfwToggleLabel) {
        console.error('NSFW toggle elements not found');
        return;
    }
    
    console.log('Initializing NSFW toggle');
    
    // Set initial state - default to SFW mode (false)
    nsfwToggle.checked = false;
    updateLabel();
    
    // Force a full update of all lists after toggle initialization
    setTimeout(() => {
        console.log('NSFW system initialized (SFW mode active)');
        updateActionListBasedOnNSFWMode();
        
        try {
            updateTagListBasedOnNSFWMode();
        } catch (error) {
            console.warn('Tag list update error:', error.message);
        }
        
        window.dispatchEvent(nsfwToggleReadyEvent);
    }, 100);
    
    // Add change event listener
    nsfwToggle.addEventListener('change', function() {
        const mode = nsfwToggle.checked ? 'NSFW' : 'SFW';
        console.log(`Content filter mode changed: ${mode}`);
        updateLabel();
        updateActionListBasedOnNSFWMode();
        
        try {
            updateTagListBasedOnNSFWMode();
        } catch (error) {
            console.warn('Tag list update error:', error.message);
        }
    });
    
    // Update the label based on the toggle state
    function updateLabel() {
        // Update to dual-state label
        if (nsfwToggle.checked) {
            nsfwToggleLabel.innerHTML = `
                <span class="toggle-state inactive"><i class='bx bx-shield'></i> SFW Mode</span>
                <span class="toggle-state active"><i class='bx bx-shield-x'></i> NSFW Mode</span>
            `;
            nsfwToggleLabel.classList.add('nsfw-enabled');
        } else {
            nsfwToggleLabel.innerHTML = `
                <span class="toggle-state active"><i class='bx bx-shield'></i> SFW Mode</span>
                <span class="toggle-state inactive"><i class='bx bx-shield-x'></i> NSFW Mode</span>
            `;
            nsfwToggleLabel.classList.remove('nsfw-enabled');
        }
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initNSFWToggle);

// Initialize when actions are loaded
window.addEventListener('actionsLoaded', function() {
    console.log('Actions loaded event received, updating action list based on current NSFW state');
    updateActionListBasedOnNSFWMode();
});

// Initialize when tags are loaded
window.addEventListener('tagsUpdated', function() {
    // No need to log anything here
});

export { updateActionListBasedOnNSFWMode }; 