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

// Updated: Create an Artist Card with a custom input field.
function createArtistCard() {
  if (artistCount >= maxArtists) {
    alert("Maximum of " + maxArtists + " artists reached.");
    return;
  }
  artistCount++;
  const container = document.getElementById("artist-scene-container");
  const card = document.createElement("div");
  card.className = "selection-card artist-card";
  card.id = "artist-card-" + artistCount;

  // Card header with drag handle and title.
  const header = document.createElement("div");
  header.className = "card-header";
  const dragHandle = document.createElement("span");
  dragHandle.className = "drag-handle";
  dragHandle.textContent = "≡";
  header.appendChild(dragHandle);
  const title = document.createElement("span");
  title.textContent = "Artist";
  header.appendChild(title);
  card.appendChild(header);

  // Card content with dropdown, custom input, and remove button.
  const content = document.createElement("div");
  content.className = "card-content";
  
  // Dropdown for artist selection.
  const select = document.createElement("select");
  select.id = "artist-select-" + artistCount;
  populateArtistOption(select);
  content.appendChild(select);

  // Custom artist input with wrapper and clear icon
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "custom-search-wrapper";
  
  const customInput = document.createElement("input");
  customInput.type = "text";
  customInput.placeholder = "-- Custom Artist --";
  customInput.className = "custom-tag-input custom-artist-input";
  searchWrapper.appendChild(customInput);
  
  // Add clear icon
  const clearIcon = document.createElement("span");
  clearIcon.className = "custom-clear-icon";
  clearIcon.textContent = "✖";
  clearIcon.addEventListener("click", function() {
      customInput.value = "";
  });
  searchWrapper.appendChild(clearIcon);
  
  content.appendChild(searchWrapper);

  // Remove Artist button.
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "Remove Artist";
  removeBtn.addEventListener("click", function () {
    container.removeChild(card);
    artistCount--;
  });
  content.appendChild(removeBtn);
  
  card.appendChild(content);
  container.appendChild(card);
}

// Updated: Get selected artists from all artist cards.
function getSelectedArtists() {
  let selectedArtists = [];
  const cards = document.querySelectorAll("#artist-scene-container .artist-card");
  cards.forEach(card => {
    // Use custom artist if provided.
    const customInput = card.querySelector(".custom-artist-input");
    if (customInput && customInput.value.trim() !== "") {
      selectedArtists.push(customInput.value.trim());
    } else {
      const select = card.querySelector("select[id^='artist-select-']");
      if (select && select.value) {
        let value = select.value;
        if (value === "RANDOM") {
          const validArtists = artists.filter(a => a !== "NONE" && a !== "RANDOM");
          value = validArtists[Math.floor(Math.random() * validArtists.length)];
        }
        selectedArtists.push(value);
      }
    }
  });
  return selectedArtists;
}
