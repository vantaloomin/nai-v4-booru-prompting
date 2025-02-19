document.addEventListener("DOMContentLoaded", function () {
    /***********************
     * Initialization Code *
     ***********************/

    // Initialize the scene dropdown (populated from scene.js)
    populateSceneDropdown();

    /*******************************
     * Set Up Collapsible Sections *
     *******************************/
    document.querySelectorAll(".collapsible-header").forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Toggle the visibility of the collapsible content.
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                this.textContent = this.textContent.replace("▼", "▲");
            } else {
                content.style.display = "none";
                this.textContent = this.textContent.replace("▲", "▼");
            }
        });

        // Initially hide all collapsible content.
        header.nextElementSibling.style.display = "none";
    });

    /**************************************
     * Wire Up Buttons and UI Interactions *
     **************************************/

    // Multi-artist system: add artist block when button is clicked.
    document.getElementById('add-artist-btn').addEventListener('click', addArtistBlock);

    // Character addition: add character block and refresh action options.
    document.getElementById('add-character-btn').addEventListener('click', function () {
        addCharacterBlock();
        refreshActionCharacterOptions();
    });

    // Random character buttons for all, video games, and media respectively.
    document.getElementById('add-rand-char-btn').addEventListener('click', function () {
        addRandomCharacterBlock("all");
    });
    document.getElementById('add-rand-vg-btn').addEventListener('click', function () {
        addRandomCharacterBlock("vg");
    });
    document.getElementById('add-rand-media-btn').addEventListener('click', function () {
        addRandomCharacterBlock("media");
    });

    // Full random prompt: generate a complete random prompt.
    document.getElementById('full-random-btn').addEventListener('click', function () {
        generateFullRandomPrompt();
    });

    // Action block addition: add a new action block.
    document.getElementById('add-action-btn').addEventListener('click', function () {
        addActionBlock();
    });

    /*********************************
     * Updated Prompt Generation UI  *
     *********************************/

    // Generate Prompt button: call generatePrompt() and display result
    // in the new content-editable div (#output-preview).
    document.getElementById('generate-btn').addEventListener('click', function () {
        const prompt = generatePrompt(); // generatePrompt() is defined in prompt.js
        // Display the prompt as plain text in the output-preview div.
        document.getElementById("output-preview").innerText = prompt;
    });

    // Copy Prompt button: copy text from the new output-preview div.
    document.getElementById('copy-prompt-btn').addEventListener('click', function () {
        const promptText = document.getElementById("output-preview").innerText;
        if (promptText) {
            navigator.clipboard.writeText(promptText).then(() => {
                alert("Prompt copied to clipboard!");
            }).catch(err => {
                alert("Failed to copy prompt: " + err);
            });
        } else {
            alert("No prompt to copy!");
        }
    });

    /******************************************
     * Initialize Sortable (Drag-and-Drop) UI *
     ******************************************/
    const characterContainer = document.getElementById("characters-container");
    if (characterContainer) {
        Sortable.create(characterContainer, {
            animation: 150,
            handle: '.drag-handle'
        });
    }

    /********************************************
     * New: Expandable Prompt Preview Function  *
     ********************************************/

    // Get references to the new toggle button and output container.
    const toggleBtn = document.getElementById("toggle-expand");
    const outputContainer = document.getElementById("output-container");

    // Set up the toggle button to expand/collapse the prompt preview.
    toggleBtn.addEventListener("click", function () {
        // Toggle the "expanded" class on the container.
        outputContainer.classList.toggle("expanded");
        // Update the button text based on the current state.
        if (outputContainer.classList.contains("expanded")) {
            toggleBtn.textContent = "Collapse";
        } else {
            toggleBtn.textContent = "Expand";
        }
    });
});
