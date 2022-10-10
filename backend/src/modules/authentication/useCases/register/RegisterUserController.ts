import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { RegisterUserUseCase } from './RegisterUserUseCase';

class RegisterUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const registerUserUseCase = container.resolve(RegisterUserUseCase);

    await registerUserUseCase.execute({ email, name, password });

    return response
      .status(ResponseCode.Created)
      .json({ message: 'Success to create an user' });
  }
}

const registerUserController = new RegisterUserController();

export { registerUserController };
