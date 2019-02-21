//------------------------------------------------------------------------------
//
// Main
//
//------------------------------------------------------------------------------

const PostCSS = require("postcss");
const Chalk = require("chalk");

const Constants = require("../src/PostCSSAddBlockLint/Constants");
const Rules = require("./PostCSSAddBlockLint/Rules");
const Report = require("./PostCSSAddBlockLint/Report");

module.exports = PostCSS.plugin(Constants.PLUGIN_NAME, options => {
  // Overwrite defaults with user defined options.
  options = Object.assign({ easyList: null }, options);

  const rules = new Rules();

  // Parse rules from file.
  rules.populateFromFile(options.easyList);

  // Root (postcss/lib/root.js)
  return css => {
    const report = new Report();

    // Rule (postcss/lib/rule.js)
    css.walkRules(cssRule => {
      const comparison = rules.compare(cssRule);

      if (comparison.matched()) {
        report.contribute(comparison);
      }
    });

    report.display();

    if (report.failed()) {
      throw new Error("Add Block Lint");
    }
  };
});
