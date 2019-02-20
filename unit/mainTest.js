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

// TODO: Add Blocking (https://www.reddit.com/r/web_design/comments/1sq3xk/today_i_discovered_that_adblock_blocks_elements/)
// TODO: Can we load https://easylist-downloads.adblockplus.org/easylist.txt, then parse it for identifiers?
// TODO: Look at https://www.npmjs.com/package/abp-filter-parser
// TODO: Review https://adblockplus.org/filter-cheatsheet for syntax.

// Load PostCSS with PostCSSAddBlockLint Plugin
const postCSS = PostCSS([
  PostCSSAddBlockLint({ easyList: `${__dirname}/../easylist.txt` })
]);

describe("PostCSS Add Block Lint", () => {
  it("is silent for ok css", () => {
    Assert.ok(postCSS.process(okCSS).css === okCSS);
  });
});
