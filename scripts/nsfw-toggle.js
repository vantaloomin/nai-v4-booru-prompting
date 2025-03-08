/**
 * NSFW Toggle Functionality
 * 
 * This module handles the NSFW toggle functionality, filtering out explicit actions
 * when the toggle is off.
 */

import { updateActionListBasedOnNSFWMode } from './data/actionList.js';

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
    
    // Set initial state
    nsfwToggle.checked = false;
    updateLabel();
    
    // Add change event listener
    nsfwToggle.addEventListener('change', function() {
        updateLabel();
        updateActionListBasedOnNSFWMode();
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
    // Update action list based on current NSFW toggle state
    updateActionListBasedOnNSFWMode();
});

export { updateActionListBasedOnNSFWMode }; 