import Ticket from './ticket.model';

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

export default { createTicket, getTickets };
