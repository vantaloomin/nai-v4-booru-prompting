/**
 * CSS Utilities
 * 
 * Provides utility functions for working with CSS classes and styling
 */

/**
 * Returns the appropriate CSS class for a prompt part type
 * @param {string} type - The type of prompt part
 * @returns {string} The CSS class to use
 */
export function getCssClass(type) {
  switch (type) {
    case "default":
      return "highlight-default";
    case "artist":
      return "highlight-artist";
    case "consistent":
      return "highlight-consistent";
    case "subjectCount":
      return "highlight-subject";
    case "scene":
      return "highlight-scene";
    case "quality":
      return "highlight-quality";
    default:
      return "highlight-other";
  }
} 