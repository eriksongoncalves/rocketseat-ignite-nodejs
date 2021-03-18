import { Router } from 'express';

import Category from 'src/models/Category';

const categoriesRouter = Router();

const categories: Category[] = [];

categoriesRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  });

  categories.push(category);

  res.status(201).json({ categories });
});

export default categoriesRouter;
