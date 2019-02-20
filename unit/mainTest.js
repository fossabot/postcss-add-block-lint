//------------------------------------------------------------------------------
//
// Main Test
//
//------------------------------------------------------------------------------

const PostCSS = require("postcss");
const PostCSSAddBlockLint = require("../src/main");

describe("PostCSS Add Block Lint", () => {
  it("can be loaded as a plugin", () => {
    PostCSS([
      PostCSSAddBlockLint()
    ]);
  });
});
