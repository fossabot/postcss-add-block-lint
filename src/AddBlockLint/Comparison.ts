interface ComparisonConstructor {
  selector: string;
  matchedRules: string[];
}

export default class Comparison {
  private readonly _selector: string;
  private readonly _matchedRules: string[];

  constructor({ selector, matchedRules }: ComparisonConstructor) {
    this._selector = selector;
    this._matchedRules = matchedRules;
  }

  get selector(): string {
    return this._selector;
  }

  get matchedRules(): string[] {
    return this._matchedRules;
  }

  matched() {
    return this.matchedRules.length > 0;
  }
}
