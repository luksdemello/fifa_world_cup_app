interface ICryptProvider {
  hashString(value: string): Promise<string>;
  compareString(newString: string, oldString: string): Promise<boolean>;
}

export { ICryptProvider };
