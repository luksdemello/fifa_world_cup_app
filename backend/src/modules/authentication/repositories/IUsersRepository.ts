import { User } from '../entities/User';

interface IUsersRepository {
  registerUser(user: User): Promise<void>;
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
}

export { IUsersRepository };
