import { DESIRED_RULE, LINES } from "./Constants";
import { Rule } from "postcss";
import Check from "./Check";
import Comparison from "./Comparison";

import * as FileSystem from "fs";

export default class Rules {
  private rules: Array<String>;

  constructor() {
    this.rules = [];
  }

  populateFromFile(filePath: string) {
    if (Check.isNotString(filePath)) {
      return;
    }

    // Ensure file actually exists.
    if (!FileSystem.existsSync(filePath)) {
      console.log("Does not Exist");
      return;
    }

    const easyList = FileSystem.readFileSync(filePath, "UTF-8");

    // Handle problems with reading of file.
    if (easyList === null) {
      console.log("Null List");
      return;
    }

    const easyListLines = easyList.split(LINES);

    // Find the relevant rules.
    easyListLines.forEach((easyListLine: any) => {
      if (easyListLine.match(DESIRED_RULE) !== null) {
        this.rules.push(easyListLine.replace(DESIRED_RULE, ""));
      }
    });
  }

  /**
   * @param {Rule} compareRule
   * @returns {Comparison}
   */
  compare(compareRule: Rule) {
    const matchedRules: any[] = [];

    this.rules.forEach(rule => {
      // Simple exact match.
      if (compareRule.selector === rule) {
        matchedRules.push(rule);
      }
    });

    return new Comparison({ selector: compareRule.selector, matchedRules });
  }
}
