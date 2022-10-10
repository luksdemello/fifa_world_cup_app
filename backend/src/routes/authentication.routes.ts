import { Router } from 'express';
import { loginUserController } from '../modules/authentication/useCases/login/LoginUserController';
import { registerUserController } from '../modules/authentication/useCases/register/RegisterUserController';

const authenticationRouter = Router();

authenticationRouter.post('/register', registerUserController.handler);
authenticationRouter.post('/auth', loginUserController.handler);

export { authenticationRouter };
