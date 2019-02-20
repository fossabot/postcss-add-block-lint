//------------------------------------------------------------------------------
//
// Main
//
//------------------------------------------------------------------------------

const PostCSS = require("postcss");

const RuleParser = require("../src/PostCSSAddBlockLint/RuleParser");

module.exports = PostCSS.plugin("postcss-add-block-lint", options => {
  // Overwrite defaults with user defined options.
  options = Object.assign({ easyList: null }, options);

  const ruleParser = new RuleParser();

  if (options.easyList !== null) {
    ruleParser.populateFromFile(options.easyList);

    // eslint-disable-next-line no-console
    console.log(ruleParser);
  }

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
