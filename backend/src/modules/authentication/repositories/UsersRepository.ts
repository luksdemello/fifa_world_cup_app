import { prisma } from '../../../database/prisma';
import { User } from '../entities/User';
import { IUsersRepository } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  async registerUser(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        token: user.token,
        email: user.email,
        name: user.name,
        password: user.password,
        total_album: user.total_album,
        total_complete: user.total_complete,
        total_complete_percent: user.total_complete_percent,
        total_duplicates: user.total_duplicates,
        total_stickers: user.total_stickers,
        updated_at: user.updated_at,
        created_at: user.created_at,
      },
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { email } });

    return user;
  }

  async findUserByToken(token: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { token } });

    return user;
  }
}

export { UsersRepository };
