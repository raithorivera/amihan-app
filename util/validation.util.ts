// Condition functions now accept relevant property directly
type DataCondition = (data: any) => boolean;

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
export const isBlank: DataCondition = (value) => {
  return value === null || value === undefined || value === '' || (value.hasOwnProperty('length') && value.length === 0);
};

/**
 * Checks if the data is an array.
 * @param {any} data - The data to check.
 * @returns {boolean} - True if data is an array, false otherwise.
 */
export const isArray: DataCondition = (data) => Array.isArray(data);

/**
 * Checks if the data is an empty array.
 * @param {any} data - The data to check.
 * @returns {boolean} - True if data is an empty array, false otherwise.
 */
export const isEmptyArray: DataCondition = (data) => isArray(data) && data.length === 0;

/**
 * Checks if the data is a non-empty array.
 * @param {any} data - The data to check.
 * @returns {boolean} - True if data is a non-empty array, false otherwise.
 */
export const isNotEmptyArray: DataCondition = (data) => isArray(data) && data.length > 0;

/**
 * Checks if the data is an object (excluding arrays).
 * @param {any} data - The data to check.
 * @returns {boolean} - True if data is an object, false otherwise.
 */
export const isObject: DataCondition = (data) => data !== null && typeof data === 'object' && !isArray(data);

/**
 * Checks if the data is an empty object.
 * @param {any} data - The data to check.
 * @returns {boolean} - True if data is an empty object, false otherwise.
 */
export const isEmptyObject: DataCondition = (data) => isObject(data) && Object.keys(data).length === 0;

/**
 * Checks if the data is a non-empty object.
 * @param {any} data - The data to check.
 * @returns {boolean} - True if data is a non-empty object, false otherwise.
 */
export const isNotEmptyObject: DataCondition = (data) => isObject(data) && Object.keys(data).length > 0;
