import CategoryRepository from '../../repositories/CategoryRepository';
import ListCategoriesUseCase from './ListCategoriesUseCase';
import ListCategoriesController from './ListCategoriesController';

const categoryRepository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
