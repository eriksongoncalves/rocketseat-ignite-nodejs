import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp'
});

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRouter.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res);
});

export default categoriesRouter;
