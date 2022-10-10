import { inject, injectable } from 'tsyringe';
import constDatas from '../../../../config/constDatas';
import { ICryptProvider } from '../../../../shared/providers/cryptProvider/ICryptProvider';
import { IDateProvider } from '../../../../shared/providers/dateProvider/IDateProvider';
import { AppError } from '../../../../utils/AppError';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { Utils } from '../../../../utils/Utils';
import { UserDto } from '../../dtos/UserDto';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IRegisterUserRequest } from './RegisterUserRequest';

@injectable()
class RegisterUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
    @inject('CryptProvider')
    private cryptProvider: ICryptProvider,
  ) {}

  async execute({
    name,
    email,
    password,
  }: IRegisterUserRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findUserByEmail(email);

    if (!userAlreadyExists) {
      throw new AppError({
        message: 'User email is already in use',
        status: ResponseCode.BadRequest,
      });
    }

    const passwordHash = await this.cryptProvider.hashString(password);

    const user: UserDto = new UserDto({
      id: Utils.generateUid(),
      email,
      name,
      password: passwordHash,
      total_album: constDatas.total_stickers,
      total_complete: 0,
      total_complete_percent: 0,
      total_duplicates: 0,
      total_stickers: 0,
      created_at: this.dateProvider.dateNowISO(),
      updated_at: this.dateProvider.dateNowISO(),
    });

    await this.usersRepository.registerUser(user);
  }
}

export { RegisterUserUseCase };
