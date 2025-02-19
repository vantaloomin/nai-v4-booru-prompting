document.addEventListener("DOMContentLoaded", function() {
    // Initialize the scene dropdown.
    populateSceneDropdown();

    // Wire up the multi-artist system.
    document.getElementById('add-artist-btn').addEventListener('click', addArtistBlock);
    // Optionally, create a default artist block:
    // addArtistBlock();

    // Wire up character add button.
    document.getElementById('add-character-btn').addEventListener('click', function() {
        addCharacterBlock();
        refreshActionCharacterOptions();
    });
    document.getElementById('add-rand-char-btn').addEventListener('click', function() {
        addRandomCharacterBlock("all");
    });
    document.getElementById('add-rand-vg-btn').addEventListener('click', function() {
        addRandomCharacterBlock("vg");
    });
    document.getElementById('add-rand-media-btn').addEventListener('click', function() {
        addRandomCharacterBlock("media");
    });
    // Wire up the full random prompt button.
    document.getElementById('full-random-btn').addEventListener('click', function() {
        generateFullRandomPrompt();
    });

    // Wire up action button.
    document.getElementById('add-action-btn').addEventListener('click', function() {
        addActionBlock();
    });


    // Generate Prompt button.
    document.getElementById('generate-btn').addEventListener('click', function() {
        const prompt = generatePrompt();
        document.getElementById('output').value = prompt;
    });

    // Copy Prompt button.
    document.getElementById('copy-prompt-btn').addEventListener('click', function() {
        const promptText = document.getElementById('output').value;
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
});