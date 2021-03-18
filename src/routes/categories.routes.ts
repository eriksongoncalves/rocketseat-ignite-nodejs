import { Router } from 'express';

import CategoryRepository from '../repositories/CategoryRepository';

const categoriesRouter = Router();

const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const categoryExists = categoryRepository.findByName(name);

  if (categoryExists) {
    return res.status(400).json({ error: 'Category already exists' });
  }

  categoryRepository.create({ name, description });

  return res.status(201).send();
});

categoriesRouter.get('/', (req, res) => {
  const categories = categoryRepository.list();

  return res.json({ categories });
});

export default categoriesRouter;
