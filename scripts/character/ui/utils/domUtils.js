/**
 * DOM Utilities Module
 * 
 * Provides helper functions for common DOM operations used across UI components.
 */

/**
 * Updates the visibility of an element based on a condition
 * 
 * @param {HTMLElement} element - The element to show/hide
 * @param {boolean} isVisible - Whether the element should be visible
 * @param {string} displayStyle - The display style to use when visible (default: 'block')
 */
export function updateElementVisibility(element, isVisible, displayStyle = 'block') {
    if (!element) return;
    element.style.display = isVisible ? displayStyle : 'none';
}

/**
 * Creates a DOM element with specified attributes
 * 
 * @param {string} tagName - The HTML tag name
 * @param {Object} attributes - Attributes to set on the element
 * @param {string} textContent - Optional text content for the element
 * @param {HTMLElement} parent - Optional parent to append the element to
 * @return {HTMLElement} - The created element
 */
export function createElement(tagName, attributes = {}, textContent = '', parent = null) {
    const element = document.createElement(tagName);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
        } else {
            element.setAttribute(key, value);
        }
    });
    
    // Set text content if provided
    if (textContent) {
        element.textContent = textContent;
    }
    
    // Append to parent if provided
    if (parent) {
        parent.appendChild(element);
    }
    
    return element;
}

/**
 * Adds an event listener to an element, with support for delegated events
 * 
 * @param {HTMLElement} element - The element to add the listener to
 * @param {string} eventType - The event type (e.g., 'click')
 * @param {Function} handler - The event handler function
 * @param {string} childSelector - Optional CSS selector for event delegation
 */
export function addEventListenerWithDelegation(element, eventType, handler, childSelector = null) {
    if (!childSelector) {
        element.addEventListener(eventType, handler);
        return;
    }
    
    element.addEventListener(eventType, function(e) {
        const target = e.target.closest(childSelector);
        if (target && element.contains(target)) {
            handler.call(target, e);
        }
    });
} 