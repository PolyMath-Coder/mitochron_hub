import ITicket from './ticket.interface';

import mongoose, { Schema } from 'mongoose';

const ticketSchema: Schema = new Schema({
  movieTitle: {
    type: String,
    trim: true,
  },
  availableTickets: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
