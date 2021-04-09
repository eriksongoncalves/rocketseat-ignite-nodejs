import Car from '@modules/cars/infra/typeorm/entities/Car';
import ICarRepository, { ICreateCarDTO } from '../ICarRepository';

class CarsRepositoryInMemory implements ICarRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id
  }: ICreateCarDTO) {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });

    this.cars.push(car);

    return car;
  }

  async list(): Promise<Car[]> {
    return this.cars;
  }

  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = this.cars.find(c => c.license_plate === license_plate);
    return car;
  }
}

export default CarsRepositoryInMemory;
