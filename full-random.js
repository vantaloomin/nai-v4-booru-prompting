function generateFullRandomPrompt() {
    // Get number of random characters from slider.
    const slider = document.getElementById('random-char-slider');
    const numCharacters = parseInt(slider.value, 10);

    // Clear existing character blocks and reset characterCount.
    const charContainer = document.getElementById('characters-container');
    charContainer.innerHTML = "";
    characterCount = 0;

    // Clear existing actions.
    const actionContainer = document.getElementById('actions-container');
    actionContainer.innerHTML = "";
    actionCount = 0;

    // Add numCharacters random character blocks.
    for (let i = 0; i < numCharacters; i++) {
        addRandomCharacterBlock("all");
    }

    // Clear and add one random artist block.
    const artistContainer = document.getElementById("artists-container");
    artistContainer.innerHTML = "";
    artistCount = 0;
    addArtistBlock();
    const artistSelect = document.getElementById("artist-select-1");
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
        addActionBlock(true); // bypass check in full random mode
        // For the first action block, set random action values.
        const actionBlock = document.getElementById("action-block-1");
        if (actionBlock) {
            const actionSelect = actionBlock.querySelector(".action-select");
            if (actionSelect) {
                const randomAction = actionTags[Math.floor(Math.random() * actionTags.length)];
                actionSelect.value = randomAction;
            }
            // Randomly choose mode.
            const radios = actionBlock.querySelectorAll(`input[name="action-mode-1"]`);
            radios.forEach(radio => {
                radio.checked = (Math.random() < 0.5 && radio.value === "mutual") ? true : (radio.value === "st");
            });
            checkMutualAutoAssign(1); // if the random action block gets id "action-block-1"

            // Populate source and target assignments.
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

    // Wait for asynchronous updates to finish.
    setTimeout(() => {
        // Refresh action character assignments.
        updateAllActionAssignments();
        const prompt = generatePrompt();
        document.getElementById('output').value = prompt;
    }, 1500);
}