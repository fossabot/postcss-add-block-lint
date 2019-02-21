//------------------------------------------------------------------------------
//
// Report
//
//------------------------------------------------------------------------------

const Chalk = require("chalk");

class Report {
  constructor() {
    /**
     * @type {Array<Comparison>}
     */
    this.comparisons = [];
  }

  contribute(comparison) {
    this.comparisons.push(comparison);
  }

  display() {
    if (this.failed()) {
      // eslint-disable-next-line no-console
      console.log(Chalk.bold.underline("\nMatched Rules\n"));

      this.comparisons.forEach(comparison => {
        const selector = Chalk.redBright(comparison.selector);
        const matches = comparison.matchedRules.join("\n\t##");

        // eslint-disable-next-line no-console
        console.log(`selector: ${selector}\n\tmatch: ##${matches}\n`);
      });

      // eslint-disable-next-line no-console
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

module.exports = Report;
