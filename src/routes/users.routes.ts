import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import CreateUserController from '../modules/accounts/useCases/createUser/CreateUserController';
import UpdateUserAvatarController from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRouter = Router();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

usersRouter.post('/', createUserController.handle);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('file'),
  updateUserAvatarController.handle
);

export default usersRouter;
