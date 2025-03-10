/**
 * Toast Notification Utility Module
 * 
 * Provides functions for creating and managing toast notifications
 * that slide out from the upper left of the page
 */

import logger from './logger-init.js';

// Store active toasts for potential management
let activeToasts = [];
let toastContainer = null;

// Toast counter to create unique IDs
let toastCounter = 0;

/**
 * Create and show a toast notification
 * 
 * @param {Object} options - Toast configuration options
 * @param {string} options.title - Toast title
 * @param {string} options.message - Toast message content
 * @param {string} options.type - Toast type (info, warning, error, success)
 * @param {number} options.duration - Milliseconds before auto-closing (0 for no auto-close)
 * @param {Function} options.onClose - Callback function when toast is closed
 * @returns {HTMLElement} The toast element
 */
export function showToast(options = {}) {
    // Default options
    const defaults = {
        title: 'Notice',
        message: '',
        type: 'info', // info, warning, error, success
        duration: 3000, // Default to 3 seconds
        onClose: null
    };
    
    // Merge defaults with provided options
    const settings = { ...defaults, ...options };
    
    // Create toast container if it doesn't exist
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toastId = `toast-${++toastCounter}`;
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `toast toast-${settings.type}`;
    toast.setAttribute('role', 'alert');
    
    // Create toast header
    const toastHeader = document.createElement('div');
    toastHeader.className = 'toast-header';
    
    const toastTitle = document.createElement('h3');
    toastTitle.textContent = settings.title;
    toastHeader.appendChild(toastTitle);
    
    const closeButton = document.createElement('button');
    closeButton.className = 'toast-close-btn';
    closeButton.innerHTML = '<i class="bx bx-x"></i>';
    closeButton.addEventListener('click', () => closeToast(toast, settings.onClose));
    toastHeader.appendChild(closeButton);
    
    toast.appendChild(toastHeader);
    
    // Create toast body
    const toastBody = document.createElement('div');
    toastBody.className = 'toast-body';
    toastBody.innerHTML = settings.message;
    toast.appendChild(toastBody);
    
    // Add to container
    toastContainer.appendChild(toast);
    
    // Track active toast
    activeToasts.push(toast);
    
    // Apply entrance animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Auto-close if needed
    if (settings.duration > 0) {
        setTimeout(() => {
            closeToast(toast, settings.onClose);
        }, settings.duration);
    }
    
    // Add styling if not already present
    addToastStyling();
    
    return toast;
}

/**
 * Close a toast notification
 * 
 * @param {HTMLElement} toastElement - The toast element to close
 * @param {Function} onClose - Callback function to execute after closing
 */
function closeToast(toastElement, onClose = null) {
    // If it's a null or undefined element, just skip
    if (!toastElement) {
        return;
    }
    
    // Start exit animation
    toastElement.classList.remove('show');
    toastElement.classList.add('hiding');
    
    // Remove after animation completes
    setTimeout(() => {
        if (toastElement && toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
        }
        
        // Remove from tracking array
        activeToasts = activeToasts.filter(toast => toast !== toastElement);
        
        // Execute callback if provided
        if (typeof onClose === 'function') {
            onClose();
        }
        
        // Remove container if empty
        if (activeToasts.length === 0 && toastContainer && toastContainer.parentNode) {
            toastContainer.parentNode.removeChild(toastContainer);
            toastContainer = null;
        }
    }, 300); // Match animation duration
}

/**
 * Show a warning toast specifically for maximum artist count
 * 
 * @param {number} maxCount - The maximum number of artists allowed
 * @returns {HTMLElement} The toast element
 */
export function showMaxArtistWarning(maxCount) {
    return showToast({
        title: 'Maximum Artists Reached',
        message: `You've reached the maximum limit of ${maxCount} artists. Please remove an artist before adding a new one.`,
        type: 'warning'
    });
}

/**
 * Show a warning toast specifically for maximum character count
 * 
 * @param {number} maxCount - The maximum number of characters allowed
 * @returns {HTMLElement} The toast element
 */
export function showMaxCharacterWarning(maxCount) {
    return showToast({
        title: 'Maximum Characters Reached',
        message: `You've reached the maximum limit of ${maxCount} characters. Please remove a character before adding a new one.`,
        type: 'warning'
    });
}

/**
 * Show a warning toast specifically for maximum action count
 * 
 * @param {number} maxCount - The maximum number of actions allowed
 * @returns {HTMLElement} The toast element
 */
export function showMaxActionWarning(maxCount) {
    return showToast({
        title: 'Maximum Actions Reached',
        message: `You've reached the maximum limit of ${maxCount} actions. Please remove an action before adding a new one.`,
        type: 'warning'
    });
}

/**
 * Show a success toast for clipboard operations
 * 
 * @param {string} message - The success message to display
 * @returns {HTMLElement} The toast element
 */
export function showClipboardSuccessToast(message = 'Prompt copied to clipboard!') {
    return showToast({
        title: 'Success',
        message,
        type: 'success',
        duration: 2000
    });
}

/**
 * Show an error toast for clipboard operations
 * 
 * @param {string} error - The error message to display
 * @returns {HTMLElement} The toast element
 */
export function showClipboardErrorToast(error) {
    return showToast({
        title: 'Copy Failed',
        message: `Failed to copy prompt: ${error}`,
        type: 'error'
    });
}

/**
 * Show a success toast after page reset
 * 
 * @returns {HTMLElement} The toast element
 */
export function showResetSuccessToast() {
    try {
        return showToast({
            title: 'Reset Complete',
            message: 'Page has been reset successfully! All characters, artists, scenes, prompts, and toggles have been reset to their default states.',
            type: 'success',
            duration: 3000,
            onClose: () => {
                logger.info('Reset success toast closed');
            }
        });
    } catch (err) {
        logger.error('Error showing reset success toast:', err);
    }
}

/**
 * Show a warning toast for minimum character requirements for actions
 * 
 * @returns {HTMLElement} The toast element
 */
export function showMinCharacterWarning() {
    return showToast({
        title: 'Minimum Characters Required',
        message: 'At least two characters must be added before assigning actions.',
        type: 'warning'
    });
}

/**
 * Show a warning toast when trying to add more than one scene
 * 
 * @returns {HTMLElement} The toast element
 */
export function showMaxSceneWarning() {
    return showToast({
        title: 'Maximum Scene Reached',
        message: 'Only one scene can be added at a time. Please remove the existing scene before adding a new one.',
        type: 'warning'
    });
}

/**
 * Add required styling for toasts
 */
function addToastStyling() {
    if (document.getElementById('toast-style')) return;
    
    const style = document.createElement('style');
    style.id = 'toast-style';
    style.textContent = `
        .toast-container {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 350px;
            width: calc(100% - 40px);
        }
        
        .toast {
            background-color: var(--color-bg-primary, #2d2d2d);
            border-radius: 6px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            opacity: 0;
            transform: translateX(-100%);
            transition: all 0.3s ease;
            overflow: hidden;
            border-left: 4px solid transparent;
        }
        
        .toast.show {
            opacity: 1;
            transform: translateX(0);
        }
        
        .toast.hiding {
            opacity: 0;
            transform: translateX(-100%);
        }
        
        .toast-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            border-bottom: 1px solid var(--color-border, #444);
        }
        
        .toast-header h3 {
            margin: 0;
            font-size: 1.1rem;
            color: var(--color-text-primary, #fff);
        }
        
        .toast-close-btn {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            color: var(--color-text-secondary, #aaa);
            padding: 0;
            margin: 0;
        }
        
        .toast-close-btn:hover {
            color: var(--color-text-primary, #fff);
        }
        
        .toast-body {
            padding: 15px;
            color: var(--color-text-primary, #eee);
            font-size: 0.95rem;
            line-height: 1.4;
        }
        
        /* Toast types */
        .toast-warning {
            border-left-color: var(--color-warning, #d97706);
        }
        .toast-warning .toast-header {
            background-color: rgba(217, 119, 6, 0.2);
        }
        
        .toast-error {
            border-left-color: var(--color-error, #dc2626);
        }
        .toast-error .toast-header {
            background-color: rgba(220, 38, 38, 0.2);
        }
        
        .toast-success {
            border-left-color: var(--color-success, #059669);
        }
        .toast-success .toast-header {
            background-color: rgba(5, 150, 105, 0.2);
        }
        
        .toast-info {
            border-left-color: var(--color-info, #0284c7);
        }
        .toast-info .toast-header {
            background-color: rgba(2, 132, 199, 0.2);
        }
    `;
    document.head.appendChild(style);
} 