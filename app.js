/*******************************************************
 * app.js
 * Main application logic: initialize UI elements,
 * wire up buttons, and render the final prompt from
 * structured data returned by generatePromptData() in prompt.js.
 *******************************************************/

document.addEventListener("DOMContentLoaded", function () {
  /***********************************
   * 1) Initialize Scene & Collapsible Sections *
   ***********************************/

  // Populate the scene dropdown (from scene.js)
  populateSceneDropdown();

  // Set up collapsible sections so that clicking a header toggles its content.
  document.querySelectorAll(".collapsible-header").forEach(header => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        this.textContent = this.textContent.replace("▼", "▲");
      } else {
        content.style.display = "none";
        this.textContent = this.textContent.replace("▲", "▼");
      }
    });
    header.nextElementSibling.style.display = "none";
  });

  /*******************************************
   * 2) Wire Up Artist, Character, & Action UI *
   *******************************************/

  // Artist block (artist.js)
  document.getElementById('add-artist-btn').addEventListener('click', addArtistBlock);

  // Character blocks (character.js)
  document.getElementById('add-character-btn').addEventListener('click', function () {
    addCharacterBlock();
    refreshActionCharacterOptions(); // update available options for actions
  });
  document.getElementById('add-rand-char-btn').addEventListener('click', function () {
    addRandomCharacterBlock("all");
  });
  document.getElementById('add-rand-vg-btn').addEventListener('click', function () {
    addRandomCharacterBlock("vg");
  });
  document.getElementById('add-rand-media-btn').addEventListener('click', function () {
    addRandomCharacterBlock("media");
  });

  // Action blocks (action.js)
  document.getElementById('add-action-btn').addEventListener('click', function () {
    addActionBlock();
  });

  /****************************************
   * 3) Full Random Prompt (full-random.js) *
   ****************************************/

  document.getElementById('full-random-btn').addEventListener('click', function () {
    generateFullRandomPrompt();
  });

  /**************************************************
   * 4) Prompt Generation & Output (Structured Data) *
   **************************************************/

  // Global variable to hold the current structured prompt data.
  let currentPromptData = null;

  // Function to render the prompt from structured data.
  // If 'colored' is true, it renders HTML with highlighting;
  // otherwise, it builds a plain text string.
  function renderPrompt(colored, promptData) {
    if (!promptData) return;

    if (colored) {
      // Build header HTML: join header parts with a comma and space.
      const headerHTML = promptData.header
        .map(part => `<span class="${getCssClass(part.type)}">${part.text}</span>`)
        .join(", ");

      // Build character blocks.
      const charactersHTML = promptData.characters
        .map((characterParts, index) => {
          let infoText = "";
          if (characterParts.length >= 2) {
            // Force a comma between gender and name.
            infoText = characterParts[0].text.trim() + ", " + characterParts[1].text.trim();
            // Append any additional tokens (such as tags) with a comma separator.
            if (characterParts.length > 2) {
              infoText += ", " + characterParts.slice(2)
                .filter(p => p.type !== "action")
                .map(p => p.text.trim())
                .join(", ");
            }
          } else {
            infoText = characterParts.map(p => p.text.trim()).join(", ");
          }
          // Build the action tokens for this character.
          const actionText = characterParts
            .filter(p => p.type === "action")
            .map(p => p.text.trim())
            .join(", ");

          // Render info using a uniform color for this character.
          const infoHTML = `<span class="highlight-character-${((index % 4) + 1)}">${infoText}</span>`;
          let actionHTML = "";
          if (actionText) {
            actionHTML = `, <span class="highlight-action-${((index % 4) + 1)}">${actionText}</span>`;
          }
          return infoHTML + actionHTML;
        })
        .join(" | ");

      const finalHTML = headerHTML + " | " + charactersHTML;
      document.getElementById("output-preview").innerHTML = finalHTML;
    } else {
      // Plain text rendering: similar logic without HTML tags.
      const headerText = promptData.header
        .map(part => part.text)
        .join(", ");
      const charactersText = promptData.characters
        .map(characterParts => {
          let infoText = "";
          if (characterParts.length >= 2) {
            infoText = characterParts[0].text + ", " + characterParts[1].text;
            if (characterParts.length > 2) {
              infoText += ", " + characterParts.slice(2)
                .filter(p => p.type !== "action")
                .map(p => p.text)
                .join(", ");
            }
          } else {
            infoText = characterParts.map(p => p.text).join(", ");
          }
          const actionText = characterParts
            .filter(p => p.type === "action")
            .map(p => p.text)
            .join(", ");
          return infoText + (actionText ? ", " + actionText : "");
        })
        .join(" | ");

      const finalText = headerText + " | " + charactersText;
      document.getElementById("output-preview").innerText = finalText;
    }
  }

  // Utility function to assign CSS classes for header parts.
  function getCssClass(type) {
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

  // "Generate Prompt" button: generate prompt data, store it, and render based on toggle.
  document.getElementById("generate-btn").addEventListener("click", function () {
    const colorEnabled = document.getElementById("color-toggle").checked;
    currentPromptData = generatePromptData(); // defined in prompt.js
    // Log the structured prompt data for debugging.
    console.log("Structured Prompt Data:", currentPromptData);
    renderPrompt(colorEnabled, currentPromptData);
  });

  // When the slider toggle changes, re-render the CURRENT prompt (if available).
  document.getElementById("color-toggle").addEventListener("change", function () {
    const colorEnabled = this.checked;
    document.getElementById("color-toggle-label").textContent = colorEnabled ? "Coloring Enabled" : "Coloring Disabled";
    if (currentPromptData !== null) {
      renderPrompt(colorEnabled, currentPromptData);
    }
  });

  // "Copy Prompt" button: copy plain text (without HTML markup) from the preview.
  document.getElementById("copy-prompt-btn").addEventListener("click", function () {
    const promptText = document.getElementById("output-preview").innerText;
    if (promptText) {
      navigator.clipboard.writeText(promptText)
        .then(() => alert("Prompt copied to clipboard!"))
        .catch(err => alert("Failed to copy prompt: " + err));
    } else {
      alert("No prompt to copy!");
    }
  });

  /**************************************************
   * 5) Initialize Sortable for Character Blocks  *
   **************************************************/

  const characterContainer = document.getElementById("characters-container");
  if (characterContainer) {
    Sortable.create(characterContainer, {
      animation: 150,
      handle: '.drag-handle'
    });
  }

  /***********************************************************
   * 6) Expandable Prompt Preview (Toggle Expand/Collapse)    *
   ***********************************************************/

  const toggleBtn = document.getElementById("toggle-expand");
  const outputContainer = document.getElementById("output-container");

  toggleBtn.addEventListener("click", function () {
    outputContainer.classList.toggle("expanded");
    if (outputContainer.classList.contains("expanded")) {
      toggleBtn.textContent = "Collapse";
    } else {
      toggleBtn.textContent = "Expand";
    }
  });
});
