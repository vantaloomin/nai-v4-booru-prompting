/**
 * Dropdown Core Module
 * 
 * Provides core functionality for dropdown menus.
 */

/**
 * Closes all open dropdown menus
 */
export function closeAllDropdowns() {
    const allLists = document.querySelectorAll('.dropdown-list');
    allLists.forEach(list => list.style.display = 'none');
} 