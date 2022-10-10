import { inject, injectable } from 'tsyringe';
import { CountryDto } from '../../dto/CountryDto';
import { IStickersRepository } from '../../repositories/IStickersRepository';

@injectable()
class GetCountriesUseCase {
  constructor(
    @inject('StickersRepository')
    private stickersRepository: IStickersRepository,
  ) {}

  async execute(): Promise<CountryDto[]> {
    const sticker: any[] = [];

    const countries = await this.stickersRepository.getCountries();

    const countriesDto = countries.map((c) => new CountryDto(c));

    countriesDto.forEach((country) => {
      country.stickers = sticker;
    });

    return countriesDto;
  }
}

export { GetCountriesUseCase };
