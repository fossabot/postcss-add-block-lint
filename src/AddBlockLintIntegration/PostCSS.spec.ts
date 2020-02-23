import * as Assert from "assert";
import PostCSS from "postcss";
import * as FileSystem from "fs";

import PostCSSAddBlockLint from "../index";

describe("PostCSS", () => {
  // Fixtures
  const okCSS = FileSystem.readFileSync(
    `${__dirname}/fixtures/ok.css`,
    "UTF-8"
  );
  const failCSS = FileSystem.readFileSync(
    `${__dirname}/fixtures/fail.css`,
    "UTF-8"
  );

  // Load PostCSS with PostCSSAddBlockLint Plugin
  const postCSS = PostCSS([
    PostCSSAddBlockLint({
      rules: [
        `${__dirname}/../../data/easylist.txt`,
        `${__dirname}/../../data/easylist-cookie.txt`,
        `${__dirname}/../../data/fanboy-social.txt`,
        `${__dirname}/../../data/fanboy-annoyance.txt`
      ]
    })
  ]);

  it("is silent for ok css", () => {
    Assert.ok(postCSS.process(okCSS).css === okCSS);
  });

  it("is loud for not ok css", () => {
    Assert.throws(() => {
      // Do comparison here so that we actually do the work.
      Assert.ok(postCSS.process(failCSS).css === failCSS);
    });
  });
});
