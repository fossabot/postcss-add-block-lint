//------------------------------------------------------------------------------
//
// Rule Parser
//
//------------------------------------------------------------------------------

const FileSystem = require("fs");

const LINES = /\r?\n/;
const DESIRED_RULE = /^##/;

class RuleParser {
  constructor() {
    /**
     * @type {Array<String>}
     */
    this.rules = [];
  }

  /**
   * @param {String} filePath
   */
  populateFromFile(filePath) {
    // Ensure file actually exists.
    if (!FileSystem.existsSync(filePath)) {
      return;
    }

    const easyList = FileSystem.readFileSync(filePath, "UTF-8");

    // Handle problems with reading of file.
    if (easyList === null) {
      return;
    }

    const easyListLines = easyList.split(LINES);

    // Find the relevant rules.
    easyListLines.forEach(easyListLine => {
      if (easyListLine.match(DESIRED_RULE) !== null) {
        this.rules.push(easyListLine.replace(DESIRED_RULE, ""));
      }
    });
  }
}

module.exports = RuleParser;
