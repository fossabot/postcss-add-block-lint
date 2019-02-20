//------------------------------------------------------------------------------
//
// Main
//
//------------------------------------------------------------------------------

const PostCSS = require("postcss");

const Constants = require("../src/PostCSSAddBlockLint/Constants");
const RuleParser = require("../src/PostCSSAddBlockLint/RuleParser");

module.exports = PostCSS.plugin(Constants.PLUGIN_NAME, options => {
  // Overwrite defaults with user defined options.
  options = Object.assign({ easyList: null }, options);

  const ruleParser = new RuleParser();

  // Parse rules from file.
  ruleParser.populateFromFile(options.easyList);

  // eslint-disable-next-line no-console
  console.log(ruleParser);

  // Root (postcss/lib/root.js)
  return css => {
    // Rule (postcss/lib/rule.js)
    css.walkRules(cssRule => {
      if (options) {
        cssRule.selector = `${cssRule.selector}`;
      }
    });
  };
});
