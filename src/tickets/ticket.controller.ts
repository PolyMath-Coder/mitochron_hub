import { Request, Response } from 'express';
import ticketService from './ticket.service';
import catchAsync from 'express-async-handler';

const createTicket = catchAsync(async (req: Request, res: Response) => {
  const data = await ticketService.createTicket(req.body);
  res
    .status(201)
    .json({ status: 'success', message: 'Ticket now created...', data });
});

const getTickets = catchAsync(async (req: Request, res: Response) => {
  const data = await ticketService.getTickets();
  res
    .status(201)
    .json({ status: 'success', message: 'All tickets now retrieved...', data });
});

export { createTicket, getTickets };
