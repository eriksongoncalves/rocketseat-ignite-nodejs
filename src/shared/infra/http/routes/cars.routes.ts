import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

import CreateCarController from '@modules/cars/useCases/createCar/CreateCarController';
import ListAvailableCarsController from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';

const carsRouter = Router();
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRouter.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRouter.get('/available', listAvailableCarsController.handle);

export default carsRouter;
