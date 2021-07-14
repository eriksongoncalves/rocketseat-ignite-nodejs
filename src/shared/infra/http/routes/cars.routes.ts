import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

import CreateCarController from '@modules/cars/useCases/createCar/CreateCarController';
import ListAvailableCarsController from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import CreateCarSpecificationController from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { UploadCarImagesController } from '@modules/cars/useCases/uploadCarImage/UploadCarImagesController';

const carsRouter = Router();
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload('./tmp/cars'));

carsRouter.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRouter.get('/available', listAvailableCarsController.handle);

carsRouter.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
);

carsRouter.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadCarImagesController.handle
);

export default carsRouter;
