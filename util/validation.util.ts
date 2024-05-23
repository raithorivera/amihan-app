/**
 * Checks if the provided value is blank or empty.
 *
 * @function
 *
 * @param {any} value - The value to be checked.
 *
 * @returns {boolean} Returns `true` if the value is `null`, `undefined`, an empty string, or has a length of 0. Otherwise, returns `false`.
 *
 * @description
 * This function determines whether a given value is considered blank or empty. A value is considered blank if it's:
 * - `null`
 * - `undefined`
 * - An empty string (`''`)
 * - Has a length property and its length is 0 (e.g., an empty array)
 *
 * It's useful for quickly checking if a variable or value is missing or not set.
 *
 * @example
 * const isValueBlank = isBlank('');
 * console.log(isValueBlank); // Outputs: true
 *
 * const isArrayEmpty = isBlank([]);
 * console.log(isArrayEmpty); // Outputs: true
 *
 * const isNumberBlank = isBlank(42);
 * console.log(isNumberBlank); // Outputs: false
 */
export const isBlank = (value) => {
  return value === null || value === undefined || value === '' || (value.hasOwnProperty('length') && value.length === 0);
};
