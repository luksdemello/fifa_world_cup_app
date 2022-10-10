import { v4 as uuidV4 } from 'uuid';

class Utils {
  static generateUid(): string {
    return uuidV4();
  }
}

export { Utils };
