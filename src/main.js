//------------------------------------------------------------------------------
//
// Main
//
//------------------------------------------------------------------------------

const PostCSS = require("postcss");

module.exports = PostCSS.plugin("postcss-add-block-lint", options => {

  // Overwrite defaults with user defined options.
  options = Object.assign({}, options);

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
