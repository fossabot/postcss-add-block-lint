import Rules from "./Rules";

describe("Rules", () => {
  const rules = new Rules();

  describe("populateFromFile", () => {
    it("returns false for invalid file path", () => {
      // @ts-ignore
      expect(rules.populateFromFile(null)).toEqual(false);
      // @ts-ignore
      expect(rules.populateFromFile(undefined)).toEqual(false);
      // @ts-ignore
      expect(rules.populateFromFile(1234)).toEqual(false);
    });

    it("returns false for missing file", () => {
      expect(rules.populateFromFile("./file-not-here")).toEqual(false);
    });
  });
});
