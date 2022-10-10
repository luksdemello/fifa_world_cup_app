import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { ICryptProvider } from '../../../../shared/providers/cryptProvider/ICryptProvider';
import { AppError } from '../../../../utils/AppError';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ILoginUserRequest } from './LoginUserRequest';
import { ILoginUserResponse } from './LoginUserResponse';

@injectable()
class LoginUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('CryptProvider')
    private cryptProvider: ICryptProvider,
  ) {}

  async execute({
    email,
    password,
  }: ILoginUserRequest): Promise<ILoginUserResponse> {
    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new AppError({
        message: 'Email or password invalid',
        status: ResponseCode.BadRequest,
      });
    }

    const passwordMatch = await this.cryptProvider.compareString(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError({
        message: 'Email or password invalid',
        status: ResponseCode.BadRequest,
      });
    }

    const secret =
      process.env.JSON_WEB_TOKEN_SECRET || 'senhadomeujsonwebtoken';

    const token = sign({}, secret, {
      subject: user.token,
      expiresIn: 86400,
    });

    const response: ILoginUserResponse = {
      access_token: token,
    };

    return response;
  }
}

export { LoginUserUseCase };
