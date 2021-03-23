import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserUseCase from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const data = await authenticateUserUseCase.execute({
      email,
      password
    });

    return res.json({ data });
  }
}

export default AuthenticateUserController;