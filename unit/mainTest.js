//------------------------------------------------------------------------------
//
// Main Test
//
//------------------------------------------------------------------------------

const Assert = require("assert");
const PostCSS = require("postcss");
const FileSystem = require("fs");

const PostCSSAddBlockLint = require("../src/main");

// Fixtures
const okCSS = FileSystem.readFileSync(`${__dirname}/fixtures/ok.css`, "UTF-8");
const failCSS = FileSystem.readFileSync(
  `${__dirname}/fixtures/fail.css`,
  "UTF-8"
);

// Load PostCSS with PostCSSAddBlockLint Plugin
const postCSS = PostCSS([
  PostCSSAddBlockLint({ easyList: `${__dirname}/../data/easylist.txt` })
]);

describe("PostCSS Add Block Lint", () => {
  it("is silent for ok css", () => {
    Assert.ok(postCSS.process(okCSS).css === okCSS);
  });

  it("is loud for not ok css", () => {
    Assert.throws(() => {
      // Do comparison here so that we actually do the work.
      Assert.ok(postCSS.process(failCSS).css === failCSS);
    });
  }, Error);
});
