/**
 * Modal Utility Module
 * 
 * Provides functions for creating and managing modal dialogs
 */

import logger from './logger-init.js';

// Store active modals for potential management
let activeModals = [];

/**
 * Create and show a modal dialog
 * 
 * @param {Object} options - Modal configuration options
 * @param {string} options.title - Modal title
 * @param {string} options.message - Modal message content
 * @param {string} options.type - Modal type (info, warning, error, success)
 * @param {boolean} options.showCloseButton - Whether to show the close button
 * @param {number} options.autoCloseDelay - Milliseconds before auto-closing (0 for no auto-close)
 * @param {Function} options.onClose - Callback function when modal is closed
 * @returns {HTMLElement} The modal element
 */
export function showModal(options = {}) {
    // Default options
    const defaults = {
        title: 'Notice',
        message: '',
        type: 'info', // info, warning, error, success
        showCloseButton: true,
        autoCloseDelay: 0, // 0 means no auto-close
        onClose: null
    };
    
    // Merge defaults with provided options
    const settings = { ...defaults, ...options };
    
    // Close any existing modals of the same type to prevent stacking
    // But preserve custom modals that are managed separately
    for (let i = activeModals.length - 1; i >= 0; i--) {
        const modal = activeModals[i];
        // Skip closing non-utility modals like the action selection popup
        if (modal && modal.id && (
            modal.id === 'action-modal-overlay' ||
            modal.id === 'reset-modal-overlay'
        )) {
            continue;
        }
        
        if (modal && modal.querySelector && modal.querySelector(`.modal-${settings.type}`)) {
            try {
                closeModal(modal);
            } catch (err) {
                logger.warn('Error closing existing modal:', err);
            }
        }
    }
    
    // Create modal container
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContainer = document.createElement('div');
    modalContainer.className = `modal-container modal-${settings.type}`;
    
    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = settings.title;
    modalHeader.appendChild(modalTitle);
    
    if (settings.showCloseButton) {
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close-btn';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => closeModal(modalOverlay, settings.onClose));
        modalHeader.appendChild(closeButton);
    }
    
    modalContainer.appendChild(modalHeader);
    
    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = settings.message;
    modalContainer.appendChild(modalBody);
    
    // Create modal footer with dismiss button
    const modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';
    
    const dismissButton = document.createElement('button');
    dismissButton.className = 'modal-dismiss-btn';
    dismissButton.textContent = 'Dismiss';
    dismissButton.addEventListener('click', () => closeModal(modalOverlay, settings.onClose));
    modalFooter.appendChild(dismissButton);
    
    modalContainer.appendChild(modalFooter);
    modalOverlay.appendChild(modalContainer);
    
    // Add to document
    document.body.appendChild(modalOverlay);
    
    // Track active modal
    activeModals.push(modalOverlay);
    
    // Auto-close if needed
    if (settings.autoCloseDelay > 0) {
        setTimeout(() => {
            closeModal(modalOverlay, settings.onClose);
        }, settings.autoCloseDelay);
    }
    
    // Add styling if not already present
    addModalStyling();
    
    return modalOverlay;
}

/**
 * Show a warning modal specifically for maximum artist count
 * 
 * @param {number} maxCount - The maximum number of artists allowed
 * @returns {HTMLElement} The modal element
 */
export function showMaxArtistWarning(maxCount) {
    return showModal({
        title: 'Maximum Artists Reached',
        message: `You've reached the maximum limit of ${maxCount} artists. Please remove an artist before adding a new one.`,
        type: 'warning'
    });
}

/**
 * Show a warning modal specifically for maximum character count
 * 
 * @param {number} maxCount - The maximum number of characters allowed
 * @returns {HTMLElement} The modal element
 */
export function showMaxCharacterWarning(maxCount) {
    return showModal({
        title: 'Maximum Characters Reached',
        message: `You've reached the maximum limit of ${maxCount} characters. Please remove a character before adding a new one.`,
        type: 'warning'
    });
}

/**
 * Show a warning modal specifically for maximum action count
 * 
 * @param {number} maxCount - The maximum number of actions allowed
 * @returns {HTMLElement} The modal element
 */
export function showMaxActionWarning(maxCount) {
    return showModal({
        title: 'Maximum Actions Reached',
        message: `You've reached the maximum limit of ${maxCount} actions. Please remove an action before adding a new one.`,
        type: 'warning'
    });
}

/**
 * Show a success modal for clipboard operations
 * 
 * @param {string} message - The success message to display
 * @returns {HTMLElement} The modal element
 */
export function showClipboardSuccessModal(message = 'Prompt copied to clipboard!') {
    return showModal({
        title: 'Success',
        message,
        type: 'success',
        autoCloseDelay: 2000
    });
}

/**
 * Show an error modal for clipboard operations
 * 
 * @param {string} error - The error message to display
 * @returns {HTMLElement} The modal element
 */
export function showClipboardErrorModal(error) {
    return showModal({
        title: 'Copy Failed',
        message: `Failed to copy prompt: ${error}`,
        type: 'error'
    });
}

/**
 * Show a success modal after page reset
 * 
 * @returns {HTMLElement} The modal element
 */
export function showResetSuccessModal() {
    try {
        return showModal({
            title: 'Reset Complete',
            message: 'Page has been reset successfully! All characters, artists, scenes, prompts, and toggles have been reset to their default states.',
            type: 'success',
            autoCloseDelay: 3000,
            onClose: () => {
                logger.info('Reset success modal closed');
            }
        });
    } catch (err) {
        logger.error('Error showing reset success modal:', err);
    }
}

/**
 * Show a warning modal for minimum character requirements for actions
 * 
 * @returns {HTMLElement} The modal element
 */
export function showMinCharacterWarning() {
    return showModal({
        title: 'Minimum Characters Required',
        message: 'At least two characters must be added before assigning actions.',
        type: 'warning'
    });
}

/**
 * Show a warning modal when trying to add more than one scene
 * 
 * @returns {HTMLElement} The modal element
 */
export function showMaxSceneWarning() {
    return showModal({
        title: 'Maximum Scene Reached',
        message: 'Only one scene can be added at a time. Please remove the existing scene before adding a new one.',
        type: 'warning'
    });
}

/**
 * Close a modal dialog
 * 
 * @param {HTMLElement} modalElement - The modal element to close
 * @param {Function} onClose - Callback function to execute after closing
 */
function closeModal(modalElement, onClose = null) {
    // If it's a null or undefined element, just skip
    if (!modalElement) {
        return;
    }
    
    // Check if this is a custom modal (e.g., action popup) with its own handling
    const isCustomModal = modalElement.id && (
        modalElement.id === 'action-modal-overlay' || 
        modalElement.id === 'reset-modal-overlay'
    );
    
    // For custom modals, just let them handle their own DOM removal
    if (isCustomModal) {
        activeModals = activeModals.filter(modal => modal !== modalElement);
        if (typeof onClose === 'function') {
            onClose();
        }
        return;
    }
    
    // Check if the element is still in the DOM before removing it
    if (modalElement && document.body.contains(modalElement)) {
        // Remove from DOM
        document.body.removeChild(modalElement);
    }
    
    // Remove from tracking array regardless of whether it was in the DOM
    activeModals = activeModals.filter(modal => modal !== modalElement);
    
    // Execute callback if provided
    if (typeof onClose === 'function') {
        onClose();
    }
}

/**
 * Add required styling for modals
 */
function addModalStyling() {
    if (document.getElementById('modal-style')) return;
    
    const style = document.createElement('style');
    style.id = 'modal-style';
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }
        
        .modal-container {
            background-color: var(--color-bg-primary, #2d2d2d);
            border-radius: 6px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid var(--color-border, #444);
        }
        
        .modal-header h3 {
            margin: 0;
            font-size: 1.2rem;
            color: var(--color-text-primary, #fff);
        }
        
        .modal-close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--color-text-secondary, #aaa);
            padding: 0;
            margin: 0;
        }
        
        .modal-close-btn:hover {
            color: var(--color-text-primary, #fff);
        }
        
        .modal-body {
            padding: 20px;
            color: var(--color-text-primary, #eee);
            font-size: 1rem;
            line-height: 1.5;
        }
        
        .modal-footer {
            padding: 15px 20px;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid var(--color-border, #444);
        }
        
        .modal-dismiss-btn {
            background-color: var(--color-primary, #6366f1);
            color: var(--text-on-primary, white);
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background-color 0.2s ease;
        }
        
        .modal-dismiss-btn:hover {
            background-color: var(--color-primary-variant, #4f46e5);
        }
        
        /* Modal types */
        .modal-warning .modal-header {
            background-color: var(--color-warning, #d97706);
            color: var(--text-on-warning, #fff);
        }
        
        .modal-error .modal-header {
            background-color: var(--color-error, #dc2626);
            color: var(--text-on-error, #fff);
        }
        
        .modal-success .modal-header {
            background-color: var(--color-success, #059669);
            color: var(--text-on-success, #fff);
        }
        
        .modal-info .modal-header {
            background-color: var(--color-info, #0284c7);
            color: var(--text-on-info, #fff);
        }
    `;
    document.head.appendChild(style);
}