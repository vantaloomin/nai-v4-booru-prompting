/**
 * Prompt Formatter
 * 
 * Provides functions for formatting prompt text in different modes
 */

/**
 * Formats text based on the current prompt mode (NovelAI or Stable Diffusion)
 * @param {string} text - The text to format
 * @param {boolean} isStableDiffusionMode - Whether we're in SD mode or NovelAI mode
 * @returns {string} The formatted text
 */
export function formatTextForMode(text, isStableDiffusionMode) {
  if (!isStableDiffusionMode) {
    return text; // NovelAI mode: keep as is
  }
  
  // Stable Diffusion mode: format according to requirements
  
  // Remove any triple braces and double braces that might be in the text (from NovelAI format)
  text = text.replace(/{{{|}}}/g, '').replace(/{{|}}/g, '');
  
  let result = '';
  let inBraces = false;
  let inBrackets = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    // Track if we're inside braces or brackets
    if (char === '{') inBraces = true;
    else if (char === '}') inBraces = false;
    else if (char === '[') inBrackets = true;
    else if (char === ']') inBrackets = false;
    
    // Handle special characters that need escaping (except {}, [], and _)
    if (char === '(' || char === ')' || char === '/' || char === '\\') {
      result += '\\' + char;
    }
    // Handle commas - add comma+space without underscores
    else if (char === ',') {
      result += ', ';
      
      // Skip any whitespace after the comma
      while (i + 1 < text.length && text[i + 1] === ' ') {
        i++;
      }
    }
    // Handle spaces - convert to underscore only outside of {} and []
    else if (char === ' ') {
      result += (inBraces || inBrackets) ? ' ' : '_';
    }
    // Everything else is kept as is
    else {
      result += char;
    }
  }
  
  return result;
} 