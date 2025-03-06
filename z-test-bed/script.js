// Test-bed JavaScript for Character Card UX

document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  const characterSearch = document.getElementById('character-search');
  const clearSearch = document.getElementById('clear-search');
  const searchResults = document.getElementById('search-results');
  const mediaFilterBtn = document.getElementById('media-filter-btn');
  const mediaFilterOptions = document.getElementById('media-filter-options');
  const filterOptions = document.querySelectorAll('.filter-option');
  
  // Initialize current filter state
  let currentMediaFilter = 'all';
  
  // Set up the character data for searching
  const characterSearchData = [];
  
  // Extract character data from the original constants.js
  if (typeof characterData !== 'undefined') {
    characterData.forEach(character => {
      characterSearchData.push({
        name: character.name,
        category: character.category || '',
        mediaType: character.mediaType || 'Undefined',
        defaultGender: character.defaultGender || 'other',
        ageUpAvailable: character.ageUpAvailable || false,
        enhancers: character.enhancers || [],
        mainTags: character.mainTags || ''
      });
    });
  }
  
  // Initialize Fuse.js for fuzzy search if available
  let fuse;
  if (typeof Fuse !== 'undefined' && characterSearchData.length > 0) {
    fuse = new Fuse(characterSearchData, {
      keys: ['name', 'category', 'mediaType', 'mainTags'],
      threshold: 0.3,
      ignoreLocation: true
    });
  }
  
  // Media filter button click
  mediaFilterBtn.addEventListener('click', function() {
    mediaFilterOptions.classList.toggle('show');
  });
  
  // Filter option selection
  filterOptions.forEach(option => {
    option.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      currentMediaFilter = value;
      mediaFilterBtn.textContent = `Media Type: ${value === 'all' ? 'All' : value}`;
      mediaFilterOptions.classList.remove('show');
      
      // If search is active, filter the results
      if (characterSearch.value.trim() !== '') {
        performSearch(characterSearch.value);
      }
    });
  });
  
  // Search input handler
  characterSearch.addEventListener('input', function() {
    const query = this.value.trim();
    if (query === '') {
      searchResults.classList.remove('show');
      searchResults.innerHTML = '';
    } else {
      performSearch(query);
    }
  });
  
  // Focus handler to show dropdown
  characterSearch.addEventListener('focus', function() {
    const query = this.value.trim();
    if (query !== '') {
      performSearch(query);
    }
  });
  
  // Clear search button
  clearSearch.addEventListener('click', function() {
    characterSearch.value = '';
    searchResults.classList.remove('show');
    searchResults.innerHTML = '';
  });
  
  // Search functionality
  function performSearch(query) {
    if (!fuse || query === '') {
      searchResults.classList.remove('show');
      return;
    }
    
    // Perform the fuzzy search
    let searchResultItems = fuse.search(query);
    
    // Filter by media type if not 'all'
    if (currentMediaFilter !== 'all') {
      searchResultItems = searchResultItems.filter(item => 
        item.item.mediaType === currentMediaFilter
      );
    }
    
    // Display results
    searchResults.innerHTML = '';
    
    if (searchResultItems.length === 0) {
      const noResults = document.createElement('div');
      noResults.classList.add('search-result-item');
      noResults.textContent = 'No results found';
      searchResults.appendChild(noResults);
    } else {
      searchResultItems.slice(0, 15).forEach(result => { // Limit to 15 results for performance
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('result-name');
        nameSpan.textContent = result.item.name;
        
        const categorySpan = document.createElement('span');
        categorySpan.classList.add('result-category');
        categorySpan.textContent = result.item.mediaType;
        
        resultItem.appendChild(nameSpan);
        resultItem.appendChild(categorySpan);
        
        // Add click handler to select this character
        resultItem.addEventListener('click', function() {
          selectCharacter(result.item);
          searchResults.classList.remove('show');
          characterSearch.value = '';
        });
        
        searchResults.appendChild(resultItem);
      });
    }
    
    searchResults.classList.add('show');
  }
  
  // Select a character and populate the sample card
  function selectCharacter(character) {
    // Update the sample character card
    document.getElementById('character-name').textContent = character.name;
    document.querySelector('.media-badge').textContent = character.mediaType;
    
    // Set gender based on defaultGender
    const genderSlider = document.querySelector('.gender-slider');
    if (character.defaultGender === 'boy') {
      genderSlider.value = 0;
    } else if (character.defaultGender === 'other') {
      genderSlider.value = 1;
    } else { // girl
      genderSlider.value = 2;
    }
    
    // Show/hide breast size section based on gender
    const breastSizeSection = document.querySelector('.breast-size-section');
    breastSizeSection.style.display = character.defaultGender === 'girl' ? 'block' : 'none';
    
    // Set age toggle based on availability
    const ageUpToggle = document.querySelector('.age-up-toggle');
    ageUpToggle.disabled = !character.ageUpAvailable;
    ageUpToggle.checked = false;
    
    // Update enhancer dropdown
    updateEnhancerDropdown(character.enhancers);
    
    // Update tags
    updateTags(character);
  }
  
  // Update enhancer dropdown with character's enhancers
  function updateEnhancerDropdown(enhancers) {
    const enhancerDropdown = document.querySelector('.enhancer-dropdown');
    enhancerDropdown.innerHTML = '';
    
    // Add default empty option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select enhancer...';
    enhancerDropdown.appendChild(defaultOption);
    
    // Add enhancer options if available
    if (enhancers && enhancers.length > 0) {
      enhancers.forEach((enhancer, index) => {
        const option = document.createElement('option');
        option.value = index.toString();
        // If enhancer is array, join with commas
        if (Array.isArray(enhancer)) {
          option.textContent = enhancer.join(', ');
        } else {
          option.textContent = enhancer;
        }
        enhancerDropdown.appendChild(option);
      });
    }
  }
  
  // Update tags with character's main tags
  function updateTags(character) {
    const tagsContainer = document.querySelector('.tags-container');
    tagsContainer.innerHTML = '';
    
    // Function to add a tag pill
    function addTagPill(tagText) {
      const tagPill = document.createElement('div');
      tagPill.classList.add('tag-pill');
      tagPill.textContent = tagText;
      tagsContainer.appendChild(tagPill);
    }
    
    // Add gender tag
    if (character.defaultGender === 'girl') {
      addTagPill('1girl');
    } else if (character.defaultGender === 'boy') {
      addTagPill('1boy');
    }
    
    // Add character name as a tag
    const nameParts = character.name.split(' (');
    if (nameParts.length > 0) {
      addTagPill(nameParts[0]);
    }
    
    // Parse main tags if available
    if (character.mainTags) {
      const mainTags = character.mainTags.split(',').map(tag => tag.trim());
      mainTags.forEach(tag => {
        if (tag && !tag.includes(nameParts[0])) { // Avoid duplicating character name
          addTagPill(tag);
        }
      });
    }
  }
  
  // Initialize with a default character if available
  if (characterSearchData.length > 0) {
    selectCharacter(characterSearchData[0]);
  }
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.filter-dropdown') && event.target !== mediaFilterBtn) {
      mediaFilterOptions.classList.remove('show');
    }
    
    if (!event.target.closest('.search-results-container') && 
        event.target !== characterSearch && 
        !event.target.closest('.search-wrapper')) {
      searchResults.classList.remove('show');
    }
  });
  
  // Gender slider change handler
  const genderSlider = document.querySelector('.gender-slider');
  genderSlider.addEventListener('input', function() {
    const breastSizeSection = document.querySelector('.breast-size-section');
    // Show breast size only for female characters (value 2)
    breastSizeSection.style.display = this.value == 2 ? 'block' : 'none';
    
    // Update tags based on gender
    const tagsContainer = document.querySelector('.tags-container');
    const genderTags = tagsContainer.querySelectorAll('.tag-pill');
    
    // Remove existing gender tags
    genderTags.forEach(tag => {
      if (tag.textContent === '1girl' || tag.textContent === '1boy') {
        tagsContainer.removeChild(tag);
      }
    });
    
    // Add new gender tag
    const tagPill = document.createElement('div');
    tagPill.classList.add('tag-pill');
    
    if (this.value == 0) {
      tagPill.textContent = '1boy';
    } else if (this.value == 2) {
      tagPill.textContent = '1girl';
    } else {
      // Don't add a gender tag for 'other'
      return;
    }
    
    tagsContainer.insertBefore(tagPill, tagsContainer.firstChild);
  });
  
  // Age up toggle handler
  const ageUpToggle = document.querySelector('.age-up-toggle');
  ageUpToggle.addEventListener('change', function() {
    // Find existing age tags
    const tagsContainer = document.querySelector('.tags-container');
    const ageTags = Array.from(tagsContainer.querySelectorAll('.tag-pill'))
      .filter(tag => tag.textContent === 'aged up' || tag.textContent.includes('mature'));
    
    // Remove existing age tags
    ageTags.forEach(tag => {
      tagsContainer.removeChild(tag);
    });
    
    // Add new age tags if checked
    if (this.checked) {
      const ageUpTag = document.createElement('div');
      ageUpTag.classList.add('tag-pill');
      ageUpTag.textContent = 'aged up';
      tagsContainer.appendChild(ageUpTag);
      
      const matureTag = document.createElement('div');
      matureTag.classList.add('tag-pill');
      // Use appropriate mature tag based on gender
      if (genderSlider.value == 0) {
        matureTag.textContent = 'mature male';
      } else {
        matureTag.textContent = 'mature female';
      }
      tagsContainer.appendChild(matureTag);
    }
  });
  
  // Breast size slider change handler
  const breastSizeSlider = document.querySelector('.breast-size-slider');
  breastSizeSlider.addEventListener('input', function() {
    // Find existing breast size tags
    const tagsContainer = document.querySelector('.tags-container');
    const breastTags = Array.from(tagsContainer.querySelectorAll('.tag-pill'))
      .filter(tag => tag.textContent.includes('breasts'));
    
    // Remove existing breast size tags
    breastTags.forEach(tag => {
      tagsContainer.removeChild(tag);
    });
    
    // Add new breast size tag based on slider value
    if (genderSlider.value == 2) { // Only for female characters
      const breastTag = document.createElement('div');
      breastTag.classList.add('tag-pill');
      
      if (this.value == 0) {
        breastTag.textContent = 'small breasts';
      } else if (this.value == 1) {
        breastTag.textContent = 'medium breasts';
      } else if (this.value == 2) {
        breastTag.textContent = 'large breasts';
      } else {
        breastTag.textContent = 'huge breasts';
      }
      
      tagsContainer.appendChild(breastTag);
    }
  });
  
  // Enhancer dropdown change handler
  const enhancerDropdown = document.querySelector('.enhancer-dropdown');
  enhancerDropdown.addEventListener('change', function() {
    // Find existing enhancer tags
    const tagsContainer = document.querySelector('.tags-container');
    const allTags = Array.from(tagsContainer.querySelectorAll('.tag-pill'));
    const characterName = document.getElementById('character-name').textContent.split(' (')[0];
    
    // Try to identify enhancer tags (this is an approximation)
    const possibleEnhancerTags = allTags.filter(tag => {
      const text = tag.textContent;
      return text.includes(characterName) && 
             (text.includes('skin') || text.includes('outfit') || text.includes('variant'));
    });
    
    // Remove identified enhancer tags
    possibleEnhancerTags.forEach(tag => {
      tagsContainer.removeChild(tag);
    });
    
    // Add new enhancer if selected
    if (this.value !== '') {
      const selectedText = this.options[this.selectedIndex].textContent;
      const enhancerParts = selectedText.split(',');
      
      enhancerParts.forEach(part => {
        const trimmed = part.trim();
        if (trimmed && !trimmed.startsWith('--')) {
          const enhancerTag = document.createElement('div');
          enhancerTag.classList.add('tag-pill');
          enhancerTag.textContent = trimmed;
          tagsContainer.appendChild(enhancerTag);
        }
      });
    }
  });
  
  // Custom tag input
  const tagInput = document.querySelector('.tag-input');
  tagInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
      const tagText = this.value.trim();
      
      // Create and add the tag
      const tagPill = document.createElement('div');
      tagPill.classList.add('tag-pill');
      tagPill.textContent = tagText;
      
      document.querySelector('.tags-container').appendChild(tagPill);
      
      // Clear the input
      this.value = '';
    }
  });
  
  // Clear tag input button
  const clearTagInput = document.querySelector('.tag-input-container .clear-icon');
  clearTagInput.addEventListener('click', function() {
    document.querySelector('.tag-input').value = '';
  });
  
  // Remove character button
  const removeCharacterBtn = document.querySelector('.remove-character-btn');
  removeCharacterBtn.addEventListener('click', function() {
    // Reset the character card to default state
    document.getElementById('character-name').textContent = 'Select a Character';
    document.querySelector('.media-badge').textContent = 'None';
    document.querySelector('.gender-slider').value = 1; // Other
    document.querySelector('.age-up-toggle').checked = false;
    document.querySelector('.breast-size-section').style.display = 'none';
    document.querySelector('.enhancer-dropdown').innerHTML = '<option value="">Select enhancer...</option>';
    document.querySelector('.tags-container').innerHTML = '';
  });
  
  // Document click handler for closing dropdowns
  document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.character-search-container');
    const filterDropdown = document.querySelector('.filter-dropdown');
    
    if (!searchContainer.contains(event.target)) {
      searchResults.classList.remove('show');
    }
    
    if (!filterDropdown.contains(event.target)) {
      mediaFilterOptions.classList.remove('show');
    }
  });
}); 