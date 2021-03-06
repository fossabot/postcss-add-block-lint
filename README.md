# [PostCSS Add Block Lint](https://github.com/dbtedman/postcss-add-block-lint)

[![Package Version](https://badgen.net/npm/v/postcss-add-block-lint?label=Latest&style=flat)](https://www.npmjs.com/package/postcss-add-block-lint)
[![Package Downloads (Weekly)](https://badgen.net/npm/dw/postcss-add-block-lint?label=Downloads&style=flat)](https://www.npmjs.com/package/postcss-add-block-lint)
[![Package License](https://badgen.net/npm/license/postcss-add-block-lint?label=License&style=flat)](https://www.npmjs.com/package/postcss-add-block-lint)
[![Known Vulnerabilities](https://snyk.io/test/github/dbtedman/postcss-add-block-lint/badge.svg?style=flat-square)](https://snyk.io/test/github/dbtedman/postcss-add-block-lint)
[![Maintainability](https://api.codeclimate.com/v1/badges/5f29d7853b51d9e84616/maintainability)](https://codeclimate.com/github/dbtedman/postcss-add-block-lint/maintainability)
[![Codecov](https://codecov.io/gh/dbtedman/postcss-add-block-lint/branch/master/graph/badge.svg)](https://codecov.io/gh/dbtedman/postcss-add-block-lint)
[![GitHub Actions](https://github.com/dbtedman/postcss-add-block-lint/workflows/Test/badge.svg)](https://github.com/dbtedman/postcss-add-block-lint/actions?workflow=Test)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdbtedman%2Fpostcss-add-block-lint.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdbtedman%2Fpostcss-add-block-lint?ref=badge_shield)

A [PostCSS](http://postcss.org) plugin that is used to lint css for existence of classes that might trigger add blockers.

-   [Where do I start?](#where-do-i-start)
-   [What options does it have?](#what-options-does-it-have)
-   [Want to lean more?](#want-to-lean-more)

## Where do I start?

> These instructions are only for this plugin. See the [PostCSS](http://postcss.org) website for framework information.

### Install

Using [Yarn](https://yarnpkg.com/en/package/postcss-add-block-lint)

```bash
yarn add postcss-add-block-lint --exact --dev
```

Using [NPM](https://www.npmjs.com/package/postcss-add-block-lint)

```bash
npm install postcss-add-block-lint --save-dev --save-exact
```

### Configure

Add to your [PostCSS](http://postcss.org) configuration.

```javascript
const Gulp = require("gulp");
const PostCSS = require("gulp-postcss");
const AddBlockLint = require("postcss-add-block-lint");

Gulp.task("css", () =>
    Gulp.src("./src/*.css").pipe(
        PostCSS([
            AddBlockLint({
                rules: [
                    `${__dirname}/data/easylist.txt`,
                    `${__dirname}/data/easylist-cookie.txt`,
                    `${__dirname}/data/fanboy-social.txt`,
                    `${__dirname}/data/fanboy-annoyance.txt`,
                ],
            }),
        ])
    )
);
```

### Prepare

Ensure that ad blocking lists are downloaded to `./data` directory.

```bash
yarn prepare
```

### Review

When matches are found, they will be outputted to the console.

![Error Display](ErrorDisplay.jpg)

## What options does it have?

### Minimal

The minimal required configuration is the `rules` list, as shown in the above example.

```javascript
AddBlockLint({
    rules: [
        `${__dirname}/data/easylist.txt`,
        `${__dirname}/data/easylist-cookie.txt`,
        `${__dirname}/data/fanboy-social.txt`,
        `${__dirname}/data/fanboy-annoyance.txt`,
    ],
});
```

Lists shown in the above example can be accessed from the following locations:

-   [`easylist.txt`](https://easylist-downloads.adblockplus.org/easylist.txt)
-   [`easylist-cookie.txt`](https://easylist-downloads.adblockplus.org/easylist-cookie.txt)
-   [`fanboy-social.txt`](https://easylist.to/easylist/fanboy-social.txt)
-   [`fanboy-annoyance.txt`](https://easylist.to/easylist/fanboy-annoyance.txt)

## Want to lean more?

-   See our [Contributing Guide](CONTRIBUTING.md) for details on how this repository is developed.
-   See our [Changelog](CHANGELOG.md) for details on which features, improvements, and bug fixes have been implemented
-   See our [License](LICENSE.md) for details on how you can use the code in this repository.
-   See our [Security Guide](SECURITY.md) for details on how security is considered.


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdbtedman%2Fpostcss-add-block-lint.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdbtedman%2Fpostcss-add-block-lint?ref=badge_large)