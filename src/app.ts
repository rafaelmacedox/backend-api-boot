import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import { handleErrors } from './common/middlewares/errors.middle';
import { routes } from './routes';
import swaggerDocument from '../swagger';

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routes);
app.use(handleErrors);

export default app;