/**
 * Character State Module
 * 
 * Manages the state of character blocks, including count and limits.
 */

// Character state
let characterCount = 0;
const maxCharacters = 4;

/**
 * Returns the current character count
 * 
 * @return {number} - Current number of character blocks
 */
export function getCurrentCharacterCount() {
    return characterCount;
}

/**
 * Returns the maximum allowed character count
 * 
 * @return {number} - Maximum number of allowed character blocks
 */
export function getMaxCharacters() {
    return maxCharacters;
}

/**
 * Returns the total character count including both standard and custom characters
 * 
 * @return {number} - Total number of character blocks
 */
export function getTotalCharacterCount() {
    // Get the custom character count from the custom character module if available
    let customCount = 0;
    if (typeof window.getCurrentCustomCharacterCount === 'function') {
        customCount = window.getCurrentCustomCharacterCount();
    }
    
    return characterCount + customCount;
}

/**
 * Checks if adding another character would exceed the maximum
 * 
 * @return {boolean} - True if adding another character would exceed the maximum
 */
export function wouldExceedMaxCharacters() {
    return getTotalCharacterCount() >= maxCharacters;
}

/**
 * Increments the character count
 * 
 * @return {number} - The updated character count
 */
export function incrementCharacterCount() {
    return ++characterCount;
}

/**
 * Decrements the character count
 * 
 * @return {number} - The updated character count
 */
export function decrementCharacterCount() {
    if (characterCount > 0) {
        return --characterCount;
    }
    return characterCount;
}

/**
 * Sets the character count to a specific value
 * 
 * @param {number} count - The new character count
 */
export function setCharacterCount(count) {
    characterCount = count;
} 