# [PostCSS Add Block Lint](https://github.com/dbtedman/postcss-add-block-lint)

[![Build Status](https://travis-ci.org/dbtedman/postcss-add-block-lint.svg?branch=master)](https://travis-ci.org/dbtedman/postcss-add-block-lint)
[![Known Vulnerabilities](https://snyk.io/test/github/dbtedman/postcss-add-block-lint/badge.svg)](https://snyk.io/test/github/dbtedman/postcss-add-block-lint)

A [PostCSS](http://postcss.org) plugin that is used to lint css for existence of classes that might trigger add blockers.

## Where do I start?

> These instructions are only for this plugin. See the [PostCSS](http://postcss.org) website for framework information.

### Install

Using [NPM](https://www.npmjs.com)

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
    Gulp.src("./src/*.css")
        .pipe(PostCSS([AddBlockLint({ easyList: `${__dirname}/easylist.txt` })]))
);
```

```bash
wget https://easylist-downloads.adblockplus.org/easylist.txt
```

## Want to lean more?

-   See our [Contributing Guide](CONTRIBUTING.md) for details on how this repository is developed.
-   See our [Changelog](CHANGELOG.md) for details on which features, improvements, and bug fixes have been implemented
-   See our [License](LICENSE.md) for details on how you can use the code in this repository.
-   See our [Security Guide](SECURITY.md) for details on how security is considered.
