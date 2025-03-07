/**
 * Actions Constants Module
 * 
 * Re-exports action-related constants from the main constants file
 */

// Re-export actionTags from the main constants file
export let actionTags = [];

// Dynamically load the actionTags from the main constants file
// This will wait for the main constants to be loaded
window.addEventListener('constantsLoaded', () => {
  actionTags = window.actionTags || [];
}); 