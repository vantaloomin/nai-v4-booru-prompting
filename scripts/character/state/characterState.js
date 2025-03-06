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