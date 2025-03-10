/**
 * Toast Testing Utility
 * 
 * This file provides a simple way to test all toast notifications
 * The test functions are available for console use but no button is shown on the page
 */

import * as Toast from './utils/toast.js';
import * as Modal from './utils/modal.js';

// Create a test function that shows all toast types
export function testToasts() {
    // Show all toast types with a delay between each
    // Info toast
    setTimeout(() => {
        Toast.showToast({
            title: 'Info Notification',
            message: 'This is an information toast message.',
            type: 'info',
            duration: 5000
        });
    }, 0);

    // Success toast
    setTimeout(() => {
        Toast.showClipboardSuccessToast('Your prompt was successfully copied!');
    }, 1000);

    // Warning toast
    setTimeout(() => {
        Toast.showMaxCharacterWarning(5);
    }, 2000);

    // Error toast
    setTimeout(() => {
        Toast.showClipboardErrorToast('Failed to access clipboard');
    }, 3000);

    // Show reset success toast
    setTimeout(() => {
        Toast.showResetSuccessToast();
    }, 4000);
}

// Create a test function that uses the modal interface
export function testModalsUsingToasts() {
    // Show all toast types through the modal interface with a delay between each
    // Info modal (now toast)
    setTimeout(() => {
        Modal.showModal({
            title: 'Info via Modal API',
            message: 'This info message uses the modal API but appears as a toast',
            type: 'info',
            autoCloseDelay: 5000
        });
    }, 6000);

    // Success modal (now toast)
    setTimeout(() => {
        Modal.showClipboardSuccessModal('Your prompt was successfully copied via modal API!');
    }, 7000);

    // Warning modal (now toast)
    setTimeout(() => {
        Modal.showMaxCharacterWarning(5);
    }, 8000);

    // Error modal (now toast)
    setTimeout(() => {
        Modal.showClipboardErrorModal('Failed to access clipboard via modal API');
    }, 9000);
}

// Test function that runs both test suites
export function runAllTests() {
    testToasts();
    setTimeout(testModalsUsingToasts, 5000);
}

/* 
 * No automatic button is added to the page
 * To test toasts, open the browser console and run:
 * 
 * import { runAllTests } from './scripts/test-toasts.js';
 * runAllTests();
 */ 