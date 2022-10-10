import { Router } from 'express';
import { authenticationRouter } from './authentication.routes';

const router = Router();

router.use(authenticationRouter);

export { router };
