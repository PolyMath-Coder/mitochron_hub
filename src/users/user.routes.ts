import { Router } from 'express';

import { createUser } from './user.controller';

const userRouter: Router = Router();

userRouter.post('/create', createUser);
