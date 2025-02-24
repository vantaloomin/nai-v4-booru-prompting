/**
 * Sorter Utility
 * 
 * Provides utility functions for sorting arrays.
 */

/**
 * Sorts an array alphabetically based on a getter function
 * 
 * @param {Array} arr - The array to sort
 * @param {Function} getValue - Function that returns the string value to sort by
 * @return {Array} - The sorted array
 */
export function sortAlphabetically(arr, getValue) {
    return arr.slice().sort((a, b) => getValue(a).localeCompare(getValue(b)));
} 