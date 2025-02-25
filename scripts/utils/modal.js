/**
 * Modal Utility Module
 * 
 * Provides functions for creating and managing modal dialogs
 */

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
 * Close a modal dialog
 * 
 * @param {HTMLElement} modalElement - The modal element to close
 * @param {Function} onClose - Callback function to execute after closing
 */
function closeModal(modalElement, onClose = null) {
    // Remove from DOM
    document.body.removeChild(modalElement);
    
    // Remove from tracking array
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