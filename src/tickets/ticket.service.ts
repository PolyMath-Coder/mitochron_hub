import Ticket from './ticket.model';
import bookTicket from './book.ticket.model';

const createTicket = async (data: object) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    return await Ticket.create(rawData);
  } catch (error) {
    throw new Error('Unable to create ticket');
  }
};

const getTickets = async () => {
  try {
    return await Ticket.find();
  } catch (error) {
    throw new Error('Unable to create ticket');
  }
};

const bookOneTicket = async (userId: any, ticketId: any) => {
  const checkTicket = await Ticket.findById(ticketId);
  if (!checkTicket) {
    throw new Error(
      'Oops! Tickets for this movie event do not presently exist...'
    );
  }
  const { availableTickets } = await Ticket.findById(ticketId);
  if (availableTickets === 0) {
    throw new Error('Tickets for this events are no longer available...');
  }
  const checkBookedTicket = await bookTicket.findOne({
    customerId: userId,
    ticket: ticketId,
  });

  if (checkBookedTicket) {
    throw new Error('You are not permitted to book more than one ticket...');
  }
  const bookedTicket = await bookTicket.create({
    customerId: userId,
    ticket: ticketId,
  });
  const newNumberOfAvailableTickets = availableTickets - 1;

  await Ticket.findByIdAndUpdate(
    ticketId,
    { availableTickets: newNumberOfAvailableTickets },
    { new: true }
  );
  return bookedTicket;
};

export default { createTicket, getTickets, bookOneTicket };
