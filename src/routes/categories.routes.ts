import { Router } from 'express';

import CategoryRepository from '../modules/cars/repositories/CategoryRepository';
import CreateCategoryService from '../modules/cars/services/CreateCategoryService';

const categoriesRouter = Router();

const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const categoryService = new CreateCategoryService(categoryRepository);

  categoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRouter.get('/', (req, res) => {
  const categories = categoryRepository.list();

  return res.json({ categories });
});

export default categoriesRouter;
