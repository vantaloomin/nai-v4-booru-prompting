// Import scene tag utilities
import { loadContextTags } from './tagUtils.js';
import { initSceneTagAutocomplete, addSceneAutocompleteStyling } from './autocomplete.js';
import { showMaxSceneWarning } from '../utils/modal.js';

// Access the scenes array from the global scope (defined in constants.js)
// Provide a fallback empty array if scenes is undefined
const scenes = window.scenes || [];

let sceneExists = false;

// Ensure populateSceneDropdown is defined in the global scope
function populateSceneDropdown() {
    const sceneSelect = document.getElementById("scene");
    if (!sceneSelect) return;
    sceneSelect.innerHTML = "";

    // Add default placeholder option
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- Select Scene --";
    sceneSelect.appendChild(placeholder);

    // Add special items first.
    ["NONE", "RANDOM"].forEach(val => {
        const option = document.createElement("option");
        option.value = val;
        option.textContent = val;
        sceneSelect.appendChild(option);
    });

    // Sort and add the scene options if scenes array exists
    if (scenes && scenes.length > 0) {
        const sortedScenes = scenes.slice().sort((a, b) => a.theme.localeCompare(b.theme));
        sortedScenes.forEach(sceneItem => {
            const option = document.createElement("option");
            option.value = sceneItem.theme;
            option.textContent = sceneItem.theme;
            sceneSelect.appendChild(option);
        });
    }
}

// Initialize scene tag utilities when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load context tags
    loadContextTags()
        .then(() => {
            console.log("Scene tag module initialized");
        })
        .catch(error => {
            console.error("Error initializing Scene tag module:", error);
        });
});

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
    dragHandle.textContent = "≡";
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
    clearIcon.textContent = "✖";
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
    removeBtn.textContent = "Remove Scene";
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
    console.log("Scene tags updated");
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
    const selected = sceneSelect.value;
    if (selected === "NONE") return "";
    if (selected === "RANDOM") {
        // Make sure scenes array exists and has items
        if (!scenes || scenes.length === 0) return "";
        const randomIndex = Math.floor(Math.random() * scenes.length);
        console.log("Random scene chosen:", scenes[randomIndex].theme);
        return scenes[randomIndex].tags;
    }
    // Make sure scenes array exists before trying to find a scene
    if (!scenes || scenes.length === 0) return "";
    const found = scenes.find(s => s.theme === selected);
    return found ? found.tags : "";
} 