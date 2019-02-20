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
    this.rules = [];
  }

  populateFromFile(filePath) {
    const easyListLines = FileSystem
      .readFileSync(filePath, "UTF-8")
      .split(LINES);

    // Find the relevant rules.
    easyListLines.forEach((easyListLine) => {
      if (easyListLine.match(DESIRED_RULE) !== null) {
        this.rules.push(easyListLine.replace(DESIRED_RULE, ""));
      }
    });
  }
}

module.exports = RuleParser;
