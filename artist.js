// Global variables for multi-artist selection.
let artistCount = 0;
const maxArtists = 4; // adjust as needed

// Helper: Clean display name for artists.
// This function will use only the text before the first comma and remove prefixes like "artist:" or "by".
// It will not affect the underlying full string.
function cleanArtistDisplay(name) {
    if (name === "NONE" || name === "RANDOM") return name;
    // Split on the first comma.
    let firstPart = name.split(",")[0].trim();
    // Remove "artist:" or "by" prefixes (case-insensitive).
    firstPart = firstPart.replace(/^(artist:|by\s+)/i, "").trim();
    // Remove any parentheses and their content.
    firstPart = firstPart.replace(/\s*\([^)]*\)/g, "").trim();
    // Title-case each word.
    return firstPart.split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

// Populate a given dropdown with artist options from the global artists constant.
function populateArtistOption(dropdown) {
    dropdown.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Artist --";
    dropdown.appendChild(defaultOption);

    artists.forEach(a => {
        const option = document.createElement("option");
        option.value = a; // underlying full value remains unchanged
        option.textContent = cleanArtistDisplay(a);
        dropdown.appendChild(option);
    });
}

// Create and add an artist block.
function addArtistBlock() {
    if (artistCount >= maxArtists) {
        alert("Maximum of " + maxArtists + " artists reached.");
        return;
    }
    artistCount++;
    const container = document.getElementById("artists-container");
    const div = document.createElement("div");
    div.className = "artist-block";
    div.id = "artist-block-" + artistCount;

    // Create dropdown for artist selection.
    const select = document.createElement("select");
    select.id = "artist-select-" + artistCount;
    populateArtistOption(select);
    div.appendChild(select);

    // Add a remove button.
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove Artist";
    removeBtn.addEventListener("click", function() {
        container.removeChild(div);
        artistCount--;
    });
    div.appendChild(removeBtn);

    container.appendChild(div);
}

function getSelectedArtists() {
  let selectedArtists = [];
  for (let i = 1; i <= artistCount; i++) {
    const select = document.getElementById("artist-select-" + i);
    if (select && select.value) {
      let value = select.value;
      if (value === "RANDOM") {
        // Pick a random artist from the global artists array, excluding "NONE" and "RANDOM"
        const validArtists = artists.filter(a => a !== "NONE" && a !== "RANDOM");
        value = validArtists[Math.floor(Math.random() * validArtists.length)];
      }
      selectedArtists.push(value);
    }
  }
  return selectedArtists;
}
