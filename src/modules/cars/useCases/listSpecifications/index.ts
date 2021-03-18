import SpecificationRepository from '../../repositories/SpecificationRepository';
import ListSpecificationsUseCase from './ListSpecificationsUseCase';
import ListSpecificationsController from './ListSpecificationsController';

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationRepository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
