import { DESIRED_RULE, LINES } from "./Constants";
import { Rule } from "postcss";
import Check from "./Check";
import Comparison from "./Comparison";

import * as FileSystem from "fs";

export default class Rules {
  private rules: Array<string>;

  constructor() {
    this.rules = [];
  }

  populateFromFile(filePath: string): boolean {
    if (Check.isNotString(filePath)) {
      return false;
    }

    // Ensure file actually exists.
    if (!FileSystem.existsSync(filePath)) {
      console.log("Does not Exist");
      return false;
    }

    const easyList = FileSystem.readFileSync(filePath, "UTF-8");
    const easyListLines = easyList.split(LINES);

    // Find the relevant rules.
    easyListLines.forEach((easyListLine: any) => {
      if (easyListLine.match(DESIRED_RULE) !== null) {
        this.rules.push(easyListLine.replace(DESIRED_RULE, ""));
      }
    });

    return true;
  }

  isExactMatch(compareRule: Rule, foundRule: string) {
    return compareRule.selector === foundRule;
  }

  compare(compareRule: Rule): Comparison {
    const matchedRules: any[] = [];

    this.rules.forEach((rule) => {
      if (this.isExactMatch(compareRule, rule)) {
        matchedRules.push(rule);
      }
    });

    return new Comparison({ selector: compareRule.selector, matchedRules });
  }
}
