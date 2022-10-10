import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { LoginUserUseCase } from './LoginUserUseCase';

class LoginUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginUserUseCase = container.resolve(LoginUserUseCase);

    const token = await loginUserUseCase.execute({ email, password });

    return response.status(ResponseCode.Success).json(token);
  }
}

const loginUserController = new LoginUserController();

export { loginUserController };
