import Chalk from "chalk";
import Comparison from "./Comparison";

export default class Report {
  private comparisons: Array<Comparison>;

  constructor() {
    this.comparisons = [];
  }

  contribute(comparison: Comparison) {
    this.comparisons.push(comparison);
  }

  display() {
    if (this.failed()) {
      console.log(Chalk.bold.underline("\nMatched Rules\n"));

      this.comparisons.forEach((comparison) => {
        const selector = Chalk.redBright(comparison.selector);
        const matches = comparison.matchedRules.join("\n\t##");

        console.log(`selector: ${selector}\n\tmatch: ##${matches}\n`);
      });

      console.log(
        Chalk.blue(
          "We recommend you modify these selectors to avoid inadvertent ad blocking."
        )
      );
    }
  }

  failed() {
    return this.comparisons.length > 0;
  }
}
