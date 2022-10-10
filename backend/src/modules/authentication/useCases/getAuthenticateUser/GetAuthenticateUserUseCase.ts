import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../utils/AppError';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { UserDto } from '../../dtos/UserDto';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class GetAuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<UserDto> {
    const user = await this.usersRepository.findUserById(id);

    if (!user) {
      throw new AppError({
        message: 'User does not exits',
        status: ResponseCode.BadRequest,
      });
    }

    const userDto = new UserDto(user);

    return userDto;
  }
}

export { GetAuthenticateUserUseCase };
