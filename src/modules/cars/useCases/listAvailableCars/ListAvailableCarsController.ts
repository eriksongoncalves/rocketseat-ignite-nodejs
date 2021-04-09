import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAvailableCarsUseCase from './ListAvailableCarsUseCase';

interface IQuery {
  brand?: string;
  category_id?: string;
  name?: string;
}

class ListAvailableCarsController {
  async handle(req: Request, res: Response) {
    const { brand, category_id, name }: IQuery = req.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase
    );

    const cars = await listAvailableCarsUseCase.execute({
      brand,
      category_id,
      name
    });

    return res.json({ cars });
  }
}

export default ListAvailableCarsController;
