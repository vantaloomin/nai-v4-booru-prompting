/**
 * generatePromptData
 *
 * Returns structured data for building the prompt.
 * The returned object has two keys:
 *  - header: an array of objects for header parts (default text, artist, consistent tags, subject count, scene, quality, etc.)
 *  - characters: an array where each element is an array of objects representing one character.
 *
 * Each subject string is expected to be formatted like:
 * "girl, tsukino usagi, bishoujo senshi sailor moon, source#aiming"
 * The first token is the gender, the second the name, and tokens containing "#" are marked as actions.
 */
function generatePromptData() {
    // Get the current mode
    const isStableDiffusion = document.getElementById('mode-toggle') && document.getElementById('mode-toggle').checked;
    
    const selectedArtists = getSelectedArtists(); // e.g. ["r1"]
    const originalArtistTag = selectedArtists.length > 0 ? `${selectedArtists.join(", ")}` : "";
    const sdArtistTag = originalArtistTag ? `by_${originalArtistTag}` : "";
  
    // Different content based on mode
    const defaultText = "The image is a highly finished digital illustration, with expert shading.";
    
    // Different consistent tags based on mode
    const naiConsistentTags = "{{{best quality, amazing quality, very aesthetic}}}";
    const sdConsistentTags = "masterwork, award-winning, masterpiece, hyper-detailed";
    
    const naiQualityTags = "incredibly absurdres, absurdres, character study, character focus, highly detailed";
    const sdQualityTags = "best_quality, amazing quality, very_aesthetic, absurdres, incredibly_absurdres";
    
    const sceneOutput = getSelectedSceneTags(); // e.g. "desert, sand, arid, dune, scorching"
  
    const { subjects, subjectCountObj } = getCharacterSubjects();
    let subjectCount = "";
    if (subjectCountObj.girl) {
      subjectCount += subjectCountObj.girl + (subjectCountObj.girl === 1 ? "girl" : "girls");
    }
    if (subjectCountObj.boy) {
      if (subjectCount) subjectCount += ", ";
      subjectCount += subjectCountObj.boy + (subjectCountObj.boy === 1 ? "boy" : "boys");
    }
  
    // Build header array with both NAI and SD versions
    let header = [];
    
    // Default text (only for NAI)
    header.push({ 
      type: "default", 
      text: defaultText,
      sdText: "" // empty for SD
    });
    
    // Consistent tags 1 (different in each mode)
    header.push({ 
      type: "consistent", 
      text: naiConsistentTags, 
      sdText: sdConsistentTags 
    });
    
    // Artist (with different formatting per mode)
    header.push({ 
      type: "artist", 
      text: originalArtistTag,
      sdText: sdArtistTag
    });
    
    // Subject count (same in both)
    if (subjectCount) {
      header.push({ 
        type: "subjectCount", 
        text: subjectCount,
        sdText: subjectCount
      });
    }
    
    // Scene (same in both)
    if (sceneOutput) {
      header.push({ 
        type: "scene", 
        text: sceneOutput,
        sdText: sceneOutput
      });
    }
    
    // Quality tags (different in each mode)
    header.push({ 
      type: "quality", 
      text: naiQualityTags,
      sdText: sdQualityTags
    });
  
    // Build characters array.
    // Now we split each subject string by comma and classify tokens.
    const characters = subjects.map(subjectStr => {
      let tokens = [];
      subjectStr = subjectStr.trim();
      // Split by commas (assuming the subject string uses commas as delimiters)
      let parts = subjectStr.split(",").map(s => s.trim());
      if (parts.length > 0) {
        // Check if the first token starts with "girl" or "boy"
        if (parts[0].toLowerCase().startsWith("girl") || parts[0].toLowerCase().startsWith("boy")) {
          // First token is gender.
          tokens.push({ type: "gender", text: parts[0] });
          // Second token is the name (if it exists).
          if (parts.length > 1) {
            tokens.push({ type: "name", text: parts[1] });
          }
          // Any subsequent tokens:
          for (let i = 2; i < parts.length; i++) {
            // If the token contains a '#' character, consider it an action.
            if (parts[i].includes("#")) {
              tokens.push({ type: "action", text: parts[i] });
            } else {
              tokens.push({ type: "tag", text: parts[i] });
            }
          }
        } else {
          // Fallback: treat entire string as name if it doesn't start with gender.
          tokens.push({ type: "name", text: subjectStr });
        }
      }
      return tokens;
    });
  
    return { header: header, characters: characters };
  }
  