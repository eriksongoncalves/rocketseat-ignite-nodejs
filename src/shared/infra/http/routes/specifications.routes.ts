import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

import CreateSpecificationController from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import ListSpecificationsController from '@modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRouter.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

specificationsRouter.get('/', listSpecificationsController.handle);

export default specificationsRouter;
