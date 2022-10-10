import { prisma } from '../../../database/prisma';
import { User } from '../entities/User';
import { IUsersRepository } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  async registerUser(userDto: User): Promise<void> {
    await prisma.user.create({
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

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { email } });

    return user;
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { id } });

    return user;
  }
}

export { UsersRepository };
