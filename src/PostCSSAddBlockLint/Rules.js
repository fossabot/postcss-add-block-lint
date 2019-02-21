//------------------------------------------------------------------------------
//
// Rule Parser
//
//------------------------------------------------------------------------------

const FileSystem = require("fs");

const Constants = require("./Constants");
const Check = require("./Check");
const Comparison = require("./Comparison");

class Rules {
  constructor() {
    /**
     * @type {Array<String>}
     */
    this.rules = [];
  }

  /**
   * @param {String|null} filePath
   */
  populateFromFile(filePath) {
    if (Check.isNotString(filePath)) {
      return;
    }

    // Ensure file actually exists.
    if (!FileSystem.existsSync(filePath)) {
      // eslint-disable-next-line no-console
      console.log("Does not Exist");
      return;
    }

    const easyList = FileSystem.readFileSync(filePath, "UTF-8");

    // Handle problems with reading of file.
    if (easyList === null) {
      // eslint-disable-next-line no-console
      console.log("Null List");
      return;
    }

    const easyListLines = easyList.split(Constants.LINES);

    // Find the relevant rules.
    easyListLines.forEach(easyListLine => {
      if (easyListLine.match(Constants.DESIRED_RULE) !== null) {
        this.rules.push(easyListLine.replace(Constants.DESIRED_RULE, ""));
      }
    });
  }

  /**
   * @param {Rule} compareRule
   * @returns {Comparison}
   */
  compare(compareRule) {
    const matchedRules = [];

    this.rules.forEach(rule => {
      // Simple exact match.
      if (compareRule.selector === rule) {
        matchedRules.push(rule);
      }
    });

    return new Comparison({ selector: compareRule.selector, matchedRules });
  }
}

module.exports = Rules;
