/*******************************************************
 * app.js
 * Main application logic: initialize UI elements,
 * wire up buttons, and render the final prompt from
 * structured data returned by generatePromptData() in prompt.js.
 *******************************************************/

// Import logger for centralized console management
import logger from './utils/logger-init.js';
// Import modal utilities
import { showClipboardSuccessModal, showClipboardErrorModal } from './utils/modal.js';
// Import character UI functions
import { 
  updateGenderToggle, 
  updateAgeUpToggle,
  updateEnhancerDropdown,
  updateTitleOptions,
  updateCharacterDropdown,
  populateDefaultTagPills,
  closeAllDropdowns
} from './character/ui/dropdowns.js';
// Import character block functions
import { addCharacterBlock, addRandomCharacterBlock } from './character/blocks/characterBlocks.js';
// Import custom character block function
import { addCustomCharacterBlock } from './customCharacter/customCharacterManager.js';
// Import name formatting utility
import { cleanDisplayName } from './character/utils/nameFormatter.js';
// Import action-related functions
import { showActionSelectionPopup, showSDModeActionWarning } from './actions/ui.js';
import { showMinCharacterWarning } from './utils/modal.js';
import { refreshActionCharacterOptions } from './actions/index.js';
// Import toggle manager for unified toggle handling
import { initializeToggles } from './toggle-manager.js';
// Import prompt rendering functions
import { renderPrompt } from './prompt/renderer.js';
// Import search functions
import { initializeSearchOnLoad } from './fuzzySearch.js';
// Import CSS utilities
import { getCssClass } from './ui/cssUtils.js';

document.addEventListener("DOMContentLoaded", function () {
  // Initialize current state
  let currentPromptData = null;
  let isStableDiffusionMode = false; // Default is NovelAI mode

  /***********************************
   * 1) Initialize Scene & Combined Selection Sections *
   ***********************************/
  // NOTE: We no longer auto-create a Scene Card.
  // The user can now add one via the "Add Scene" button.
  
  // Initialize Sortable for the combined Artist/Scene container.
  const selectionContainer = document.getElementById("artist-scene-container");
  if (selectionContainer) {
    Sortable.create(selectionContainer, {
      animation: 150,
      handle: '.card-header',
      group: 'selection'
    });
  }

  // Add Scene button
  document.getElementById("add-scene-btn").addEventListener("click", function() {
    const existingSceneCard = document.querySelector('.scene-card');
    if (existingSceneCard) {
      showModal({
        title: "Scene Already Added",
        message: "You can only add one scene card.",
        type: "info"
      });
      return;
    }
    
    // Create and add scene card
    const container = document.getElementById("artist-scene-container");
    const sceneCardHTML = `
      <div class="card scene-card" id="scene-card">
        <div class="card-header">
          <span class="card-title">Scene</span>
          <button class="remove-btn" data-card-id="scene-card">×</button>
        </div>
        <div class="card-body">
          <div class="tag-input-container">
            <input type="text" class="tag-input" id="scene-tag-input" placeholder="Enter scene tags...">
            <div class="tag-suggestions" id="scene-tag-suggestions"></div>
          </div>
          <div class="tags-container" id="scene-tags-container"></div>
        </div>
      </div>
    `;
    
    container.insertAdjacentHTML('beforeend', sceneCardHTML);
    
    // Initialize scene tag input functionality
    initializeSceneTagInput();
  });
  
  // Handle Artist Add button
  document.getElementById("add-artist-btn").addEventListener("click", function() {
    createArtistCard();
  });

  // Delegated event listener for removing cards
  document.addEventListener("click", function(event) {
    if (event.target.matches('.remove-btn')) {
      const cardId = event.target.getAttribute('data-card-id');
      const card = document.getElementById(cardId);
      if (card) {
        card.remove();
      }
    }
  });
  
  // Check for SD mode and warn if actions are present
  if (isStableDiffusionMode) {
    // Check for any action blocks
    const actionBlocks = document.querySelectorAll('.action-block');
    if (actionBlocks.length > 0) {
      showSDModeActionWarning();
    }
  }
  
  // Mode toggle listener
  document.addEventListener('modeToggleChanged', function(e) {
    isStableDiffusionMode = e.detail.isStableDiffusionMode;
    
    // Update document title based on mode
    document.title = isStableDiffusionMode ? 
      "Stable Diffusion Prompt Generator" : 
      "NovelAI V4 Prompt Builder";
      
    // Re-render the prompt if we have data
    if (currentPromptData) {
      const colorEnabled = document.getElementById("color-toggle").checked;
      renderPrompt(colorEnabled, currentPromptData, isStableDiffusionMode);
    }
    
    // Check for actions
    const actionBlocks = document.querySelectorAll('.action-block');
    if (actionBlocks.length > 0 && isStableDiffusionMode) {
      showSDModeActionWarning();
    }
  });

  /***********************************
   * 2) Initialize Output Area *
   ***********************************/

  // Initialize copy button
  document.getElementById("copy-btn").addEventListener("click", function() {
    const outputElem = document.getElementById("output-preview");
    const promptText = outputElem.innerText;
    
    if (promptText.trim()) {
      navigator.clipboard.writeText(promptText)
        .then(() => showClipboardSuccessModal())
        .catch(err => showClipboardErrorModal(err));
    } else {
      showClipboardErrorModal("No prompt to copy!");
    }
  });
  
  // Initialize Generate Button
  document.getElementById("generate-btn").addEventListener("click", function () {
    const colorEnabled = document.getElementById("color-toggle").checked;
    currentPromptData = generatePromptData();
    if (!currentPromptData) {
      return;
    }
    renderPrompt(colorEnabled, currentPromptData, isStableDiffusionMode);
  });

  /***********************************
   * 5) Prompt Generation & Output *
   ***********************************/
  
  document.getElementById("generate-btn").addEventListener("click", function () {
    const colorEnabled = document.getElementById("color-toggle").checked;
    const currentPromptData = generatePromptData();
    if (!currentPromptData) {
      return;
    }
    renderPrompt(colorEnabled, currentPromptData, isStableDiffusionMode);
  });

  /***********************************
   * 6) Initialize Search Functionality *
   ***********************************/
  
  // Initialize search
  initializeSearchOnLoad();

  const searchInput = document.getElementById("character-search");
  if (searchInput) {
    const clearBtn = document.getElementById("clear-search");
    const suggestionsList = document.getElementById("search-suggestions");
    
    // Listen for input events on the search box
    searchInput.addEventListener("input", function() {
      const query = this.value.trim();
      
      // Show or hide the clear button
      clearBtn.style.display = query ? "inline-block" : "none";
      
      // Perform the search
      if (query) {
        // Assuming fuseSearch returns an array of match objects
        const results = fuseSearch(query, fuse);
        
        // Clear existing suggestions
        suggestionsList.innerHTML = "";
        
        // Display suggestions
        if (results.length === 0) {
          suggestionsList.innerHTML = '<div class="no-results">No matches found</div>';
        } else {
          results.forEach((result) => {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            div.innerHTML = result.display || result.name;
            
            // Set up click event for the suggestion
            div.addEventListener("click", function() {
              // Add character block with the clicked suggestion
              addCharacterBlock(result.name); 
              
              // Clear the search
              searchInput.value = "";
              suggestionsList.innerHTML = "";
              clearBtn.style.display = "none";
            });
            
            suggestionsList.appendChild(div);
          });
        }
        
        // Show the suggestions
        suggestionsList.style.display = "block";
      } else {
        // Hide suggestions when input is empty
        suggestionsList.style.display = "none";
      }
    });
    
    // Clear search button
    clearBtn.addEventListener("click", function() {
      searchInput.value = "";
      suggestionsList.innerHTML = "";
      suggestionsList.style.display = "none";
      this.style.display = "none";
    });
    
    // Close suggestions when clicking outside
    document.addEventListener("click", function(e) {
      if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.style.display = "none";
      }
    });
  }

  // Add the missing function reference to refresh character options in action blocks
  window.refreshActionCharacterOptions = refreshActionCharacterOptions;

  /***********************************
   * 7) Initialize Event Listeners *
   ***********************************/
  
  // Initialize toggles
  initializeToggles();

  // "Add Character" button
  document.getElementById("add-character-btn").addEventListener("click", function() {
    addCharacterBlock();
  });
  
  // "Add Random Character" button
  document.getElementById("add-random-btn").addEventListener("click", function() {
    addRandomCharacterBlock();
  });
  
  // "Add Custom Character" button
  document.getElementById("add-custom-character-btn").addEventListener("click", function() {
    addCustomCharacterBlock();
  });
  
  // "Full Random" button
  document.getElementById("full-random-btn").addEventListener("click", function() {
    generateFullRandomPrompt();
  });
});