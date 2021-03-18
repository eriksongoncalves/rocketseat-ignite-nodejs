import CategoryRepository from '../../repositories/CategoryRepository';
import CreateCategoryUseCase from './CreateCategoryUseCase';
import CreateCategoryController from './CreateCategoryController';

const categoryRepository = CategoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
