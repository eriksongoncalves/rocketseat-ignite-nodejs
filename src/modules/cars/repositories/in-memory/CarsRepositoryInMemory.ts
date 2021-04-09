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

  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = this.cars.find(c => c.license_plate === license_plate);
    return car;
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const cars = this.cars.filter(c => {
      let regMatch = true;

      if (c.available) {
        if (brand && c.brand !== brand) {
          regMatch = false;
        }

        if (category_id && c.category_id !== category_id) {
          regMatch = false;
        }

        if (name && c.name !== name) {
          regMatch = false;
        }
      } else {
        regMatch = false;
      }

      return regMatch;
    });

    return cars;
  }
}

export default CarsRepositoryInMemory;
