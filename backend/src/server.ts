import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';

import './shared/container/index';
import errorHandler from './shared/middlewares/errorHandler';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
