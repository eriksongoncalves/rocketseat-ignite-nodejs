import Car from '@modules/cars/infra/typeorm/entities/Car';

export interface ICreateCarDTO {
  name: string;
  description: string;
  daily_rate: number;
  available?: boolean;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

interface ICarRepository {
  create({
    name,
    description,
    daily_rate,
    available,
    license_plate,
    fine_amount,
    brand,
    category_id
  }: ICreateCarDTO): Promise<Car>;

  findByLicensePlate(license_plate: string): Promise<Car | undefined>;

  findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]>;
}

export default ICarRepository;
