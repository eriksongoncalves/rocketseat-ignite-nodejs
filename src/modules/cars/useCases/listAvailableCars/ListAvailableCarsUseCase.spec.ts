import CarsRepositoryInMemory from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import ListAvailableCarsUseCase from './ListAvailableCarsUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe('List cars', () => {
  beforeAll(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it('should be able to list all avaiable cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car description Test',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category'
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaiable cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car description Test',
      daily_rate: 100,
      license_plate: 'ABC-4567',
      fine_amount: 60,
      brand: 'Brand_test',
      category_id: 'category1'
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Brand_test'
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaiable cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Car description Test',
      daily_rate: 100,
      license_plate: 'DEF-1324',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category'
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car3'
    });
    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaiable cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car4',
      description: 'Car description Test',
      daily_rate: 100,
      license_plate: 'DEF-4567',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category_teste'
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: 'category_teste'
    });
    expect(cars).toEqual([car]);
  });
});
