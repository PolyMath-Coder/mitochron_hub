import { Router } from 'express';
import ticketRouter from '../tickets/ticket.routes';
const router: Router = Router();

router.use('/ticket', ticketRouter);

export default router;
