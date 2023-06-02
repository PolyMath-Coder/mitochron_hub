import userService from './user.service';
import catchAsync from 'express-async-handler';
import { Request, Response } from 'express';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = await userService.createUser(req.body);
  res
    .status(201)
    .json({ status: 'success', message: 'Ticket now created...', data });
});

export { createUser };
