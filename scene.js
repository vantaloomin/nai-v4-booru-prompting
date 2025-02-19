// Modified: Populate scene dropdown with sorted scene themes.
function populateSceneDropdown() {
    const sceneSelect = document.getElementById("scene");

    // Add special items first.
    ["NONE", "RANDOM"].forEach(val => {
        const option = document.createElement("option");
        option.value = val;
        option.textContent = val;
        sceneSelect.appendChild(option);
    });

    // Sort the scenes (assumed to be objects with a 'theme' property)
    const sortedScenes = scenes.slice().sort((a, b) => a.theme.localeCompare(b.theme));

    sortedScenes.forEach(sceneItem => {
        const option = document.createElement("option");
        option.value = sceneItem.theme;
        option.textContent = sceneItem.theme;
        sceneSelect.appendChild(option);
    });
}

function getSelectedSceneTags() {
    const sceneSelect = document.getElementById("scene");
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
