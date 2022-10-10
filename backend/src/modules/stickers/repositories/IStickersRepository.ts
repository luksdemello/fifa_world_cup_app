import { Country } from '../entities/Country';

interface IStickersRepository {
  getCountries(): Promise<Country[]>;
}

export { IStickersRepository };
