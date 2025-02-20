// Ensure populateSceneDropdown is defined in the global scope
function populateSceneDropdown() {
    const sceneSelect = document.getElementById("scene");
    if (!sceneSelect) return;
    sceneSelect.innerHTML = "";

    // Add default placeholder option
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- Select Scene --";
    sceneSelect.appendChild(placeholder);

    // Add special items first.
    ["NONE", "RANDOM"].forEach(val => {
        const option = document.createElement("option");
        option.value = val;
        option.textContent = val;
        sceneSelect.appendChild(option);
    });

    // Sort and add the scene options.
    const sortedScenes = scenes.slice().sort((a, b) => a.theme.localeCompare(b.theme));
    sortedScenes.forEach(sceneItem => {
        const option = document.createElement("option");
        option.value = sceneItem.theme;
        option.textContent = sceneItem.theme;
        sceneSelect.appendChild(option);
    });
}

let sceneExists = false;

function createSceneCard() {
    // Prevent creating more than one scene card.
    if (sceneExists) return;
    sceneExists = true;

    const container = document.getElementById("artist-scene-container");

    // Create the main scene card.
    const card = document.createElement("div");
    card.className = "selection-card scene-card";
    card.id = "scene-card";  // fixed ID for single scene card usage

    // Card header with drag handle and title.
    const header = document.createElement("div");
    header.className = "card-header";

    const dragHandle = document.createElement("span");
    dragHandle.className = "drag-handle";
    dragHandle.textContent = "≡";
    header.appendChild(dragHandle);

    const title = document.createElement("span");
    title.textContent = "Scene";
    header.appendChild(title);
    card.appendChild(header);

    // Card content with dropdown, custom input, and remove button.
    const content = document.createElement("div");
    content.className = "card-content";

    // Dropdown for scene selection (ID remains "scene" for compatibility).
    const select = document.createElement("select");
    select.id = "scene";
    content.appendChild(select);

    // Custom scene input.
    const customInput = document.createElement("input");
    customInput.type = "text";
    customInput.placeholder = "-- Custom Scene --";
    customInput.className = "custom-scene-input";
    content.appendChild(customInput);

    // Remove Scene button.
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove Scene";
    removeBtn.className = "remove-scene-btn";
    removeBtn.addEventListener("click", function () {
        container.removeChild(card);
        sceneExists = false; // allow adding another scene later
    });
    content.appendChild(removeBtn);

    card.appendChild(content);
    container.appendChild(card);

    // Populate the scene dropdown.
    populateSceneDropdown();
}

function getSelectedSceneTags() {
    // Get the scene select element.
    const sceneSelect = document.getElementById("scene");
    // Look for a custom scene input within the scene card.
    const customInput = document.querySelector("#scene-card input.custom-scene-input");

    // If custom input has a value, use that.
    if (customInput && customInput.value.trim() !== "") {
        return customInput.value.trim();
    }

    if (!sceneSelect) return "";
    const selected = sceneSelect.value;
    if (selected === "NONE") return "";
    if (selected === "RANDOM") {
        const randomIndex = Math.floor(Math.random() * scenes.length);
        console.log("Random scene chosen:", scenes[randomIndex].theme);
        return scenes[randomIndex].tags;
    }
    const found = scenes.find(s => s.theme === selected);
    return found ? found.tags : "";
}
