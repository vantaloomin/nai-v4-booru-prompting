// Import scene tag utilities
import { loadContextTags } from './tagUtils.js';
import { initSceneTagAutocomplete, addSceneAutocompleteStyling } from './autocomplete.js';
import { showMaxSceneWarning } from '../utils/modal.js';
import logger from '../utils/logger-init.js';

// Track whether a scene card already exists
let sceneExists = false;

// Wait for the constants.js script to load and define window.scenes
document.addEventListener('DOMContentLoaded', () => {
  // Check if scenes is defined in constants.js but not attached to window
  if (typeof scenes !== 'undefined' && !window.scenes) {
    window.scenes = scenes;
  }
  
  // Access the scenes array from the global scope
  const scenesArray = window.scenes || [];
  logger.info("Scenes from window:", scenesArray);
  
  // Initialize the scene dropdown with the available scenes
  initSceneDropdown(scenesArray);
  
  // ... rest of your initialization code
});

// Function to initialize the scene dropdown
function initSceneDropdown(scenes) {
  const sceneDropdown = document.getElementById('scene-dropdown');
  if (!sceneDropdown) return;
  
  // Clear existing options (except the default ones)
  while (sceneDropdown.options.length > 3) { // Keep the first 3 options
    sceneDropdown.remove(3);
  }
  
  // Add scene options
  scenes.forEach(scene => {
    const option = document.createElement('option');
    option.value = scene.theme;
    option.textContent = scene.theme;
    sceneDropdown.appendChild(option);
  });
}

// Function to populate the scene dropdown
function populateSceneDropdown() {
  const sceneSelect = document.getElementById("scene");
  if (!sceneSelect) return;
  
  // Clear existing options
  while (sceneSelect.options.length > 0) {
    sceneSelect.remove(0);
  }
  
  // Add default options
  const defaultOptions = [
    { value: "", text: "-- Select Scene --" },
    { value: "NONE", text: "NONE" },
    { value: "RANDOM", text: "RANDOM" }
  ];
  
  defaultOptions.forEach(option => {
    const optElement = document.createElement("option");
    optElement.value = option.value;
    optElement.textContent = option.text;
    sceneSelect.appendChild(optElement);
  });
  
  // Add scene options from the global scenes array
  const scenes = window.scenes || [];
  scenes.forEach(scene => {
    const option = document.createElement("option");
    option.value = scene.theme;
    option.textContent = scene.theme;
    sceneSelect.appendChild(option);
  });
}

// Export functions to global scope for backward compatibility
window.createSceneCard = createSceneCard;
window.getSelectedSceneTags = getSelectedSceneTags;

export function createSceneCard() {
    // Prevent creating more than one scene card.
    if (sceneExists) {
        showMaxSceneWarning();
        return;
    }
    sceneExists = true;

    const container = document.getElementById("artist-scene-container");

    // Create the main scene card.
    const card = document.createElement("div");
    card.className = "selection-card scene-card";
    card.id = "scene-card";  // fixed ID for single scene card usage

    // Card header with drag handle and title.
    const header = document.createElement("div");
    header.className = "card-header";

    const dragHandle = document.createElement("span");
    dragHandle.className = "drag-handle";
    dragHandle.innerHTML = '<i class="bx bx-grid-vertical"></i>';
    header.appendChild(dragHandle);

    const title = document.createElement("span");
    title.textContent = "Scene";
    header.appendChild(title);
    card.appendChild(header);

    // Card content with dropdown, custom input, and remove button.
    const content = document.createElement("div");
    content.className = "card-content";

    // Dropdown for scene selection (ID remains "scene" for compatibility).
    const select = document.createElement("select");
    select.id = "scene";
    content.appendChild(select);

    // Custom scene input with wrapper and clear icon
    const searchWrapper = document.createElement("div");
    searchWrapper.className = "custom-search-wrapper";
    
    const customInput = document.createElement("input");
    customInput.type = "text";
    customInput.placeholder = "-- Custom Scene --";
    customInput.className = "custom-tag-input custom-scene-input";
    searchWrapper.appendChild(customInput);
    
    // Add clear icon
    const clearIcon = document.createElement("span");
    clearIcon.className = "custom-clear-icon";
    clearIcon.innerHTML = '<i class="bx bx-x"></i>';
    clearIcon.addEventListener("click", function() {
        customInput.value = "";
    });
    searchWrapper.appendChild(clearIcon);
    
    // Add suggestions container for autocomplete
    const suggestionContainer = document.createElement('div');
    suggestionContainer.className = 'scene-suggestions-list';
    searchWrapper.appendChild(suggestionContainer);
    
    content.appendChild(searchWrapper);
    
    // Add pill container for selected tags
    const pillContainer = document.createElement('div');
    pillContainer.className = 'scene-pill-container';
    content.appendChild(pillContainer);
    
    // Initialize tag autocomplete
    initSceneTagAutocomplete(
        customInput,
        suggestionContainer,
        pillContainer,
        updateSceneTagsCallback
    );
    
    // Add autocomplete styling
    addSceneAutocompleteStyling();

    // Remove Scene button.
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.innerHTML = '<i class="bx bx-trash"></i> Remove Scene';
    removeBtn.className = "remove-scene-btn";
    removeBtn.addEventListener("click", function () {
        container.removeChild(card);
        sceneExists = false; // allow adding another scene later
    });
    content.appendChild(removeBtn);

    card.appendChild(content);
    container.appendChild(card);

    // Populate the scene dropdown.
    populateSceneDropdown();
}

// Callback function when scene tags are updated
function updateSceneTagsCallback() {
    // This function can be used to update any UI or state when scene tags change
    logger.debug("Scene tags updated");
}

export function getSelectedSceneTags() {
    // Get the scene select element.
    const sceneSelect = document.getElementById("scene");
    // Look for a custom scene input within the scene card.
    const customInput = document.querySelector("#scene-card .custom-scene-input");
    // Look for pill container to get all selected tags
    const pillContainer = document.querySelector("#scene-card .scene-pill-container");

    // If there are pills, collect their tags
    if (pillContainer && pillContainer.children.length > 0) {
        const pills = pillContainer.querySelectorAll('.custom-tag-pill');
        const tagTexts = Array.from(pills).map(pill => pill.dataset.originalTag);
        return tagTexts.join(", ");
    }
    
    // If custom input has a value, use that.
    if (customInput && customInput.value.trim() !== "") {
        return customInput.value.trim();
    }

    if (!sceneSelect) return "";
    const selectedValue = sceneSelect.value;
    if (selectedValue === "NONE") return "";
    if (selectedValue === "RANDOM") {
        // Make sure scenes array exists and has items
        if (!scenes || scenes.length === 0) return "";
        const randomIndex = Math.floor(Math.random() * scenes.length);
        logger.info("Random scene chosen:", scenes[randomIndex].theme);
        return scenes[randomIndex].theme;
    }
    // Make sure scenes array exists before trying to find a scene
    if (!scenes || scenes.length === 0) return "";
    const found = scenes.find(s => s.theme === selectedValue);
    return found ? found.tags : "";
} 