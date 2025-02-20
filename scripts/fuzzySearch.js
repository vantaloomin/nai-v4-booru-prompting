// fuzzySearch.js
// Implementation using Fuse.js for advanced fuzzy searching, including transpositions.

//
// 1) createFuse(candidates)
//
//    - Accepts an array of candidate objects. Each candidate should have at least
//      { name, title, display } so that Fuse can search them.
//    - Configures Fuse with typical fuzzy-friendly settings (ignore location, a modest threshold, etc.).
//    - Returns a Fuse instance.
//
// 2) fuseSearch(query, fuseInstance)
//
//    - If query is empty, returns an empty array.
//    - Otherwise, performs fuseInstance.search(query).
//    - Returns an array of matched candidate objects in best-match order (Fuse sorts by relevance).

/**
 * Initializes a Fuse instance for fuzzy searching your candidate list.
 * Each candidate is assumed to have keys: "name", "title", and "display" (or whichever you prefer).
 */
function createFuse(candidates) {
    // Customize weights and threshold as desired.
    const options = {
      // Which fields to search? The "weight" influences how important each field is to the final score.
      keys: [
        { name: 'name', weight: 2 },
        { name: 'title', weight: 1 },
        { name: 'display', weight: 0.5 },
      ],
      includeScore: true,      // So we can see how well each item matched
      threshold: 0.5,          // 0.0 requires perfect match; closer to 1.0 means very lenient
      ignoreLocation: true,    // We don't care about *where* in the string the match is
      minMatchCharLength: 2,   // Only start scoring after 2 typed characters (change as you like)
    };
  
    // Create a new Fuse instance.
    return new Fuse(candidates, options);
  }
  
  /**
   * Performs a Fuse search on the given query string.
   *
   * @param {string} query The user’s search input.
   * @param {Fuse} fuseInstance A Fuse instance returned by createFuse().
   * @returns {Array} Array of matching candidate objects in best-match order.
   */
  function fuseSearch(query, fuseInstance) {
    // If there's no query, return nothing.
    if (!query) return [];
  
    // Run the search. This returns an array of objects like { item, score }.
    const results = fuseInstance.search(query);
  
    // Map them to just the candidate objects in best-match order.
    return results.map(r => r.item);
  }
  