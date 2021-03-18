import express from 'express';

import categoriesRoutes from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3333');
});
