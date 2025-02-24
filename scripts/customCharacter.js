// Global variable for our Fuse instance for custom tags.
let customTagFuse = null;
// Declare the global variable for all tags.
let allTags = [];

// Fetch and load the tag list from the JSON file.
fetch('scripts/allTags.json')
    .then(response => response.json())
    .then(data => {
        allTags = data;
        console.log("allTags loaded:", allTags.length);
        // Initialize Fuse after tags are loaded
        initCustomTagFuse();
    })
    .catch(error => console.error("Error loading allTags:", error));

/**
 * Initialize the Fuse instance for custom tag search
 */
function initCustomTagFuse() {
    const customFuseOptions = {
        keys: [
            { name: 'name', weight: 2 }
        ],
        includeScore: true,
        threshold: 0.75, // more lenient so "hair" can match "long_hair"
        ignoreLocation: true,
        minMatchCharLength: 1
    };

    // Create Fuse instance once tags are loaded
    customTagFuse = new Fuse(allTags, customFuseOptions);
    console.log("Custom tag Fuse initialized");
}

/**
 * initCustomTagAutocomplete
 *
 * Sets up autocomplete on the provided input element. As the user types,
 * it uses Fuse search on the global allTags array to display matching tag suggestions.
 * When a suggestion is clicked, the input field is filled with that suggestion.
 *
 * @param {HTMLInputElement} inputEl - The custom tag input element.
 * @param {HTMLElement} suggestionContainer - The container element for displaying suggestions.
 */
function initCustomTagAutocomplete(inputEl, suggestionContainer) {
    // Listen for input events.
    inputEl.addEventListener('input', function () {
        const query = inputEl.value.trim();
        console.log("Custom Tag Input:", query);
        suggestionContainer.innerHTML = "";

        if (!query || !customTagFuse) return;

        // Search using Fuse
        const results = customTagFuse.search(query);
        console.log("Fuse results:", results);

        // Clear any previous positioning
        suggestionContainer.style.display = 'block';
        
        // Take the top 5
        results.slice(0, 5).forEach((result, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = "custom-suggestion-item";
            // Add a highlighted class to the first item for Tab selection
            if (index === 0) {
                itemDiv.classList.add('first-suggestion');
            }
            itemDiv.textContent = result.item.name;
            itemDiv.addEventListener('click', function () {
                inputEl.value = result.item.name;
                suggestionContainer.innerHTML = "";
            });
            suggestionContainer.appendChild(itemDiv);
        });
    });

    // Add Tab key functionality to select the first suggestion
    inputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && suggestionContainer.children.length > 0) {
            e.preventDefault(); // Prevent default tab behavior
            const firstSuggestion = suggestionContainer.querySelector('.first-suggestion');
            if (firstSuggestion) {
                inputEl.value = firstSuggestion.textContent;
                suggestionContainer.innerHTML = "";
            }
        }
    });

    // Clear suggestions on outside click
    document.addEventListener('click', e => {
        if (!inputEl.contains(e.target) && !suggestionContainer.contains(e.target)) {
            suggestionContainer.innerHTML = "";
        }
    });
}

/**
 * customCharacter.js
 * 
 * Creates a custom character block with a dedicated custom search input
 * and suggestions dropdown, using unique class names to avoid collisions
 * with the standard character dropdown.
 */

function addCustomCharacterBlock() {
    if (typeof characterCount === 'undefined') {
        window.characterCount = 0;
    }
    if (typeof maxCharacters === 'undefined') {
        window.maxCharacters = 4;
    }
    if (characterCount >= maxCharacters) {
        alert(`Maximum of ${maxCharacters} characters reached.`);
        return;
    }

    characterCount++;
    const blockId = characterCount;

    // Main container for the custom character block
    const container = document.getElementById('characters-container');

    const blockDiv = document.createElement('div');
    blockDiv.className = 'custom-character-block';
    blockDiv.id = `custom-character-${blockId}`;

    // --- Header Section ---
    const headerDiv = document.createElement('div');
    headerDiv.className = 'custom-block-header';

    // Drag handle
    const dragHandle = document.createElement('span');
    dragHandle.className = 'custom-drag-handle';
    dragHandle.textContent = '≡';
    // Prevent toggle if user drags
    dragHandle.addEventListener('click', (e) => e.stopPropagation());
    headerDiv.appendChild(dragHandle);

    // Title
    const titleSpan = document.createElement('span');
    titleSpan.className = 'custom-block-title';
    titleSpan.textContent = `Custom Character ${blockId}`;
    headerDiv.appendChild(titleSpan);

    // Toggle icon
    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'custom-toggle-icon';
    toggleIcon.textContent = '▼';
    headerDiv.appendChild(toggleIcon);

    // Action Drag Handle
    const actionDragHandle = document.createElement('span');
    actionDragHandle.className = 'action-drag-handle';
    actionDragHandle.textContent = "🡆";
    actionDragHandle.setAttribute("draggable", "true");
    actionDragHandle.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData("text/plain", blockId.toString());
        e.dataTransfer.effectAllowed = "move";
        e.stopPropagation();
    });
    headerDiv.appendChild(actionDragHandle);

    blockDiv.appendChild(headerDiv);

    // --- Content Section ---
    const contentDiv = document.createElement('div');
    contentDiv.className = 'custom-block-content';

    // Tag label
    const tagLabel = document.createElement('label');
    tagLabel.textContent = 'Custom Tags:';
    contentDiv.appendChild(tagLabel);

    // Search wrapper
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'custom-search-wrapper';
    contentDiv.appendChild(searchWrapper);

    // Tag input
    const tagInput = document.createElement('input');
    tagInput.type = 'text';
    tagInput.placeholder = 'Type tag here...';
    tagInput.className = 'custom-tag-input';
    searchWrapper.appendChild(tagInput);

    // Optional clear icon
    const clearIcon = document.createElement('span');
    clearIcon.className = 'custom-clear-icon';
    clearIcon.textContent = '✖';
    clearIcon.addEventListener('click', () => {
        tagInput.value = '';
        suggestionContainer.innerHTML = '';
    });
    searchWrapper.appendChild(clearIcon);

    // Suggestions list container
    const suggestionContainer = document.createElement('div');
    suggestionContainer.className = 'custom-suggestions-list';
    searchWrapper.appendChild(suggestionContainer);

    // Initialize autocomplete
    initCustomTagAutocomplete(tagInput, suggestionContainer);

    // Pill container
    const pillContainer = document.createElement('div');
    pillContainer.className = 'custom-pill-container';
    contentDiv.appendChild(pillContainer);

    // Listen for Enter key to add a pill
    tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const text = tagInput.value.trim();
            if (!text) return;
            createTagPill(text, pillContainer);
            tagInput.value = '';
            suggestionContainer.innerHTML = '';
            
            // Update action assignments when tags are added
            if (typeof updateAllActionAssignments === 'function') {
                setTimeout(updateAllActionAssignments, 100);
            }
        }
    });

    blockDiv.appendChild(contentDiv);

    // --- Remove Button ---
    const removeBtnContainer = document.createElement('div');
    removeBtnContainer.className = 'custom-remove-btn-container';
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove Character';
    removeBtn.addEventListener('click', () => {
        container.removeChild(blockDiv);
        characterCount--;
        if (typeof updateAllActionAssignments === 'function') {
            updateAllActionAssignments();
        }
    });
    removeBtnContainer.appendChild(removeBtn);
    blockDiv.appendChild(removeBtnContainer);

    // Append to the DOM
    container.appendChild(blockDiv);

    // Make the entire character block a drop target for action assignments
    blockDiv.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    blockDiv.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const sourceId = e.dataTransfer.getData("text/plain");
        const targetId = blockId.toString();
        if (sourceId && sourceId !== targetId) {
            showActionSelectionPopup(sourceId, targetId);
        }
    });

    // Collapsible logic
    headerDiv.addEventListener('click', () => {
        if (contentDiv.style.display === 'none') {
            contentDiv.style.display = '';
            toggleIcon.textContent = '▼';
        } else {
            contentDiv.style.display = 'none';
            toggleIcon.textContent = '▲';
        }
    });

    // After appending to DOM, make sure to update action assignments
    if (typeof updateAllActionAssignments === 'function') {
        setTimeout(updateAllActionAssignments, 100);
    }

    // Update the CSS for suggestions positioning
    if (!document.getElementById('custom-suggestions-style')) {
        const style = document.createElement('style');
        style.id = 'custom-suggestions-style';
        style.textContent = `
            .custom-search-wrapper {
                position: relative;
            }
            .custom-suggestions-list {
                position: absolute;
                top: 100%; /* Position right below the search input */
                left: 0;
                background: #333;
                border: 1px solid #555;
                border-top: none;
                max-height: 200px;
                overflow-y: auto;
                width: 100%;
                z-index: 1000;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }
            .custom-suggestion-item {
                padding: 8px 12px;
                cursor: pointer;
                color: #ddd;
            }
            .custom-suggestion-item:hover, .first-suggestion {
                background-color: #444;
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * createTagPill
 * Helper function to create a 'pill' with an 'X' remove button
 */
function createTagPill(tagText, pillContainer) {
    const pill = document.createElement('span');
    pill.className = 'custom-tag-pill';
    pill.textContent = tagText;

    // Remove 'X' button
    const removeX = document.createElement('span');
    removeX.className = 'custom-tag-remove';
    removeX.textContent = '×';
    removeX.addEventListener('click', () => {
        pillContainer.removeChild(pill);
        
        // Update action assignments when a tag is removed
        if (typeof updateAllActionAssignments === 'function') {
            setTimeout(updateAllActionAssignments, 100);
        }
    });
    
    pill.appendChild(removeX);
    pillContainer.appendChild(pill);
}
  