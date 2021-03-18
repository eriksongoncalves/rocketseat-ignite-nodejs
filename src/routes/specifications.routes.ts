import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';

const specificationsRouter = Router();

specificationsRouter.post('/', (req, res) => {
  return createSpecificationController.handle(req, res);
});

specificationsRouter.get('/', (req, res) => {
  return listSpecificationsController.handle(req, res);
});

export default specificationsRouter;
