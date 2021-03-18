import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRouter = Router();

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

export default categoriesRouter;
