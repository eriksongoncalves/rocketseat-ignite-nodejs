import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';
import routes from './routes';
import swaggerFile from './swagger.json';
import handleErros from './middlewares/handleErrors';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);
app.use(handleErros);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3333');
});
