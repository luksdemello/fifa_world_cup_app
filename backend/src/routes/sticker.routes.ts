import { Router } from 'express';
import { getCountriesController } from '../modules/stickers/use_cases/getCountries/GetCountriesController';

const stickerRouter = Router();

stickerRouter.get('/countries', getCountriesController.handler);

export { stickerRouter };
