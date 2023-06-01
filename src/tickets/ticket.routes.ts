import { Router } from 'express';

import { createTicket, getTickets } from './ticket.controller';

const ticketRouter: Router = Router();

ticketRouter.post('/create', createTicket);

ticketRouter.get('/all', getTickets);

export default ticketRouter;
