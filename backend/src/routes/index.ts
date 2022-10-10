import { Router } from 'express';
import { authenticationRouter } from './authentication.routes';
import { stickerRouter } from './sticker.routes';

const router = Router();

router.use(authenticationRouter);
router.use(stickerRouter);

export { router };
