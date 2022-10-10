import { primsa } from '../../../database/prisma';
import { UserDto } from '../dtos/UserDto';
import { IUsersRepository } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  async registerUser(userDto: UserDto): Promise<void> {
    await primsa.user.create({
      data: {
        id: userDto.id,
        email: userDto.email,
        name: userDto.name,
        password: userDto.password,
        total_album: userDto.total_album,
        total_complete: userDto.total_complete,
        total_complete_percent: userDto.total_complete_percent,
        total_duplicates: userDto.total_duplicates,
        total_stickers: userDto.total_stickers,
        updated_at: userDto.updated_at,
        created_at: userDto.created_at,
      },
    });
  }
}

export { UsersRepository };
