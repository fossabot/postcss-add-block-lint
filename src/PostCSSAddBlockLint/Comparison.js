//------------------------------------------------------------------------------
//
// Comparison
//
//------------------------------------------------------------------------------

class Comparison {
  constructor({ selector, matchedRules }) {
    this.selector = selector;
    this.matchedRules = matchedRules;
  }

  matched() {
    return this.matchedRules.length > 0;
  }
}

module.exports = Comparison;
