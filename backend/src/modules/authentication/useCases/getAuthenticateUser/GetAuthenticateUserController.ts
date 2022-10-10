import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { GetAuthenticateUserUseCase } from './GetAuthenticateUserUseCase';

class GetAuthenticateUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const getAuthenticateUserUseCase = container.resolve(
      GetAuthenticateUserUseCase,
    );

    const user = await getAuthenticateUserUseCase.execute(id);

    return response.status(ResponseCode.Success).json(user);
  }
}

const getAuthenticateUserController = new GetAuthenticateUserController();

export { getAuthenticateUserController };
