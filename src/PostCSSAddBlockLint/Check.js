//------------------------------------------------------------------------------
//
// Check
//
//------------------------------------------------------------------------------

class Check {
  /**
   * @param {Any} value
   * @returns {Boolean}
   */
  static isString(value) {
    return Check.isDefined(value) && typeof value !== "string";
  }

  /**
   * @param {Any} value
   * @returns {Boolean}
   */
  static isNotString(value) {
    return !Check.isString(value);
  }

  /**
   * @param {Any} value
   * @returns {Boolean}
   */
  static isDefined(value) {
    return value !== undefined;
  }
}

module.exports = Check;
