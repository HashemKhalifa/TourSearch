/**
 * Transform text to lower case.
 * @param str
 * @returns {string | *}
 * @constructor
 */
export const CAPcase = str =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
