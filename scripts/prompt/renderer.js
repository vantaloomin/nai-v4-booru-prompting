/**
 * Prompt Renderer
 * 
 * Provides functions for rendering prompts in different formats
 */

import { formatTextForMode } from './formatter.js';
import { getCssClass } from '../ui/cssUtils.js';

/**
 * Renders a prompt to the output preview area
 * @param {boolean} colored - Whether to use colored HTML output
 * @param {Object} promptData - The structured prompt data
 * @param {boolean} isStableDiffusionMode - Whether we're in SD mode or NovelAI mode
 */
export function renderPrompt(colored, promptData, isStableDiffusionMode) {
  if (!promptData) return;
  
  const isSD = isStableDiffusionMode;

  if (colored) {
    if (isSD) {
      // Stable Diffusion format
      // 1. Get consistent quality tags 1
      const consistentTags1 = promptData.header.find(part => part.type === "consistent");
      
      // 2. Get artist
      const artist = promptData.header.find(part => part.type === "artist");
      
      // 3. Get subject count
      const subjectCount = promptData.header.find(part => part.type === "subjectCount");
      
      // 4. Build character information without 'girl_' prefix
      const charactersHTML = promptData.characters
        .map((characterParts, index) => {
          // Make sure we have at least a name and handle edge cases
          if (characterParts.length < 2) {
            return `<span class="highlight-character-${((index % 4) + 1)}">${formatTextForMode(characterParts.map(p => p.text.trim()).join(", "), isSD)}</span>`;
          }
          
          // Get the name (second element, index 1)
          const name = characterParts[1].text.trim();
          
          // Extract the additional tags (excluding actions)
          const additionalTags = characterParts.slice(2)
            .filter(p => p.type !== "action")
            .map(p => p.text.trim())
            .join(", ");
          
          // Extract any action tags
          const actionText = characterParts
            .filter(p => p.type === "action")
            .map(p => p.text.trim())
            .join(", ");
          
          // Build character HTML: Name + Tags + Actions
          let charHTML = `<span class="highlight-character-${((index % 4) + 1)}">`;
          charHTML += formatTextForMode(name, isSD);
          if (additionalTags) {
            charHTML += `, ${formatTextForMode(additionalTags, isSD)}`;
          }
          charHTML += `</span>`;
          
          // Add actions if they exist
          if (actionText) {
            charHTML += `, <span class="highlight-action-${((index % 4) + 1)}">${formatTextForMode(actionText, isSD)}</span>`;
          }
          
          return charHTML;
        })
        .join(", ");
      
      // 5. Get scene
      const scene = promptData.header.find(part => part.type === "scene");
      
      // 6. Get consistent quality tags 2
      const qualityTags = promptData.header.find(part => part.type === "quality");
      
      // Build final HTML in the correct order
      let parts = [];
      // Use sdText if available, otherwise fall back to text
      if (consistentTags1) {
        const consistentTagsText = consistentTags1.sdText || consistentTags1.text;
        parts.push(`<span class="${getCssClass("consistent")}">${formatTextForMode(consistentTagsText, isSD)}</span>`);
      }
      
      if (artist) {
        const artistText = artist.sdText || artist.text;
        parts.push(`<span class="${getCssClass("artist")}">${formatTextForMode(artistText, isSD)}</span>`);
      }
      
      if (subjectCount) {
        const countText = subjectCount.sdText || subjectCount.text;
        parts.push(`<span class="${getCssClass("subjectCount")}">${formatTextForMode(countText, isSD)}</span>`);
      }
      
      // Add characters
      parts.push(charactersHTML);
      
      // Add scene
      if (scene) {
        const sceneText = scene.sdText || scene.text;
        parts.push(`<span class="${getCssClass("scene")}">${formatTextForMode(sceneText, isSD)}</span>`);
      }
      
      // Add quality tags
      if (qualityTags) {
        const qualityText = qualityTags.sdText || qualityTags.text;
        parts.push(`<span class="${getCssClass("quality")}">${formatTextForMode(qualityText, isSD)}</span>`);
      }
      
      // Join everything with commas
      const finalHTML = parts.join(", ");
      document.getElementById("output-preview").innerHTML = finalHTML;
    } else {
      // NovelAI format - NEW format with character and background sections
      // Get subject count
      const subjectCount = promptData.header.find(part => part.type === "subjectCount");
      const subjectCountText = subjectCount ? subjectCount.text : "";
      
      // Get consistent tags
      const consistentTags = promptData.header.find(part => part.type === "consistent");
      const consistentTagsText = consistentTags ? consistentTags.text.replace(/{{{|}}}/g, '') : "";
      
      // Get quality tags
      const qualityTags = promptData.header.find(part => part.type === "quality");
      const qualityTagsText = qualityTags ? qualityTags.text : "";
      
      // Get artist
      const artist = promptData.header.find(part => part.type === "artist");
      const artistText = artist && artist.text ? 
        artist.text.split(",").map(a => `{artist:${a.trim()}}`).join(", ") : "";
      
      // Get scene tags
      const scene = promptData.header.find(part => part.type === "scene");
      const sceneText = scene ? scene.text : "";
      
      // Get default text (the quality tags 2)
      const defaultPart = promptData.header.find(part => part.type === "default");
      const defaultText = defaultPart ? defaultPart.text : "";
      
      // Build characters part with HTML coloring
      const charactersHTML = promptData.characters
        .map((characterParts, index) => {
          let infoText = "";
          if (characterParts.length >= 2) {
            infoText = characterParts[0].text + ", " + characterParts[1].text;
            if (characterParts.length > 2) {
              infoText += ", " + characterParts.slice(2)
                .filter(p => p.type !== "action")
                .map(p => p.text)
                .join(", ");
            }
          } else {
            infoText = characterParts.map(p => p.text).join(", ");
          }
          const actionText = characterParts
            .filter(p => p.type === "action")
            .map(p => p.text)
            .join(", ");
          
          const infoHTML = `<span class="highlight-character-${((index % 4) + 1)}">${infoText}</span>`;
          let actionHTML = "";
          if (actionText) {
            actionHTML = `, <span class="highlight-action-${((index % 4) + 1)}">${actionText}</span>`;
          }
          return infoHTML + actionHTML;
        })
        .join(" | ");
      
      // Format the prompt according to the new template with HTML coloring
      // character:[CHARACTER COUNT(S)], [QUALITY TAGS 1], [LINE BREAK]
      // [ARTIST TAGS],
      // background:[SCENE TAGS],
      // [QUALITY TAGS 2] [LINE BREAK]
      // | [CHARACTER PROMPT AS IS]
      
      let parts = [];
      
      // Part 1: Character section with subject count and quality tags
      let characterSection = "<span class='highlight-subject'>character:";
      if (subjectCountText) {
        characterSection += subjectCountText;
      }
      characterSection += "</span>";
      
      if (consistentTagsText || qualityTagsText) {
        if (subjectCountText) characterSection += ", ";
        if (consistentTagsText) {
          characterSection += `<span class="${getCssClass('consistent')}">${consistentTagsText}</span>`;
        }
        if (consistentTagsText && qualityTagsText) characterSection += ", ";
        if (qualityTagsText) {
          characterSection += `<span class="${getCssClass('quality')}">${qualityTagsText}</span>`;
        }
      }
      parts.push(characterSection);
      
      // Part 2: Artist tags
      if (artistText) {
        parts.push(`<span class="${getCssClass('artist')}">${artistText}</span>`);
      }
      
      // Part 3: Background section
      if (sceneText) {
        parts.push(`<span class="${getCssClass('scene')}">background: ${sceneText}</span>`);
      }
      
      // Part 4: Quality tags 2 (default text)
      if (defaultText) {
        parts.push(`<span class="${getCssClass('default')}">${defaultText}</span>`);
      }
      
      // Join with line breaks
      const headerHTML = parts.join("<br>");
      
      // NovelAI format with pipe separator
      const separator = "<br>| ";
      const finalHTML = headerHTML + separator + charactersHTML.replace(/(\| girl)(?=[^,])/g, "$1,");
      
      document.getElementById("output-preview").innerHTML = finalHTML;
    }
  } else {
    // Plain text version
    if (isSD) {
      // Stable Diffusion format
      // 1. Get consistent quality tags 1
      const consistentTags1 = promptData.header.find(part => part.type === "consistent");
      
      // 2. Get artist
      const artist = promptData.header.find(part => part.type === "artist");
      
      // 3. Get subject count
      const subjectCount = promptData.header.find(part => part.type === "subjectCount");
      
      // 4. Build character information without 'girl_' prefix
      const charactersText = promptData.characters
        .map(characterParts => {
          // Make sure we have at least a name and handle edge cases
          if (characterParts.length < 2) {
            return formatTextForMode(characterParts.map(p => p.text.trim()).join(", "), isSD);
          }
          
          // Get the name (second element, index 1)
          const name = characterParts[1].text.trim();
          
          // Extract the additional tags (excluding actions)
          const additionalTags = characterParts.slice(2)
            .filter(p => p.type !== "action")
            .map(p => p.text.trim())
            .join(", ");
          
          // Extract any action tags
          const actionText = characterParts
            .filter(p => p.type === "action")
            .map(p => p.text.trim())
            .join(", ");
          
          // Build character text: Name + Tags + Actions
          let charText = formatTextForMode(name, isSD);
          if (additionalTags) {
            charText += `, ${formatTextForMode(additionalTags, isSD)}`;
          }
          
          // Add actions if they exist
          if (actionText) {
            charText += `, ${formatTextForMode(actionText, isSD)}`;
          }
          
          return charText;
        })
        .join(", ");
      
      // 5. Get scene
      const scene = promptData.header.find(part => part.type === "scene");
      
      // 6. Get consistent quality tags 2
      const qualityTags = promptData.header.find(part => part.type === "quality");
      
      // Build final text in the correct order
      let parts = [];
      
      // Use sdText if available, otherwise fall back to text
      if (consistentTags1) {
        const consistentTagsText = consistentTags1.sdText || consistentTags1.text;
        parts.push(formatTextForMode(consistentTagsText, isSD));
      }
      
      if (artist) {
        const artistText = artist.sdText || artist.text;
        parts.push(formatTextForMode(artistText, isSD));
      }
      
      if (subjectCount) {
        const countText = subjectCount.sdText || subjectCount.text;
        parts.push(formatTextForMode(countText, isSD));
      }
      
      // Add characters
      parts.push(charactersText);
      
      // Add scene
      if (scene) {
        const sceneText = scene.sdText || scene.text;
        parts.push(formatTextForMode(sceneText, isSD));
      }
      
      // Add quality tags
      if (qualityTags) {
        const qualityText = qualityTags.sdText || qualityTags.text;
        parts.push(formatTextForMode(qualityText, isSD));
      }
      
      // Join everything with commas
      const finalText = parts.join(", ");
      document.getElementById("output-preview").innerText = finalText;
    } else {
      // NovelAI format - NEW format with character and background sections
      // Get subject count
      const subjectCount = promptData.header.find(part => part.type === "subjectCount");
      const subjectCountText = subjectCount ? subjectCount.text : "";
      
      // Get consistent tags
      const consistentTags = promptData.header.find(part => part.type === "consistent");
      const consistentTagsText = consistentTags ? consistentTags.text.replace(/{{{|}}}/g, '') : "";
      
      // Get quality tags
      const qualityTags = promptData.header.find(part => part.type === "quality");
      const qualityTagsText = qualityTags ? qualityTags.text : "";
      
      // Get artist
      const artist = promptData.header.find(part => part.type === "artist");
      const artistText = artist && artist.text ? 
        artist.text.split(",").map(a => `{artist:${a.trim()}}`).join(", ") : "";
      
      // Get scene tags
      const scene = promptData.header.find(part => part.type === "scene");
      const sceneText = scene ? scene.text : "";
      
      // Get default text (the quality tags 2)
      const defaultPart = promptData.header.find(part => part.type === "default");
      const defaultText = defaultPart ? defaultPart.text : "";
      
      // Build characters part
      const charactersText = promptData.characters
        .map(characterParts => {
          let infoText = "";
          if (characterParts.length >= 2) {
            infoText = characterParts[0].text + ", " + characterParts[1].text;
            if (characterParts.length > 2) {
              infoText += ", " + characterParts.slice(2)
                .filter(p => p.type !== "action")
                .map(p => p.text)
                .join(", ");
            }
          } else {
            infoText = characterParts.map(p => p.text).join(", ");
          }
          const actionText = characterParts
            .filter(p => p.type === "action")
            .map(p => p.text)
            .join(", ");
          return infoText + (actionText ? ", " + actionText : "");
        })
        .join(" | ");
      
      // Format the prompt according to the new template
      // character:[CHARACTER COUNT(S)], [QUALITY TAGS 1], [LINE BREAK]
      // [ARTIST TAGS],
      // background:[SCENE TAGS],
      // [QUALITY TAGS 2] [LINE BREAK]
      // | [CHARACTER PROMPT AS IS]
      
      let parts = [];
      
      // Part 1: Character section with subject count and quality tags
      let characterSection = "character:";
      if (subjectCountText) {
        characterSection += subjectCountText;
      }
      if (consistentTagsText || qualityTagsText) {
        if (subjectCountText) characterSection += ", ";
        characterSection += consistentTagsText;
        if (consistentTagsText && qualityTagsText) characterSection += ", ";
        characterSection += qualityTagsText;
      }
      parts.push(characterSection);
      
      // Part 2: Artist tags
      if (artistText) {
        parts.push(artistText);
      }
      
      // Part 3: Background section
      if (sceneText) {
        parts.push("background: " + sceneText);
      }
      
      // Part 4: Quality tags 2 (default text)
      if (defaultText) {
        parts.push(defaultText);
      }
      
      // Join with line breaks
      const headerText = parts.join("\n");
      
      // NovelAI format with pipe separator
      const separator = "\n| ";
      const finalText = headerText + separator + charactersText.replace(/(\| girl)(?=[^,])/g, "$1,");
      
      document.getElementById("output-preview").innerText = finalText;
    }
  }
} 