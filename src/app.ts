import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { handleErrors } from './common/middlewares/errors.middle';
import { routes } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger';

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routes);
app.use(handleErrors);

export default app;