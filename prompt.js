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
    // (Header code remains the same.)
    const selectedArtists = getSelectedArtists(); // e.g. ["r1"]
    const artistTag = selectedArtists.length > 0 ? `{{${selectedArtists.join(", ")}}}` : "";
  
    const defaultText = "The image is a highly finished digital illustration, with expert shading.";
    const consistentTags1 = "{{{best quality, amazing quality, very aesthetic}}}";
    const qualityTags = "incredibly absurdres, absurdres, character study, character focus, highly detailed";
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
  
    let header = [];
    header.push({ type: "default", text: defaultText });
    if (artistTag) header.push({ type: "artist", text: artistTag });
    header.push({ type: "consistent", text: consistentTags1 });
    if (subjectCount) header.push({ type: "subjectCount", text: subjectCount });
    if (sceneOutput) header.push({ type: "scene", text: sceneOutput });
    header.push({ type: "quality", text: qualityTags });
  
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
  