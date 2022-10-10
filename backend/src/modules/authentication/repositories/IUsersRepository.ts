import { UserDto } from '../dtos/UserDto';

interface IUsersRepository {
  registerUser(user: UserDto): Promise<void>;
}

export { IUsersRepository };
