import { Router } from 'express';
import { registerUserController } from '../modules/authentication/useCases/register/RegisterUserController';

const authenticationRouter = Router();

authenticationRouter.post('/register', registerUserController.handler);

export { authenticationRouter };
