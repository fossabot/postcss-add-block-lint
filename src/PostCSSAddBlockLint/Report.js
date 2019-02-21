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
    const messages = [];

    if (this.failed()) {
      messages.push(Chalk.bold.underline("Matched Rules\n"));

      this.comparisons.forEach(comparison => {
        const selector = Chalk.redBright(comparison.selector);
        const matches = comparison.matchedRules.join("\n\t");

        messages.push(`${selector}\n\t${matches}`);
      });

      messages.push(
        Chalk.blue(
          "\nWe recommend you modify these selectors to avoid inadvertant ad blocking."
        )
      );

      // eslint-disable-next-line no-console
      console.log(`\n${messages.join("\n")}\n`);
    }
  }

  failed() {
    return this.comparisons.length > 0;
  }
}

module.exports = Report;
