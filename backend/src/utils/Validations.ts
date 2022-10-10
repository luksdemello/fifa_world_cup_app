class Validations {
  static isParamEmpty(param: any): boolean {
    return param === '' || param === undefined || param === null;
  }

  static isNotParamEmpty(param: any): boolean {
    return param !== '' && param !== undefined && param !== null;
  }
}

export { Validations };
