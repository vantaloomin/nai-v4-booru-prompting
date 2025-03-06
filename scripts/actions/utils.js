/**
 * Action Utilities Module
 * 
 * Provides helper functions for actions functionality.
 */

/**
 * Check if we're in NovelAI mode
 * @returns {boolean} True if in NovelAI mode, false if in Stable Diffusion mode
 */
export function isNovelAIMode() {
    const modeToggle = document.getElementById('mode-toggle');
    return modeToggle ? !modeToggle.checked : true; // Default to NovelAI mode if toggle not found
}

/**
 * Helper function to find a character ID from a display name
 * 
 * @param {Array} options - Array of character options
 * @param {string} name - The name to find
 * @returns {string|null} The character ID if found, null otherwise
 */
export function findCharacterIdByName(name, options) {
    const match = options.find(opt => opt.realValue === name || opt.display === name);
    return match ? match.value : null;
}

/**
 * Helper function to get the real display name for a character by ID
 * 
 * @param {Array} options - Array of character options
 * @param {string} charId - The character ID
 * @returns {string} The character's real name
 */
export function getRealNameById(charId, options) {
    const char = options.find(c => c.value === charId);
    return char ? (char.realValue || char.display) : charId;
}

/**
 * Internal function to find the real name from character ID
 * 
 * @param {string} charId - The character ID
 * @param {Array} allCharOptions - Array of all character options
 * @returns {string} The character's real name
 */
export function getRealName(charId, allCharOptions) {
    const char = allCharOptions.find(c => c.value === charId);
    return char ? (char.realValue || char.display) : charId;
} 