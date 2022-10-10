import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/authentication/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/authentication/repositories/UsersRepository';
import { IStickersRepository } from '../../modules/stickers/repositories/IStickersRepository';
import { StickersRepository } from '../../modules/stickers/repositories/StickersRepository';
import { BCryptProvider } from '../providers/cryptProvider/BCryptProvider';
import { ICryptProvider } from '../providers/cryptProvider/ICryptProvider';
import { IDateProvider } from '../providers/dateProvider/IDateProvider';
import { DateProvider } from '../providers/dateProvider/MomentDateProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IStickersRepository>(
  'StickersRepository',
  StickersRepository,
);

container.registerSingleton<IDateProvider>('DateProvider', DateProvider);
container.registerSingleton<ICryptProvider>('CryptProvider', BCryptProvider);
