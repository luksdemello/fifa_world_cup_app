import { Router } from 'express';
import { getAuthenticateUserController } from '../modules/authentication/useCases/getAuthenticateUser/GetAuthenticateUserController';
import { loginUserController } from '../modules/authentication/useCases/login/LoginUserController';
import { registerUserController } from '../modules/authentication/useCases/register/RegisterUserController';
import ensureAuthenticate from '../shared/middlewares/ensureAuthenticate';

const authenticationRouter = Router();

authenticationRouter.post('/register', registerUserController.handler);
authenticationRouter.post('/auth', loginUserController.handler);
authenticationRouter.get(
  '/me',
  ensureAuthenticate,
  getAuthenticateUserController.handler,
);

export { authenticationRouter };
