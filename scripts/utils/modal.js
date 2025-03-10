/**
 * Modal Utility Module
 * 
 * Provides functions for creating and managing modal dialogs
 * This file now uses toast notifications instead of modals
 */

import logger from './logger-init.js';
import * as Toast from './toast.js';

// Store active modals for potential management
let activeModals = [];

/**
 * Create and show a modal dialog
 * This function now creates a toast notification instead
 * 
 * @param {Object} options - Modal configuration options
 * @param {string} options.title - Modal title
 * @param {string} options.message - Modal message content
 * @param {string} options.type - Modal type (info, warning, error, success)
 * @param {boolean} options.showCloseButton - Whether to show the close button
 * @param {number} options.autoCloseDelay - Milliseconds before auto-closing (0 for no auto-close)
 * @param {Function} options.onClose - Callback function when modal is closed
 * @returns {HTMLElement} The toast element
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
    
    // Convert to toast options
    const toastOptions = {
        title: settings.title,
        message: settings.message,
        type: settings.type,
        duration: settings.autoCloseDelay,
        onClose: settings.onClose
    };
    
    // Use toast implementation
    return Toast.showToast(toastOptions);
}

/**
 * Show a warning modal specifically for maximum artist count
 * 
 * @param {number} maxCount - The maximum number of artists allowed
 * @returns {HTMLElement} The toast element
 */
export function showMaxArtistWarning(maxCount) {
    return Toast.showMaxArtistWarning(maxCount);
}

/**
 * Show a warning modal specifically for maximum character count
 * 
 * @param {number} maxCount - The maximum number of characters allowed
 * @returns {HTMLElement} The toast element
 */
export function showMaxCharacterWarning(maxCount) {
    return Toast.showMaxCharacterWarning(maxCount);
}

/**
 * Show a warning modal specifically for maximum action count
 * 
 * @param {number} maxCount - The maximum number of actions allowed
 * @returns {HTMLElement} The toast element
 */
export function showMaxActionWarning(maxCount) {
    return Toast.showMaxActionWarning(maxCount);
}

/**
 * Show a success modal for clipboard operations
 * 
 * @param {string} message - The success message to display
 * @returns {HTMLElement} The toast element
 */
export function showClipboardSuccessModal(message = 'Prompt copied to clipboard!') {
    return Toast.showClipboardSuccessToast(message);
}

/**
 * Show an error modal for clipboard operations
 * 
 * @param {string} error - The error message to display
 * @returns {HTMLElement} The toast element
 */
export function showClipboardErrorModal(error) {
    return Toast.showClipboardErrorToast(error);
}

/**
 * Show a success modal after page reset
 * 
 * @returns {HTMLElement} The toast element
 */
export function showResetSuccessModal() {
    return Toast.showResetSuccessToast();
}

/**
 * Show a warning modal for minimum character requirements for actions
 * 
 * @returns {HTMLElement} The toast element
 */
export function showMinCharacterWarning() {
    return Toast.showMinCharacterWarning();
}

/**
 * Show a warning modal when trying to add more than one scene
 * 
 * @returns {HTMLElement} The toast element
 */
export function showMaxSceneWarning() {
    return Toast.showMaxSceneWarning();
}

/**
 * Close a modal dialog
 * This function is maintained for backward compatibility
 * 
 * @param {HTMLElement} modalElement - The modal element to close
 * @param {Function} onClose - Callback function to execute after closing
 */
function closeModal(modalElement, onClose = null) {
    // Remove from tracking array
    activeModals = activeModals.filter(modal => modal !== modalElement);
    
    // Execute callback if provided
    if (typeof onClose === 'function') {
        onClose();
    }
}

/**
 * Add required styling for modals
 * This function is maintained for backward compatibility but does nothing
 */
function addModalStyling() {
    // No longer needed as toast styling is handled in Toast module
}