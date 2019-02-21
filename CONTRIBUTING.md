# Contributing Guide

## References

-   https://www.reddit.com/r/web_design/comments/1sq3xk/today_i_discovered_that_adblock_blocks_elements/
-   https://easylist-downloads.adblockplus.org/easylist.txt
-   https://www.npmjs.com/package/abp-filter-parser
-   https://adblockplus.org/filter-cheatsheet

## Testing and Code Quality

### Continuous Integration

[Travis CI](https://travis-ci.org/dbtedman/postcss-add-block-lint)

### Code Formatting

```bash
npm run format
```

### Static Analysis

Linting support provided by [ESLint](http://eslint.org/) based on rules defined in `.eslintrc.yml`.

```bash
npm run test:lint
```

### Unit Tests

Code is unit tested using [MochaJS](https://mochajs.org), using test cases defined in the `unit/` directory.

```bash
npm run test:unit
```

## Releasing

Based on the [NPM Publishing Guide](https://docs.npmjs.com/getting-started/publishing-npm-packages), after updating the current version, run the following command:

```bash
npm publish
```
