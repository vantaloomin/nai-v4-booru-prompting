// Import artist tag utilities
import { loadArtistDetails, formatArtist } from './artistUtils.js';
import { initArtistAutocomplete, addArtistAutocompleteStyling } from './autocomplete.js';

// Global variable for multi-artist selection
let artistCount = 0;
const maxArtists = 4; // adjust as needed

// Function to update callback when artist tags change
function updateArtistTagsCallback() {
    console.log("Artist tags updated");
    // Additional callback functionality can be added here
}

// Export functions to global scope for backward compatibility
window.createArtistCard = createArtistCard;
window.getSelectedArtists = getSelectedArtists;

// Initialize artist tag utilities when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load artist details
    loadArtistDetails()
        .then(() => {
            console.log("Artist module initialized");
        })
        .catch(error => {
            console.error("Error initializing Artist module:", error);
        });
});

/**
 * Creates an Artist Card with autocomplete functionality
 */
export function createArtistCard() {
    if (artistCount >= maxArtists) {
        alert("Maximum of " + maxArtists + " artists reached.");
        return;
    }
    artistCount++;
    const container = document.getElementById("artist-scene-container");
    const card = document.createElement("div");
    card.className = "selection-card artist-card";
    card.id = "artist-card-" + artistCount;

    // Card header with drag handle and title
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

    // Card content with dropdown, custom input, and remove button
    const content = document.createElement("div");
    content.className = "card-content";
    
    // Dropdown for predefined artist selection
    const select = document.createElement("select");
    select.id = "artist-select-" + artistCount;
    populateArtistOption(select);
    select.addEventListener("change", function() {
        // When dropdown is selected, clear any pills
        const pillContainer = card.querySelector(".artist-pill-container");
        if (pillContainer) {
            pillContainer.innerHTML = "";
        }
    });
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
    
    // Add suggestions container for autocomplete
    const suggestionContainer = document.createElement('div');
    suggestionContainer.className = 'artist-suggestions-list';
    searchWrapper.appendChild(suggestionContainer);
    
    content.appendChild(searchWrapper);
    
    // Add pill container for selected tags
    const pillContainer = document.createElement('div');
    pillContainer.className = 'artist-pill-container';
    content.appendChild(pillContainer);
    
    // Initialize tag autocomplete
    initArtistAutocomplete(
        customInput,
        suggestionContainer,
        pillContainer,
        updateArtistTagsCallback
    );
    
    // Add autocomplete styling
    addArtistAutocompleteStyling();

    // Remove Artist button
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

/**
 * Populate a given dropdown with sorted artist options.
 * 
 * @param {HTMLSelectElement} dropdown - The dropdown element to populate
 */
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
      .sort((a, b) => formatArtist(a).localeCompare(formatArtist(b)));
  
    sortedArtists.forEach(a => {
      const option = document.createElement("option");
      option.value = a;
      option.textContent = formatArtist(a);
      dropdown.appendChild(option);
    });
}

/**
 * Get selected artists from all artist cards.
 * 
 * @return {Array} - Array of selected artist strings
 */
export function getSelectedArtists() {
    let selectedArtists = [];
    const cards = document.querySelectorAll("#artist-scene-container .artist-card");
    cards.forEach(card => {
        // Check for pills first
        const pillContainer = card.querySelector(".artist-pill-container");
        if (pillContainer && pillContainer.children.length > 0) {
            const pills = pillContainer.querySelectorAll('.custom-tag-pill');
            const artistTags = Array.from(pills).map(pill => pill.dataset.originalTag);
            selectedArtists = selectedArtists.concat(artistTags);
        } else {
            // Use custom artist if provided
            const customInput = card.querySelector(".custom-artist-input");
            if (customInput && customInput.value.trim() !== "") {
                selectedArtists.push(customInput.value.trim());
            } else {
                // Otherwise use dropdown selection
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
        }
    });
    return selectedArtists;
} 