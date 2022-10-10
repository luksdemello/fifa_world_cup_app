import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { GetCountriesUseCase } from './GetCountriesUseCase';

class GetCountriesController {
  async handler(request: Request, response: Response): Promise<Response> {
    const getCountriesUseCase = container.resolve(GetCountriesUseCase);

    const countries = await getCountriesUseCase.execute();

    return response.status(ResponseCode.Success).json(countries);
  }
}

const getCountriesController = new GetCountriesController();

export { getCountriesController };
