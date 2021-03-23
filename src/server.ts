import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';
import routes from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3333');
});
