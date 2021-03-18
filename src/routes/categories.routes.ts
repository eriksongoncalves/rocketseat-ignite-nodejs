import { Router } from 'express';

import CategoryRepository from '../repositories/CategoryRepository';

const categoriesRouter = Router();

const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  categoryRepository.create({ name, description });

  res.status(201).send();
});

categoriesRouter.get('/', (req, res) => {
  const categories = categoryRepository.list();

  res.json({ categories });
});

export default categoriesRouter;
