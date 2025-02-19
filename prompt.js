function generatePrompt() {
    const selectedArtists = getSelectedArtists();
    const artistTag = selectedArtists.length > 0 ? `{{${selectedArtists.join(", ")}}}` : "";

    const initialPhrase = "The image is a highly finished digital illustration, with expert shading.";
    const consistentTags1 = "{{{best quality, amazing quality, very aesthetic}}}, incredibly absurdres, absurdres, character study, character focus, highly detailed";
    const sceneOutput = getSelectedSceneTags();
    const consistentTags2 = "detailed background, beautiful background.";

    const { subjects, subjectCountObj } = getCharacterSubjects();
    let subjectCountStr = [];
    if (subjectCountObj.girl)
        subjectCountStr.push(subjectCountObj.girl + (subjectCountObj.girl === 1 ? "girl" : "girls"));
    if (subjectCountObj.boy)
        subjectCountStr.push(subjectCountObj.boy + (subjectCountObj.boy === 1 ? "boy" : "boys"));
    const subjectCountFinal = subjectCountStr.join(", ");

    // Get action tags from our new action block section.
    const actionTagsOutput = getActionTags();
    // Assemble header.
    let header = `${initialPhrase} ${artistTag}, ${consistentTags1}`;
    if (subjectCountFinal) {
        header += `, ${subjectCountFinal}`;
    }
    if (sceneOutput) {
        header += `, ${sceneOutput}`;
    }
    header += `, ${consistentTags2}`;

    const finalPrompt = header + " | " + subjects.join(" | ");
    return finalPrompt;
}