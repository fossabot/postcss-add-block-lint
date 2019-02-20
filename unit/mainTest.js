//------------------------------------------------------------------------------
//
// Main Test
//
//------------------------------------------------------------------------------

const Assert = require("assert");
const PostCSS = require("postcss");
const PostCSSAddBlockLint = require("../src/main");

const okCSS = `
  .demo {
    color: red;
  }
`;

describe("PostCSS Add Block Lint", () => {
  it("can be loaded as a plugin", () => {
    const postCSS = PostCSS([PostCSSAddBlockLint()]);

    Assert.ok(postCSS.process(okCSS).css === okCSS);
  });
});
