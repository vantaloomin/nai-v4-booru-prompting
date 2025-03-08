function generateFullRandomPrompt() {
    // Get number of random characters from slider.
    const slider = document.getElementById('random-char-slider');
    const numCharacters = parseInt(slider.value, 10);

    // Clear existing character blocks and reset characterCount.
    const charContainer = document.getElementById('characters-container');
    charContainer.innerHTML = "";
    
    // Reset both standard and custom character counts
    characterCount = 0;
    
    // Also reset the character count in the state modules if their reset functions are available
    if (typeof window.setCharacterCount === 'function') {
        window.setCharacterCount(0);
    }
    
    if (typeof window.setCustomCharacterCount === 'function') {
        window.setCustomCharacterCount(0);
    }

    // Clear existing actions.
    const actionContainer = document.getElementById('actions-container');
    if (actionContainer) {
        actionContainer.innerHTML = "";
    }
    if (typeof actionCount !== 'undefined') {
        actionCount = 0;
    }

    // Add numCharacters random character blocks.
    for (let i = 0; i < numCharacters; i++) {
        addRandomCharacterBlock("all");
    }

    // Clear and add one random artist block in the new combined container.
    const artistContainer = document.getElementById("artist-scene-container");
    // Remove existing artist cards.
    const existingArtists = artistContainer.querySelectorAll(".artist-card");
    existingArtists.forEach(card => card.remove());
    artistCount = 0;
    createArtistCard();
    const artistSelect = document.getElementById("artist-select-" + artistCount);
    if (artistSelect) {
        const validArtists = artists.filter(a => a !== "NONE" && a !== "RANDOM");
        const randomArtist = validArtists[Math.floor(Math.random() * validArtists.length)];
        artistSelect.value = randomArtist;
    }

    // Set the scene dropdown to RANDOM.
    const sceneSelect = document.getElementById("scene");
    if (sceneSelect) {
        sceneSelect.value = "RANDOM";
    }

    // If there are at least 2 characters, add a random action block.
    if (numCharacters >= 2) {
        addActionBlock(true);
        const actionBlock = document.getElementById("action-block-1");
        if (actionBlock) {
            const actionSelect = actionBlock.querySelector(".action-select");
            if (actionSelect) {
                const randomAction = actionTags[Math.floor(Math.random() * actionTags.length)];
                actionSelect.value = randomAction;
            }
            const radios = actionBlock.querySelectorAll(`input[name="action-mode-1"]`);
            radios.forEach(radio => {
                radio.checked = (Math.random() < 0.5 && radio.value === "mutual") ? true : (radio.value === "st");
            });
            checkMutualAutoAssign(1);
            const sourceSelect = actionBlock.querySelector(".action-source");
            const targetSelect = actionBlock.querySelector(".action-target");
            const options = getCharacterOptions();
            if (options.length >= 2) {
                const idx1 = Math.floor(Math.random() * options.length);
                let idx2;
                do {
                    idx2 = Math.floor(Math.random() * options.length);
                } while (idx2 === idx1);
                sourceSelect.value = options[idx1].value;
                targetSelect.value = options[idx2].value;
            }
        }
    }

    setTimeout(() => {
        updateAllActionAssignments();
        const prompt = generatePrompt();
        document.getElementById('output').value = prompt;
    }, 1500);
}
