import PostCSS from "postcss";

import PostCSSAddBlockLint from "../index";

describe("PostCSS", () => {
  const postCSS = PostCSS([
    PostCSSAddBlockLint({
      rules: [
        `${__dirname}/../../data/easylist.txt`,
        `${__dirname}/../../data/easylist-cookie.txt`,
        `${__dirname}/../../data/fanboy-social.txt`,
        `${__dirname}/../../data/fanboy-annoyance.txt`,
      ],
    }),
  ]);

  [".error", "p", "div", "body", "a"].forEach((selector) => {
    it(`is silent for ok selector [${selector}]`, () => {
      expect(() => {
        postCSS.process(`${selector} { display: none; }`).css;
      }).not.toThrow();
    });
  });

  [
    ".ad-101",
    ".SponsoredLinks",
    ".tmnAdsenseContainer",
    ".adSize_LLMedia",
    "#CookieEU",
    ".twitterWidget",
  ].forEach((selector) => {
    it(`is loud for not ok selector [${selector}]`, () => {
      expect(() => {
        postCSS.process(`${selector} { display: none; }`).css;
      }).toThrow();
    });
  });
});
