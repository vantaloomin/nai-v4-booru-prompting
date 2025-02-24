// artist.js - Legacy file kept for backward compatibility
// Most functionality has been moved to scripts/artist/index.js

// Global variables for multi-artist selection.
let artistCount = 0;
const maxArtists = 4; // adjust as needed

// Helper: Clean display name for artists.
function cleanArtistDisplay(name) {
  if (name === "NONE" || name === "RANDOM") return name;
  let firstPart = name.split(",")[0].trim();
  firstPart = firstPart.replace(/^(artist:|by\s+)/i, "").trim();
  firstPart = firstPart.replace(/\s*\([^)]*\)/g, "").trim();
  return firstPart.split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Populate a given dropdown with sorted artist options.
function populateArtistOption(dropdown) {
  dropdown.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "-- Select Artist --";
  dropdown.appendChild(defaultOption);

  const specialItems = ["NONE", "RANDOM"];
  specialItems.forEach(val => {
    const option = document.createElement("option");
    option.value = val;
    option.textContent = val;
    dropdown.appendChild(option);
  });

  const sortedArtists = artists
    .filter(a => !specialItems.includes(a))
    .slice()
    .sort((a, b) => cleanArtistDisplay(a).localeCompare(cleanArtistDisplay(b)));

  sortedArtists.forEach(a => {
    const option = document.createElement("option");
    option.value = a;
    option.textContent = cleanArtistDisplay(a);
    dropdown.appendChild(option);
  });
}

// For backward compatibility - these functions will be overridden by the module
// but we keep them here as fallbacks in case the module fails to load
function createArtistCard() {}
function getSelectedArtists() { return []; }
