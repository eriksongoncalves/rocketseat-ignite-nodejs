import { getRepository, Repository } from 'typeorm';

import ICarRepository, {
  ICreateCarDTO
} from '@modules/cars/repositories/ICarRepository';
import Car from '../entities/Car';

class CarRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id
  }: ICreateCarDTO) {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });

    await this.repository.save(car);

    return car;
  }

  async list() {
    const cars = await this.repository.find();
    return cars;
  }

  async findByLicensePlate(license_plate: string) {
    const car = await this.repository.findOne({ license_plate });
    return car;
  }
}

export default CarRepository;
