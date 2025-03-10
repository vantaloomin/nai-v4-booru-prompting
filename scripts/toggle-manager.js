/**
 * Toggle Manager - Handles all toggles functionality
 * 
 * This module centralizes the management of all toggle switches in the application,
 * providing a consistent interface and modern styling.
 */

import { updateActionListBasedOnNSFWMode } from './data/actionList.js';
import logger from './utils/logger-init.js';

/**
 * Initialize all toggle functionality
 */
function initializeToggles() {
    initNSFWToggle();
    initColorToggle();
    initModeToggle();
}

/**
 * Initialize the NSFW toggle functionality
 */
function initNSFWToggle() {
    const nsfwToggle = document.getElementById('nsfw-toggle');
    const nsfwToggleLabel = document.getElementById('nsfw-toggle-label');
    
    if (!nsfwToggle || !nsfwToggleLabel) {
        logger.error('NSFW toggle elements not found');
        return;
    }
    
    // Set initial state
    nsfwToggle.checked = false;
    updateNSFWLabel();
    
    // Add change event listener with animation
    nsfwToggle.addEventListener('change', function() {
        // Add animation class to the toggle knob
        const sliderKnob = nsfwToggle.parentElement.querySelector('.slider:before');
        if (sliderKnob) {
            sliderKnob.classList.add('animating');
            setTimeout(() => {
                sliderKnob.classList.remove('animating');
            }, 300);
        }
        
        updateNSFWLabel();
        updateActionListBasedOnNSFWMode();
    });
    
    // Update the label based on the toggle state
    function updateNSFWLabel() {
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

/**
 * Initialize the Color toggle functionality
 */
function initColorToggle() {
    const colorToggle = document.getElementById('color-toggle');
    const colorToggleLabel = document.getElementById('color-toggle-label');
    
    if (!colorToggle || !colorToggleLabel) {
        logger.error('Color toggle elements not found');
        return;
    }
    
    // Set initial state - default to enabled (checked)
    colorToggle.checked = true;
    updateColorLabel();
    
    // Add change event listener
    colorToggle.addEventListener('change', function() {
        updateColorLabel();
        
        // Notify for prompt re-rendering (handled in app.js)
        const changeEvent = new CustomEvent('colorToggleChanged', {
            detail: { colorEnabled: this.checked }
        });
        document.dispatchEvent(changeEvent);
    });
    
    // Update the label based on the toggle state - Swap the order to place Colored Text on top
    function updateColorLabel() {
        if (colorToggle.checked) {
            colorToggleLabel.innerHTML = `
                <span class="toggle-state active"><i class='bx bx-palette'></i> Colored Text</span>
                <span class="toggle-state inactive"><i class='bx bx-text'></i> Plain Text</span>
            `;
        } else {
            colorToggleLabel.innerHTML = `
                <span class="toggle-state inactive"><i class='bx bx-palette'></i> Colored Text</span>
                <span class="toggle-state active"><i class='bx bx-text'></i> Plain Text</span>
            `;
        }
    }
}

/**
 * Initialize the Mode toggle functionality
 */
function initModeToggle() {
    const modeToggle = document.getElementById('mode-toggle');
    const modeToggleLabel = document.getElementById('mode-toggle-label');
    
    if (!modeToggle || !modeToggleLabel) {
        logger.error('Mode toggle elements not found');
        return;
    }
    
    // Set initial state - default to NovelAI mode (unchecked)
    modeToggle.checked = false;
    updateModeLabel();
    
    // Add change event listener
    modeToggle.addEventListener('change', function() {
        updateModeLabel();
        
        // Notify for mode change (handled in app.js)
        const changeEvent = new CustomEvent('modeToggleChanged', {
            detail: { isStableDiffusionMode: this.checked }
        });
        document.dispatchEvent(changeEvent);
    });
    
    // Update the label based on the toggle state
    function updateModeLabel() {
        if (modeToggle.checked) {
            modeToggleLabel.innerHTML = `
                <span class="toggle-state inactive"><i class='bx bx-bot'></i> NovelAI</span>
                <span class="toggle-state active"><i class='bx bx-atom'></i> Stable Diffusion</span>
            `;
        } else {
            modeToggleLabel.innerHTML = `
                <span class="toggle-state active"><i class='bx bx-bot'></i> NovelAI</span>
                <span class="toggle-state inactive"><i class='bx bx-atom'></i> Stable Diffusion</span>
            `;
        }
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeToggles);

// Export necessary functions
export { 
    initializeToggles,
    updateActionListBasedOnNSFWMode 
}; 