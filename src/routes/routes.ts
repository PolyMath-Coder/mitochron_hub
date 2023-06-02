import { Router } from 'express';
import ticketRouter from '../tickets/ticket.routes';
import userRouter from '../users/user.routes';
const router: Router = Router();

router.use('/ticket', ticketRouter);

router.use('/user', userRouter);

export default router;
