import { hash, compare } from 'bcrypt';
import { ICryptProvider } from './ICryptProvider';

class BCryptProvider implements ICryptProvider {
  async hashString(value: string): Promise<string> {
    const hashString = await hash(value, 8);
    return hashString;
  }

  async compareString(newString: string, oldString: string): Promise<boolean> {
    const stringMatch = await compare(newString, oldString);
    return stringMatch;
  }
}

export { BCryptProvider };
