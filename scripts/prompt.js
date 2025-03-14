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
    const defaultText = "The character is the central focus of this image. This image is a highly finished digital illustration in anime style with smooth shading.";
    
    // Different consistent tags based on mode
    const naiConsistentTags = "{{{best quality, amazing quality, very aesthetic}}}";
    const sdConsistentTags = "masterwork, award-winning, masterpiece, hyper-detailed";
    
    const naiQualityTags = "incredibly absurdres, absurdres, character study, character focus, highly detailed";
    const sdQualityTags = "best_quality, amazing_quality, very_aesthetic, absurdres, incredibly_absurdres";
    
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
        const firstPartLower = parts[0].toLowerCase();
        if (firstPartLower.startsWith("girl") || firstPartLower.startsWith("boy")) {
          // Extract just the gender part (girl or boy)
          const genderOnly = firstPartLower.startsWith("girl") ? "girl" : "boy";
          tokens.push({ type: "gender", text: genderOnly });
          
          // The name is likely the rest of the first part after "girl" or "boy"
          const nameOnly = parts[0].substring(genderOnly.length).trim();
          
          // Skip to the next part after the one containing name
          let nextPartIndex = 1;
          
          // Add the name token
          let characterName = "";
          if (nameOnly) {
            characterName = nameOnly;
            tokens.push({ type: "name", text: nameOnly });
          } else if (parts.length > 1) {
            // If name wasn't in first part, use the second part
            characterName = parts[1];
            tokens.push({ type: "name", text: parts[1] });
            nextPartIndex = 2;
          }
          
          // Extract enhancer tags with -- prefix first
          const enhancerTags = [];
          for (let i = nextPartIndex; i < parts.length; i++) {
            const part = parts[i].trim();
            if (part.includes("--")) {
              // Split by commas if this part contains multiple -- tags
              const subParts = part.split(",").map(sp => sp.trim());
              
              // Check each subpart for -- prefix
              for (const subPart of subParts) {
                if (subPart.startsWith("--")) {
                  const baseTag = subPart.substring(2).trim();
                  enhancerTags.push(baseTag);
                }
              }
            } else if (part.startsWith("--")) {
              // Direct -- tag (not part of a group)
              const baseTag = part.substring(2).trim();
              enhancerTags.push(baseTag);
            }
          }
          
          // Store the character name normalized for comparison
          const normalizedCharName = characterName.toLowerCase();
          
          // Any subsequent tokens:
          for (let i = nextPartIndex; i < parts.length; i++) {
            // If the token contains a '#' character, consider it an action.
            if (parts[i].includes("#")) {
              tokens.push({ type: "action", text: parts[i] });
            } else if (parts[i].startsWith("--")) {
              // Skip enhancer tags with -- prefix (don't add them to output)
              continue;
            } else {
              // Check if this tag should be excluded due to an enhancer with --
              const normalTag = parts[i].trim();
              const shouldExclude = enhancerTags.some(baseTag => 
                normalTag.toLowerCase() === baseTag.toLowerCase()
              );
              
              // Check if this tag is a duplicate of the character name
              const isDuplicateOfName = normalizedCharName && normalTag.toLowerCase() === normalizedCharName;
              
              // Only add if there's no matching enhancer and it's not a duplicate of the name
              if (!shouldExclude && !isDuplicateOfName) {
                tokens.push({ type: "tag", text: parts[i] });
              }
            }
          }
        } else {
          // Fallback: treat entire string as name if it doesn't start with gender.
          tokens.push({ type: "name", text: subjectStr });
        }
      }
      return tokens;
    });
  
    const result = { header: header, characters: characters };
    
    // Add direct logging of prompt creation
    console.log("PROMPT GENERATED", result); // Direct console log as fallback

    // Try to use the logger - multiple approaches for reliability
    try {
      // Approach 1: Direct import from global scope
      if (typeof window.logger !== 'undefined' && window.logger) {
        window.logger.success("Prompt Generated [Global]", {
          mode: isStableDiffusion ? 'Stable Diffusion' : 'NovelAI',
          artists: selectedArtists,
          characterCount: characters.length
        });
      } 
      // Approach 2: Try to import the logger directly
      else {
        // Use absolute path to avoid path resolution issues
        import('/scripts/utils/logger-init.js')
          .then(module => {
            const logger = module.default;
            if (logger && typeof logger.success === 'function') {
              logger.success("Prompt Generated [Import]", {
                mode: isStableDiffusion ? 'Stable Diffusion' : 'NovelAI',
                artists: selectedArtists,
                characterCount: characters.length
              });
            }
          })
          .catch(err => {
            console.warn("Failed to import logger:", err);
          });
      }
    } catch (err) {
      console.warn("Error in prompt logging:", err);
    }
  
    return result;
  }
  