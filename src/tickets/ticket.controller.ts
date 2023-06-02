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

const bookTicket = catchAsync(async (req: Request, res: Response) => {
  const { userId, ticketId } = req.query;

  const data = await ticketService.bookOneTicket(userId, ticketId);
  res.status(201).json({
    status: 'success',
    message: 'Ticket successfully booked...',
    data,
  });
});

export { createTicket, getTickets, bookTicket };
