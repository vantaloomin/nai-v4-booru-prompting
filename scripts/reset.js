/*******************************************************
 * reset.js
 * Handles the reset functionality with a confirmation modal
 *******************************************************/

// Import modal utilities
import { showResetSuccessModal } from './utils/modal.js';
// Import toast utilities
import { showToast } from './utils/toast.js';
// Import character state management function
import { setCharacterCount } from './character/state/characterState.js';
// Import custom character state management function
import { setCustomCharacterCount } from './customCharacter/customCharacterManager.js';
// Import toggle manager to reset toggles
import { initializeToggles } from './toggle-manager.js';
// Import logger utility
import logger from './utils/logger-init.js';

document.addEventListener("DOMContentLoaded", function () {
  // Get the reset button
  const resetBtn = document.getElementById("reset-btn");

  // Add click event listener to the reset button
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      showResetConfirmationModal();
    });
  }

  // Function to show the reset confirmation modal
  function showResetConfirmationModal() {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'reset-modal-overlay';
    modalOverlay.classList.add('modal-overlay');

    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.id = 'reset-modal-container';
    modalContainer.classList.add('modal-container');

    // Create close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('modal-close');
    closeButton.innerHTML = '<i class="bx bx-x"></i>';
    closeButton.addEventListener('click', function () {
      document.body.removeChild(modalOverlay);
    });
    modalContainer.appendChild(closeButton);

    // Create modal title
    const title = document.createElement('h3');
    title.textContent = 'Reset Confirmation';
    modalContainer.appendChild(title);

    // Create modal content - Update to include toggles
    const content = document.createElement('p');
    content.textContent = 'Are you sure you want to reset the page? This will clear all characters, artists, scenes, generated prompts, and reset all settings to their initial states.';
    content.style.marginBottom = '20px';
    modalContainer.appendChild(content);

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.gap = '10px';

    // Create cancel button
    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = '<i class="bx bx-x-circle"></i> Cancel';
    cancelButton.addEventListener('click', function () {
      document.body.removeChild(modalOverlay);
    });

    // Create confirm button
    const confirmButton = document.createElement('button');
    confirmButton.innerHTML = '<i class="bx bx-reset"></i> Reset';
    confirmButton.style.backgroundColor = 'var(--color-danger)';
    confirmButton.addEventListener('click', function () {
      try {
        // First remove the reset confirmation modal safely
        if (document.body.contains(modalOverlay)) {
          document.body.removeChild(modalOverlay);
        }
        
        // Give a short delay before resetting the page to ensure the modal is fully removed
        setTimeout(() => {
          // Then reset the page
          resetPage();
        }, 50);
      } catch (err) {
        logger.error("Error during reset process:", err);
      }
    });

    // Add buttons to container
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(confirmButton);
    modalContainer.appendChild(buttonContainer);

    // Add modal to page
    modalOverlay.appendChild(modalContainer);
    document.body.appendChild(modalOverlay);

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        document.body.removeChild(modalOverlay);
      }
    });
  }

  // Function to reset the page
  function resetPage() {
    // Clear characters container
    const charactersContainer = document.getElementById("characters-container");
    if (charactersContainer) {
      charactersContainer.innerHTML = "";
    }

    // Clear artist/scene container
    const artistSceneContainer = document.getElementById("artist-scene-container");
    if (artistSceneContainer) {
      artistSceneContainer.innerHTML = "";
    }

    // Clear output preview
    const outputPreview = document.getElementById("output-preview");
    if (outputPreview) {
      outputPreview.innerHTML = "";
    }

    // Reset character search
    const characterSearch = document.getElementById("character-search");
    if (characterSearch) {
      characterSearch.value = "";
    }

    // Reset random character slider to default
    const randomCharSlider = document.getElementById("random-char-slider");
    if (randomCharSlider) {
      randomCharSlider.value = "2";
      document.getElementById("random-char-count").textContent = "2";
    }

    // Reset checkboxes
    const ignoreArtistCheckbox = document.getElementById("ignore-artist-checkbox");
    if (ignoreArtistCheckbox) {
      ignoreArtistCheckbox.checked = false;
    }

    const ignoreSceneCheckbox = document.getElementById("ignore-scene-checkbox");
    if (ignoreSceneCheckbox) {
      ignoreSceneCheckbox.checked = false;
    }

    // Reset toggles to their default states
    resetToggles();

    // Reset character count to 0 using the character state module
    setCharacterCount(0);

    // Reset custom character count to 0
    setCustomCharacterCount(0);

    // Reset artist count to 0
    if (typeof window.resetArtistCount === 'function') {
      window.resetArtistCount();
    } else if (typeof window.artistCount !== 'undefined') {
      window.artistCount = 0;
    } else if (typeof artistCount !== 'undefined') {
      artistCount = 0;
    }

    // Reset scene exists flag
    if (typeof window.resetSceneExists === 'function') {
      window.resetSceneExists();
    } else if (typeof window.sceneExists !== 'undefined') {
      window.sceneExists = false;
    } else if (typeof sceneExists !== 'undefined') {
      sceneExists = false;
    }

    // Reset window.characterCount global variable to ensure everything is synced
    window.characterCount = 0;

    // Reset any global variables that might be tracking state
    // This depends on how the app is structured, but we can reset common counters
    if (typeof characterCount !== 'undefined') {
      characterCount = 0;
    }

    // Show confirmation message using toast instead of modal
    try {
      showToast({
        title: 'Reset Complete',
        message: 'Page has been reset successfully! All characters, artists, scenes, prompts, and toggles have been reset to their default states.',
        type: 'success',
        duration: 3000
      });
      logger.info('Reset success toast shown');
    } catch (err) {
      logger.error('Error showing reset success toast:', err);
      // Fallback to the modal if toast fails
      showResetSuccessModal();
    }
  }

  // Function to reset all toggles to their default states
  function resetToggles() {
    // Get all toggle elements
    const nsfwToggle = document.getElementById('nsfw-toggle');
    const colorToggle = document.getElementById('color-toggle');
    const modeToggle = document.getElementById('mode-toggle');
    
    // Reset toggles to their default states
    if (nsfwToggle) {
      nsfwToggle.checked = false; // SFW Mode
      // Trigger change event to update the UI
      nsfwToggle.dispatchEvent(new Event('change'));
    }
    
    if (colorToggle) {
      colorToggle.checked = true; // Colored Text
      // Trigger change event to update the UI
      colorToggle.dispatchEvent(new Event('change'));
    }
    
    if (modeToggle) {
      modeToggle.checked = false; // NovelAI
      // Trigger change event to update the UI
      modeToggle.dispatchEvent(new Event('change'));
    }
  }
}); 