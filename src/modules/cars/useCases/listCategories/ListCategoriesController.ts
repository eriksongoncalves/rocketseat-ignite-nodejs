import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCategoriesUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(_req: Request, res: Response) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const categories = await listCategoriesUseCase.execute();

    return res.json({ categories });
  }
}

export default ListCategoriesController;
