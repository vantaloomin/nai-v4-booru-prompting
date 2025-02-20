/*******************************************************
 * app.js
 * Main application logic: initialize UI elements,
 * wire up buttons, and render the final prompt from
 * structured data returned by generatePromptData() in prompt.js.
 *******************************************************/
document.addEventListener("DOMContentLoaded", function () {
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
      handle: '.drag-handle'
    });
  }

  /***********************************
   * 2) Wire Up Artist, Scene, Character, & Action UI *
   ***********************************/
  // "Add Artist" button (creates a new artist card)
  document.getElementById('add-artist-btn').addEventListener('click', createArtistCard);

  // "Add Scene" button (creates a new scene card without auto-populating a value)
  document.getElementById('add-scene-btn').addEventListener('click', createSceneCard);

  // Character blocks (from character.js)
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

  // Action blocks (from action.js)
  document.getElementById('add-action-btn').addEventListener('click', function () {
    addActionBlock();
  });

  /***********************************
   * 3) Full Random Prompt *
   ***********************************/
  document.getElementById('full-random-btn').addEventListener('click', function () {
    generateFullRandomPrompt();
  });

  /***********************************
   * 4) Prompt Generation & Output *
   ***********************************/
  let currentPromptData = null;

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
            infoText = characterParts[0].text.trim() + ", " + characterParts[1].text.trim();
            if (characterParts.length > 2) {
              infoText += ", " + characterParts.slice(2)
                .filter(p => p.type !== "action")
                .map(p => p.text.trim())
                .join(", ");
            }
          } else {
            infoText = characterParts.map(p => p.text.trim()).join(", ");
          }
          const actionText = characterParts
            .filter(p => p.type === "action")
            .map(p => p.text.trim())
            .join(", ");
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
      // Build plain text prompt.
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

  document.getElementById("generate-btn").addEventListener("click", function () {
    const colorEnabled = document.getElementById("color-toggle").checked;
    currentPromptData = generatePromptData();
    console.log("Structured Prompt Data:", currentPromptData);
    renderPrompt(colorEnabled, currentPromptData);
  });

  document.getElementById("color-toggle").addEventListener("change", function () {
    const colorEnabled = this.checked;
    document.getElementById("color-toggle-label").textContent = colorEnabled ? "Coloring Enabled" : "Coloring Disabled";
    if (currentPromptData !== null) {
      renderPrompt(colorEnabled, currentPromptData);
    }
  });

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

  /***********************************
   * 5) Initialize Sortable for Character Blocks *
   ***********************************/
  const characterContainer = document.getElementById("characters-container");
  if (characterContainer) {
    Sortable.create(characterContainer, {
      animation: 150,
      handle: '.drag-handle'
    });
  }

  /***********************************
   * 6) Expandable Prompt Preview (Toggle Expand/Collapse) *
   ***********************************/
  const toggleBtn = document.getElementById("toggle-expand");
  const outputContainer = document.getElementById("output-container");
  toggleBtn.addEventListener("click", function () {
    outputContainer.classList.toggle("expanded");
    toggleBtn.textContent = outputContainer.classList.contains("expanded") ? "Collapse" : "Expand";
  });

  /***********************************
   * 7) Fuzzy Search Integration (Fuse.js) *
   ***********************************/
  // Utility function to get candidate objects from characterData.
  function getSearchCandidates() {
    return characterData.map(item => {
      return {
        name: item.name,
        title: item.category,
        display: `${item.name} (${item.category})`,
        raw: item
      };
    });
  }

  // Initialize Fuse.js with candidate data.
  let fuse = createFuse(getSearchCandidates());

  const searchInput = document.getElementById("character-search");
  const suggestionsContainer = document.getElementById("search-suggestions");

  searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    suggestionsContainer.innerHTML = "";
    if (!query) return;

    // Update the Fuse collection in case characterData has changed.
    fuse.setCollection(getSearchCandidates());

    // Perform fuzzy search.
    const results = fuseSearch(query, fuse);

    // Limit to top 10 results.
    results.slice(0, 10).forEach(result => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "suggestion-item";
      itemDiv.textContent = result.display;
      itemDiv.addEventListener("click", function () {
        // Update search input and clear suggestions.
        searchInput.value = result.display;
        suggestionsContainer.innerHTML = "";

        // Add a new character block and populate its fields based on search result.
        addCharacterBlock();
        const blockId = characterCount;
        const mediaSelect = document.getElementById(`media-select-${blockId}`);
        if (mediaSelect) {
          mediaSelect.value = result.raw.mediaType;
          updateTitleOptions(blockId, result.raw.mediaType);
        }
        const titleSelect = document.getElementById(`title-select-${blockId}`);
        if (titleSelect) {
          titleSelect.value = result.raw.category;
          updateCharacterDropdown(blockId, result.raw.mediaType, result.raw.category);
        }
        const charSelect = document.getElementById(`char-select-${blockId}`);
        if (charSelect) {
          charSelect.value = result.raw.name;
          charSelect.dispatchEvent(new Event("change", { bubbles: true }));
        }
        searchInput.value = "";
      });
      suggestionsContainer.appendChild(itemDiv);
    });
  });

  // Hide suggestions when clicking outside the search input.
  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target)) {
      suggestionsContainer.innerHTML = "";
    }
  });
});