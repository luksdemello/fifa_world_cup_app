import { prisma } from '../../../database/prisma';
import { Country } from '../entities/Country';
import { IStickersRepository } from './IStickersRepository';

class StickersRepository implements IStickersRepository {
  async getCountries(): Promise<Country[]> {
    const countries = await prisma.country.findMany({
      select: {
        country_code: true,
        country_name: true,
        created_at: true,
        flag: true,
        id: true,
        index: true,
        stickers_end: true,
        stickers_start: true,
        updated_at: true,
      },
    });

    return countries;
  }
}

export { StickersRepository };
