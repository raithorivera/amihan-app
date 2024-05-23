const BILLION = 1_000_000_000;
const MILLION = 1_000_000;
const THOUSAND = 1_000;

/**
 * Converts a number or number string to a valid number.
 *
 * @param {number|string} numStr - The number or number string to convert.
 * @returns {number|null} - The converted number or null if invalid.
 */
export const convertToNumber = (numStr: number | string): number | null => {
  const num = Number(numStr);
  if (isNaN(num) || !isFinite(num)) return null;
  return num;
};

/**
 * Formats a number with comma separators.
 *
 * @param {number|string} numStr - The number or number string to format.
 * @returns {string} - The formatted number with commas.
 */
export const formatNumber = (numStr: number | string): string => {
  const num = convertToNumber(numStr);
  if (num === null) return '0';
  return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
};

/**
 * Formats a number using compact notation (e.g., 1.5M for 1,500,000).
 *
 * @param {number|string} numStr - The number or number string to format.
 * @returns {string} - The formatted number in compact notation.
 */
export const formatNumberCompact = (numStr: number | string): string => {
  const num = convertToNumber(numStr);
  if (num === null) return '0';

  if (num >= BILLION) return (num / BILLION).toFixed(2) + 'B';
  if (num >= MILLION) return (num / MILLION).toFixed(2) + 'M';
  if (num >= THOUSAND) return (num / THOUSAND).toFixed(2) + 'K';

  return num.toString();
};

/**
 * Formats a percentage value with two decimal places.
 *
 * @param {number|string} value - The percentage value or value string to format.
 * @returns {string} - The formatted percentage with two decimal places and '%' symbol.
 */
export const formatPercentage = (value: number | string): string => {
  const num = convertToNumber(value);
  if (num === null) return '0';

  // Directly round the percentage to 2 decimal places
  const formattedValue = (num * 100).toFixed(2);
  return formattedValue + '%';
};

/**
 * Formats decimal number into two decimal places
 *
 * @param {number|string} value - The percentage value or value string to format.
 * @returns {string} - The formatted percentage with two decimal places and '%' symbol.
 */
export const formatDecimal = (value: number | string): string => {
  // Ensure value is treated as a number, parseFloat will handle strings that represent numbers
  const numericValue = typeof value === 'number' ? value : parseFloat(value);

  // Check if numericValue is NaN (Not a Number) after conversion attempt, and handle the case appropriately
  if (isNaN(numericValue)) {
    return 'Invalid number'; // or any other fallback logic you prefer
  }

  const formattedNumber = new Intl.NumberFormat('en-US', {
    // Specify any options you need for formatting; for example:
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericValue);

  return formattedNumber;
};
