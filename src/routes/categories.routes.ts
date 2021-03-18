import { Router } from 'express';

import CategoryRepository from '../modules/cars/repositories/CategoryRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.get('/', (req, res) => {
  const categories = categoryRepository.list();

  return res.json({ categories });
});

export default categoriesRouter;
