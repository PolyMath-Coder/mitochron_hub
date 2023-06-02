import { Router } from 'express';

import { createTicket, getTickets, bookTicket } from './ticket.controller';

const ticketRouter: Router = Router();

ticketRouter.post('/create', createTicket);

ticketRouter.get('/all', getTickets);

ticketRouter.put('/book', bookTicket);

export default ticketRouter;
