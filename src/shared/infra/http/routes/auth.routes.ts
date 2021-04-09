import { Router } from 'express';

import AuthenticateUserController from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authRouter = Router();
const authenticateUserController = new AuthenticateUserController();

authRouter.post('/sessions', authenticateUserController.handle);

export default authRouter;
