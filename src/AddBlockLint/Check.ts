export default class Check {
  static isString(value: any): boolean {
    return Check.isDefined(value) && typeof value === "string";
  }

  static isNotString(value: any): boolean {
    return !Check.isString(value);
  }

  static isDefined(value: any): boolean {
    return value !== undefined;
  }
}
