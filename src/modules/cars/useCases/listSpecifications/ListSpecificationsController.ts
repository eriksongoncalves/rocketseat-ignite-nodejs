import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSpecificationsUseCase from './ListSpecificationsUseCase';

class ListSpecificationsController {
  async handle(_req: Request, res: Response) {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );

    const specifications = await listSpecificationsUseCase.execute();

    return res.json({ specifications });
  }
}

export default ListSpecificationsController;
