import { UserDto } from '../dtos/UserDto';

interface IUsersRepository {
  registerUser(user: UserDto): Promise<void>;
  findUserByEmail(email: string): Promise<UserDto | null>;
}

export { IUsersRepository };
