/*******************************************************
 * reset.js
 * Handles the reset functionality with a confirmation modal
 *******************************************************/

document.addEventListener("DOMContentLoaded", function () {
  // Get the reset button
  const resetBtn = document.getElementById("reset-btn");

  // Add click event listener to the reset button
  resetBtn.addEventListener("click", function () {
    showResetConfirmationModal();
  });

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
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function () {
      document.body.removeChild(modalOverlay);
    });
    modalContainer.appendChild(closeButton);

    // Create modal title
    const title = document.createElement('h3');
    title.textContent = 'Reset Confirmation';
    modalContainer.appendChild(title);

    // Create modal content
    const content = document.createElement('p');
    content.textContent = 'Are you sure you want to reset the page? This will clear all characters, artists, scenes, and generated prompts.';
    content.style.marginBottom = '20px';
    modalContainer.appendChild(content);

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.gap = '10px';

    // Create cancel button
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', function () {
      document.body.removeChild(modalOverlay);
    });

    // Create confirm button
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Reset';
    confirmButton.style.backgroundColor = 'var(--color-danger)';
    confirmButton.addEventListener('click', function () {
      resetPage();
      document.body.removeChild(modalOverlay);
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

    // Reset any global variables that might be tracking state
    // This depends on how the app is structured, but we can reset common counters
    if (typeof characterCount !== 'undefined') {
      characterCount = 0;
    }

    // Show confirmation message
    alert("Page has been reset successfully!");
  }
}); 