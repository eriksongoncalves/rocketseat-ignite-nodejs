import AppError from '@errors/AppError';
import CategoriesRepositoryInMemory from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import CreateCategoryUseCase from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create category', () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it('should be able to create a new category', async () => {
    await createCategoryUseCase.execute({
      name: 'Category Test',
      description: 'Category description Test'
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      'Category Test'
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category when name already exists', () => {
    const category = {
      name: 'Category Test',
      description: 'Category description Test'
    };

    expect(async () => {
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
