//------------------------------------------------------------------------------
//
// Main
//
// See https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md
//
//------------------------------------------------------------------------------

const PostCSS = require("postcss");

module.exports = PostCSS.plugin("postcss-add-block-lint", () => {
  return () => {
    return new Promise(resolve => {
      resolve();
    });
  };
});
