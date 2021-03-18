import CategoryRepository from '../../repositories/CategoryRepository';
import CreateCategoryUseCase from './CreateCategoryUseCase';
import CreateCategoryController from './CreateCategoryController';

const categoryRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
