import SpecificationRepository from '../../repositories/SpecificationRepository';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';
import CreateSpecificationController from './CreateSpecificationController';

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
