/*******************************************************
 * app.js
 * Main application logic: initialize UI elements,
 * wire up buttons, and render the final prompt from
 * structured data returned by generatePromptData() in prompt.js.
 *******************************************************/

// Import logger for centralized console management
import logger from './utils/logger-init.js';
// Import console patch to ensure all prompt logs are captured
import './utils/logger-patch.js';
// Import modal utilities
import { showClipboardSuccessModal, showClipboardErrorModal } from '../z-retired/modal.js';
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
// Import custom character block function (kept for backward compatibility)
import { addCustomCharacterBlock } from './customCharacter/customCharacterManager.js';
// Import name formatting utility
import { cleanDisplayName } from './character/utils/nameFormatter.js';
// Import action-related functions
import { showActionSelectionPopup, showSDModeActionWarning } from './actions/ui.js';
import { showMinCharacterWarning } from '../z-retired/modal.js';
import { refreshActionCharacterOptions } from './actions/index.js';
// Import toggle manager for unified toggle handling
import { initializeToggles } from './toggle-manager.js';

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
      handle: '.drag-handle'
    });
  }

  // Add event listener to close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    // Close the random character dropdown if clicking outside
    if (!e.target.closest('#random-char-dropdown')) {
      const randomCharOptions = document.getElementById('random-char-options');
      if (randomCharOptions) {
        randomCharOptions.style.display = 'none';
      }
    }
  });

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
  
  // Configure Random Character dropdown
  const randomCharBtn = document.getElementById('random-char-btn');
  const randomCharOptions = document.getElementById('random-char-options');
  
  // Toggle dropdown when button is clicked
  randomCharBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const isVisible = randomCharOptions.style.display === 'block';
    closeAllDropdowns(); // Close any open dropdowns
    randomCharOptions.style.display = isVisible ? 'none' : 'block';
  });
  
  // Set up the random character option clicks
  document.getElementById('add-rand-char-btn').addEventListener('click', function () {
    randomCharOptions.style.display = 'none';
    addRandomCharacterBlock("all");
  });
  
  document.getElementById('add-rand-vg-btn').addEventListener('click', function () {
    randomCharOptions.style.display = 'none';
    addRandomCharacterBlock("vg");
  });
  
  document.getElementById('add-rand-media-btn').addEventListener('click', function () {
    randomCharOptions.style.display = 'none';
    addRandomCharacterBlock("media");
  });

  document.getElementById('add-custom-character-btn').addEventListener('click', function() {
    // Use the unified character block with isCustom=true
    addCharacterBlock(true);
    refreshActionCharacterOptions(); // Update available action options if necessary.
  });

  // Action blocks (from action.js)
  document.getElementById('add-action-btn').addEventListener('click', function () {
    // If there are fewer than 2 character blocks, show a warning
    const characterBlocks = getAllCharacterBlocks();
    
    if (characterBlocks.length < 2) {
      showMinCharacterWarning();
      return;
    }
    
    // If it's not in NovelAI mode, show a warning
    if (isStableDiffusionMode) {
      showSDModeActionWarning();
      return;
    }
    
    // Otherwise show the action selection popup
    // Using the first two character blocks as source and target by default
    const sourceId = characterBlocks[0].id.replace('character-', '').replace('custom-character-', '');
    const targetId = characterBlocks[1].id.replace('character-', '').replace('custom-character-', '');
    
    // Show the action selection popup
    showActionSelectionPopup(sourceId, targetId);
  });

  /***********************************
   * 3) Full Random Prompt *
   ***********************************/
  document.getElementById('full-random-btn').addEventListener('click', function () {
    const charCount = parseInt(document.getElementById("random-char-slider").value, 10);
    const ignoreArtist = document.getElementById("ignore-artist-checkbox").checked;
    const ignoreScene = document.getElementById("ignore-scene-checkbox").checked;
    
    // Log random prompt generation parameters 
    logger.info("Generating random prompt", {
        characterCount: charCount,
        ignoreArtist: ignoreArtist,
        ignoreScene: ignoreScene
    });
    
    generateFullRandomPrompt();
  });

  /***********************************
   * 4) Listen for Toggle Events from toggle-manager.js *
   ***********************************/
  // Listen for mode toggle changes
  document.addEventListener('modeToggleChanged', function(e) {
    isStableDiffusionMode = e.detail.isStableDiffusionMode;
    
    // Update page title and h1
    document.title = isStableDiffusionMode ? 
      'Booru Stable Diffusion Prompt Builder' : 
      'NovelAI V4 Prompt Builder';
    document.querySelector('h1').textContent = document.title;
    
    // Re-render current prompt with new format if it exists
    if (currentPromptData !== null) {
      renderPrompt(document.getElementById("color-toggle").checked, currentPromptData);
    }
  });

  // Listen for color toggle changes
  document.addEventListener('colorToggleChanged', function(e) {
    const colorEnabled = e.detail.colorEnabled;
    if (currentPromptData !== null) {
      renderPrompt(colorEnabled, currentPromptData);
    }
  });

  /***********************************
   * 5) Prompt Generation & Output *
   ***********************************/
  function renderPrompt(colored, promptData) {
    if (!promptData) return;
    
    const isSD = isStableDiffusionMode;

    if (colored) {
      if (isSD) {
        // Stable Diffusion format
        // 1. Get consistent quality tags 1
        const consistentTags1 = promptData.header.find(part => part.type === "consistent");
        
        // 2. Get artist
        const artist = promptData.header.find(part => part.type === "artist");
        
        // 3. Get subject count
        const subjectCount = promptData.header.find(part => part.type === "subjectCount");
        
        // 4. Build character information without 'girl_' prefix
        const charactersHTML = promptData.characters
          .map((characterParts, index) => {
            // Make sure we have at least a name and handle edge cases
            if (characterParts.length < 2) {
              return `<span class="highlight-character-${((index % 4) + 1)}">${formatTextForMode(characterParts.map(p => p.text.trim()).join(", "))}</span>`;
            }
            
            // Get the name (second element, index 1)
            const name = characterParts[1].text.trim();
            
            // Extract the additional tags (excluding actions)
            const additionalTags = characterParts.slice(2)
              .filter(p => p.type !== "action")
              .map(p => p.text.trim())
              .join(", ");
            
            // Extract any action tags
            const actionText = characterParts
              .filter(p => p.type === "action")
              .map(p => p.text.trim())
              .join(", ");
            
            // Build character HTML: Name + Tags + Actions
            let charHTML = `<span class="highlight-character-${((index % 4) + 1)}">`;
            charHTML += formatTextForMode(name);
            if (additionalTags) {
              charHTML += `, ${formatTextForMode(additionalTags)}`;
            }
            charHTML += `</span>`;
            
            // Add actions if they exist
            if (actionText) {
              charHTML += `, <span class="highlight-action-${((index % 4) + 1)}">${formatTextForMode(actionText)}</span>`;
            }
            
            return charHTML;
          })
          .join(", ");
        
        // 5. Get scene
        const scene = promptData.header.find(part => part.type === "scene");
        
        // 6. Get consistent quality tags 2
        const qualityTags = promptData.header.find(part => part.type === "quality");
        
        // Build final HTML in the correct order
        let parts = [];
        // Use sdText if available, otherwise fall back to text
        if (consistentTags1) {
          const consistentTagsText = consistentTags1.sdText || consistentTags1.text;
          parts.push(`<span class="${getCssClass("consistent")}">${formatTextForMode(consistentTagsText)}</span>`);
        }
        
        if (artist) {
          const artistText = artist.sdText || artist.text;
          parts.push(`<span class="${getCssClass("artist")}">${formatTextForMode(artistText)}</span>`);
        }
        
        if (subjectCount) {
          const countText = subjectCount.sdText || subjectCount.text;
          parts.push(`<span class="${getCssClass("subjectCount")}">${formatTextForMode(countText)}</span>`);
        }
        
        // Add characters
        parts.push(charactersHTML);
        
        // Add scene
        if (scene) {
          const sceneText = scene.sdText || scene.text;
          parts.push(`<span class="${getCssClass("scene")}">${formatTextForMode(sceneText)}</span>`);
        }
        
        // Add quality tags
        if (qualityTags) {
          const qualityText = qualityTags.sdText || qualityTags.text;
          parts.push(`<span class="${getCssClass("quality")}">${formatTextForMode(qualityText)}</span>`);
        }
        
        // Join everything with commas
        const finalHTML = parts.join(", ");
        document.getElementById("output-preview").innerHTML = finalHTML;
      } else {
        // NovelAI format - NEW format with character and background sections
        // Get subject count
        const subjectCount = promptData.header.find(part => part.type === "subjectCount");
        const subjectCountText = subjectCount ? subjectCount.text : "";
        
        // Get consistent tags
        const consistentTags = promptData.header.find(part => part.type === "consistent");
        const consistentTagsText = consistentTags ? consistentTags.text.replace(/{{{|}}}/g, '') : "";
        
        // Get quality tags
        const qualityTags = promptData.header.find(part => part.type === "quality");
        const qualityTagsText = qualityTags ? qualityTags.text : "";
        
        // Get artist
        const artist = promptData.header.find(part => part.type === "artist");
        const artistText = artist && artist.text ? 
          artist.text.split(",").map(a => `{artist:${a.trim()}}`).join(", ") : "";
        
        // Get scene tags
        const scene = promptData.header.find(part => part.type === "scene");
        const sceneText = scene ? scene.text : "";
        
        // Get default text (the quality tags 2)
        const defaultPart = promptData.header.find(part => part.type === "default");
        const defaultText = defaultPart ? defaultPart.text : "";
        
        // Build characters part with HTML coloring
        const charactersHTML = promptData.characters
          .map((characterParts, index) => {
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
            
            const infoHTML = `<span class="highlight-character-${((index % 4) + 1)}">${infoText}</span>`;
            let actionHTML = "";
            if (actionText) {
              actionHTML = `, <span class="highlight-action-${((index % 4) + 1)}">${actionText}</span>`;
            }
            return infoHTML + actionHTML;
          })
          .join(" | ");
        
        // Format the prompt according to the new template with HTML coloring
        // character:[CHARACTER COUNT(S)], [QUALITY TAGS 1], [LINE BREAK]
        // [ARTIST TAGS],
        // background:[SCENE TAGS],
        // [QUALITY TAGS 2] [LINE BREAK]
        // | [CHARACTER PROMPT AS IS]
        
        let parts = [];
        
        // Part 1: Character section with subject count and quality tags
        let characterSection = "<span class='highlight-subject'>character:";
        if (subjectCountText) {
          characterSection += subjectCountText;
        }
        characterSection += "</span>";
        
        if (consistentTagsText || qualityTagsText) {
          if (subjectCountText) characterSection += ", ";
          if (consistentTagsText) {
            characterSection += `<span class="${getCssClass('consistent')}">${consistentTagsText}</span>`;
          }
          if (consistentTagsText && qualityTagsText) characterSection += ", ";
          if (qualityTagsText) {
            characterSection += `<span class="${getCssClass('quality')}">${qualityTagsText}</span>`;
          }
        }
        parts.push(characterSection);
        
        // Part 2: Artist tags
        if (artistText) {
          parts.push(`<span class="${getCssClass('artist')}">${artistText}</span>`);
        }
        
        // Part 3: Background section
        if (sceneText) {
          parts.push(`<span class="${getCssClass('scene')}">background: ${sceneText}</span>`);
        }
        
        // Part 4: Quality tags 2 (default text)
        if (defaultText) {
          parts.push(`<span class="${getCssClass('default')}">${defaultText}</span>`);
        }
        
        // Join with line breaks
        const headerHTML = parts.join("<br>");
        
        // NovelAI format with pipe separator
        const separator = "<br>| ";
        const finalHTML = headerHTML + separator + charactersHTML.replace(/(\| girl)(?=[^,])/g, "$1,");
        
        document.getElementById("output-preview").innerHTML = finalHTML;
      }
    } else {
      // Plain text version
      if (isSD) {
        // Stable Diffusion format
        // 1. Get consistent quality tags 1
        const consistentTags1 = promptData.header.find(part => part.type === "consistent");
        
        // 2. Get artist
        const artist = promptData.header.find(part => part.type === "artist");
        
        // 3. Get subject count
        const subjectCount = promptData.header.find(part => part.type === "subjectCount");
        
        // 4. Build character information without 'girl_' prefix
        const charactersText = promptData.characters
          .map(characterParts => {
            // Make sure we have at least a name and handle edge cases
            if (characterParts.length < 2) {
              return formatTextForMode(characterParts.map(p => p.text.trim()).join(", "));
            }
            
            // Get the name (second element, index 1)
            const name = characterParts[1].text.trim();
            
            // Extract the additional tags (excluding actions)
            const additionalTags = characterParts.slice(2)
              .filter(p => p.type !== "action")
              .map(p => p.text.trim())
              .join(", ");
            
            // Extract any action tags
            const actionText = characterParts
              .filter(p => p.type === "action")
              .map(p => p.text.trim())
              .join(", ");
            
            // Build character text: Name + Tags + Actions
            let charText = formatTextForMode(name);
            if (additionalTags) {
              charText += `, ${formatTextForMode(additionalTags)}`;
            }
            
            // Add actions if they exist
            if (actionText) {
              charText += `, ${formatTextForMode(actionText)}`;
            }
            
            return charText;
          })
          .join(", ");
        
        // 5. Get scene
        const scene = promptData.header.find(part => part.type === "scene");
        
        // 6. Get consistent quality tags 2
        const qualityTags = promptData.header.find(part => part.type === "quality");
        
        // Build final text in the correct order
        let parts = [];
        
        // Use sdText if available, otherwise fall back to text
        if (consistentTags1) {
          const consistentTagsText = consistentTags1.sdText || consistentTags1.text;
          parts.push(formatTextForMode(consistentTagsText));
        }
        
        if (artist) {
          const artistText = artist.sdText || artist.text;
          parts.push(formatTextForMode(artistText));
        }
        
        if (subjectCount) {
          const countText = subjectCount.sdText || subjectCount.text;
          parts.push(formatTextForMode(countText));
        }
        
        // Add characters
        parts.push(charactersText);
        
        // Add scene
        if (scene) {
          const sceneText = scene.sdText || scene.text;
          parts.push(formatTextForMode(sceneText));
        }
        
        // Add quality tags
        if (qualityTags) {
          const qualityText = qualityTags.sdText || qualityTags.text;
          parts.push(formatTextForMode(qualityText));
        }
        
        // Join everything with commas
        const finalText = parts.join(", ");
        document.getElementById("output-preview").innerText = finalText;
      } else {
        // NovelAI format - NEW format with character and background sections
        // Get subject count
        const subjectCount = promptData.header.find(part => part.type === "subjectCount");
        const subjectCountText = subjectCount ? subjectCount.text : "";
        
        // Get consistent tags
        const consistentTags = promptData.header.find(part => part.type === "consistent");
        const consistentTagsText = consistentTags ? consistentTags.text.replace(/{{{|}}}/g, '') : "";
        
        // Get quality tags
        const qualityTags = promptData.header.find(part => part.type === "quality");
        const qualityTagsText = qualityTags ? qualityTags.text : "";
        
        // Get artist
        const artist = promptData.header.find(part => part.type === "artist");
        const artistText = artist && artist.text ? 
          artist.text.split(",").map(a => `{artist:${a.trim()}}`).join(", ") : "";
        
        // Get scene tags
        const scene = promptData.header.find(part => part.type === "scene");
        const sceneText = scene ? scene.text : "";
        
        // Get default text (the quality tags 2)
        const defaultPart = promptData.header.find(part => part.type === "default");
        const defaultText = defaultPart ? defaultPart.text : "";
        
        // Build characters part
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
        
        // Format the prompt according to the new template
        // character:[CHARACTER COUNT(S)], [QUALITY TAGS 1], [LINE BREAK]
        // [ARTIST TAGS],
        // background:[SCENE TAGS],
        // [QUALITY TAGS 2] [LINE BREAK]
        // | [CHARACTER PROMPT AS IS]
        
        let parts = [];
        
        // Part 1: Character section with subject count and quality tags
        let characterSection = "character:";
        if (subjectCountText) {
          characterSection += subjectCountText;
        }
        if (consistentTagsText || qualityTagsText) {
          if (subjectCountText) characterSection += ", ";
          characterSection += consistentTagsText;
          if (consistentTagsText && qualityTagsText) characterSection += ", ";
          characterSection += qualityTagsText;
        }
        parts.push(characterSection);
        
        // Part 2: Artist tags
        if (artistText) {
          parts.push(artistText);
        }
        
        // Part 3: Background section
        if (sceneText) {
          parts.push("background: " + sceneText);
        }
        
        // Part 4: Quality tags 2 (default text)
        if (defaultText) {
          parts.push(defaultText);
        }
        
        // Join with line breaks
        const headerText = parts.join("\n");
        
        // NovelAI format with pipe separator
        const separator = "\n| ";
        const finalText = headerText + separator + charactersText.replace(/(\| girl)(?=[^,])/g, "$1,");
        
        document.getElementById("output-preview").innerText = finalText;
      }
    }
  }

  // Function to format text based on current mode
  function formatTextForMode(text) {
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
    let currentPromptData = generatePromptData();
    if (!currentPromptData) {
        return;
    }
    
    // Render the prompt
    renderPrompt(colorEnabled, currentPromptData);
    
    // Update saved state for re-renders when toggling options
    currentPromptData = JSON.parse(JSON.stringify(currentPromptData));
  });

  document.getElementById("copy-prompt-btn").addEventListener("click", function () {
    const promptText = document.getElementById("output-preview").innerText;
    if (promptText) {
        navigator.clipboard.writeText(promptText)
            .then(() => {
                showClipboardSuccessModal();
                
                // Log successful prompt copying
                logger.debug("Prompt copied to clipboard", {
                    textLength: promptText.length,
                    preview: promptText.substring(0, 100) + (promptText.length > 100 ? '...' : '')
                });
            })
            .catch(err => showClipboardErrorModal(err));
    } else {
        showClipboardErrorModal("No prompt to copy!");
    }
  });

  /***********************************
   * 6) Initialize Sortable for Character Blocks *
   ***********************************/
  const characterContainer = document.getElementById("characters-container");
  if (characterContainer) {
    Sortable.create(characterContainer, {
      animation: 150,
      handle: '.drag-handle, .custom-drag-handle',
      onEnd: function(evt) {
        evt.originalEvent && evt.originalEvent.stopPropagation();
      }
    });
  }

  /***********************************
   * 7) Expandable Prompt Preview (Toggle Expand/Collapse) *
   ***********************************/
  const toggleBtn = document.getElementById("toggle-expand");
  const outputContainer = document.getElementById("output-container");
  toggleBtn.addEventListener("click", function () {
    outputContainer.classList.toggle("expanded");
    toggleBtn.textContent = outputContainer.classList.contains("expanded") ? "Collapse" : "Expand";
  });

  /***********************************
   * 8) Fuzzy Search Integration (Fuse.js) *
   ***********************************/
  // Utility function to get candidate objects from characterData.
  function getSearchCandidates() {
    if (!window.characterData) {
      logger.warn('Character data not loaded yet');
      return [];
    }
    return window.characterData.map(item => {
      return {
        name: item.name,
        title: item.category,
        display: `${item.name} (${item.category})`,
        raw: item
      };
    });
  }

  // Initialize Fuse.js with candidate data.
  let fuse = null;
  
  // Initialize fuse only after constants are loaded
  function initializeSearch() {
    fuse = createFuse(getSearchCandidates());
  }

  // Wait for constants to be loaded before initializing search
  if (window.characterData) {
    initializeSearch();
  } else {
    window.addEventListener('constantsLoaded', initializeSearch);
  }

  const searchInput = document.getElementById("character-search");
  const suggestionsContainer = document.getElementById("search-suggestions");

  // Add keydown event listener for Tab and Enter keys
  searchInput.addEventListener("keydown", function(e) {
    // Check if there are any suggestion items
    const firstSuggestion = suggestionsContainer.querySelector('.suggestion-item');
    
    // Only proceed if there are suggestions and the key is Tab or Enter
    if (firstSuggestion && (e.key === 'Tab' || e.key === 'Enter')) {
      // Prevent default behavior (tab navigation or form submission)
      e.preventDefault();
      
      // Simulate a click on the first suggestion
      firstSuggestion.click();
    }
  });

  searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    suggestionsContainer.innerHTML = "";
    if (!query) return;

    // Make sure fuse is initialized
    if (!fuse) {
      initializeSearch();
    }

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
        const blockId = addCharacterBlock();
        if (blockId === null) {
          // Max characters reached, exit early
          return;
        }
        
        // Use a longer timeout to ensure DOM has been fully updated
        setTimeout(() => {
          // First, find the media type dropdown 
          const mediaTypeContainer = document.querySelector(`#character-${blockId} .custom-dropdown:nth-of-type(1)`);
          if (!mediaTypeContainer) {
            logger.error(`Media type dropdown for block ${blockId} not found`);
            return;
          }
          const mediaTypeDisplay = mediaTypeContainer.querySelector('.selected-display');
          
          // Set media type and update title options
          const mediaType = result.raw.mediaType;
          mediaTypeDisplay.textContent = mediaType;
          
          // Call updateTitleOptions to populate the title dropdown
          updateTitleOptions(blockId, mediaType);
          
          // After title options are updated, set the title display and update character dropdown
          setTimeout(() => {
            const titleContainer = document.querySelector(`#character-${blockId} .custom-dropdown:nth-of-type(2)`);
            if (!titleContainer) {
              logger.error(`Title dropdown for block ${blockId} not found`);
              return;
            }
            const titleDisplay = titleContainer.querySelector('.selected-display');
            const category = result.raw.category;
            titleDisplay.textContent = cleanDisplayName(category);
            
            // Call updateCharacterDropdown to populate the character dropdown
            updateCharacterDropdown(blockId, mediaType, category);
            
            // After character dropdown is updated, set the character
            setTimeout(() => {
              const charContainer = document.querySelector(`#character-${blockId} .custom-dropdown:nth-of-type(3)`);
              if (!charContainer) {
                logger.error(`Character dropdown for block ${blockId} not found`);
                return;
              }
              const charDisplay = charContainer.querySelector('.selected-display');
              const name = result.raw.name;
              
              // Update character display
              charDisplay.textContent = cleanDisplayName(name);
              
              // Trigger gender and enhancer updates
              updateGenderToggle(blockId, name);
              updateAgeUpToggle(blockId, name);
              updateEnhancerDropdown(blockId, name);
              
              // Explicitly populate default tag pills
              populateDefaultTagPills(blockId, result.raw);
              
              // Update the character block title
              const blockTitle = document.querySelector(`#character-${blockId} .block-title`);
              if (blockTitle) {
                blockTitle.textContent = `${cleanDisplayName(name)} (${cleanDisplayName(category)})`;
              }
              
              // Refresh action assignments
              if (typeof updateAllActionAssignments === "function") {
                setTimeout(updateAllActionAssignments, 100);
              }
              
              // Refresh action character options
              if (typeof refreshActionCharacterOptions === "function") {
                refreshActionCharacterOptions();
              }
            }, 25);
          }, 25);
        }, 25);
        
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

  // Add the missing function to refresh character options in action blocks
  function refreshActionCharacterOptions() {
    // Get all character blocks to extract character names
    const characterBlocks = document.querySelectorAll('.character-block');
    const characterOptions = [];
    
    // Extract character names from all character blocks
    characterBlocks.forEach(block => {
      const charSelect = block.querySelector('select[id^="char-select-"]');
      if (charSelect && charSelect.value) {
        characterOptions.push({
          id: block.id,
          name: charSelect.value
        });
      }
    });
    
    // Update all action blocks with the current character options
    const actionBlocks = document.querySelectorAll('.action-block');
    actionBlocks.forEach(block => {
      const characterSelect = block.querySelector('select[id^="action-character-"]');
      if (characterSelect) {
        // Store the currently selected value
        const currentValue = characterSelect.value;
        
        // Clear existing options except the first one (if it's a placeholder)
        while (characterSelect.options.length > 1 && characterSelect.options[0].value === '') {
          characterSelect.remove(1);
        }
        
        // If there's no placeholder, clear all options
        if (characterSelect.options.length > 0 && characterSelect.options[0].value !== '') {
          characterSelect.innerHTML = '';
        }
        
        // Add character options
        characterOptions.forEach(char => {
          const option = document.createElement('option');
          option.value = char.name;
          option.textContent = char.name;
          characterSelect.appendChild(option);
        });
        
        // Restore the previously selected value if it still exists
        if (currentValue) {
          for (let i = 0; i < characterSelect.options.length; i++) {
            if (characterSelect.options[i].value === currentValue) {
              characterSelect.selectedIndex = i;
              break;
            }
          }
        }
      }
    });
  }

  // Add a migration function to convert legacy custom character blocks to the new unified format
  function migrateCustomCharacterBlocks() {
    const legacyBlocks = document.querySelectorAll('.custom-character-block');
    if (legacyBlocks.length === 0) return;
    
    logger.info(`Migrating ${legacyBlocks.length} legacy custom character blocks to new format`);
    
    legacyBlocks.forEach(block => {
      try {
        // Extract the ID
        const blockId = block.id.split('-')[2];
        if (!blockId) return;
        
        // Create a new block with the unified approach
        const newBlockId = addCharacterBlock(true);
        
        // Move any existing custom tags/pills from old block to new
        const oldPills = block.querySelectorAll('.custom-tag-pill');
        if (oldPills.length > 0) {
          const newBlock = document.getElementById(`character-${newBlockId}`);
          if (newBlock) {
            const newPillContainer = newBlock.querySelector('.custom-pill-container');
            if (newPillContainer) {
              oldPills.forEach(pill => {
                const newPill = pill.cloneNode(true);
                
                // Ensure event listeners are reattached
                const removeBtn = newPill.querySelector('.custom-pill-remove');
                if (removeBtn) {
                  const origTag = pill.dataset.originalTag || pill.textContent.replace('×', '').trim();
                  removeBtn.addEventListener('click', () => {
                    newPill.remove();
                    // Trigger any update callbacks
                    if (typeof window.updateActionAssignmentsCallback === 'function') {
                      window.updateActionAssignmentsCallback();
                    }
                  });
                }
                
                newPillContainer.appendChild(newPill);
              });
            }
          }
        }
        
        // Preserve the title if it was customized
        const oldTitle = block.querySelector('.custom-block-title');
        if (oldTitle && oldTitle.textContent !== `Custom Character ${blockId}`) {
          const newBlock = document.getElementById(`character-${newBlockId}`);
          if (newBlock) {
            const newTitle = newBlock.querySelector('.block-title');
            if (newTitle) {
              newTitle.textContent = oldTitle.textContent;
            }
          }
        }
        
        // Remove the old block
        block.remove();
        
      } catch (err) {
        logger.error(`Error migrating custom character block: ${err.message}`);
      }
    });
  }
  
  // Call the migration function when the app initializes
  document.addEventListener('DOMContentLoaded', () => {
    // Existing initialization code
    
    // Migrate any legacy custom character blocks
    setTimeout(migrateCustomCharacterBlocks, 500);
  });

  // Function to get all character blocks, both regular and custom
  function getAllCharacterBlocks() {
    const charactersContainer = document.getElementById('characters-container');
    if (!charactersContainer) return [];
    return Array.from(charactersContainer.querySelectorAll('.character-block, .custom-character-block'));
  }
});