import { Transformer } from 'typescript';
import ITicket from './ticket.interface';

import mongoose, { Model, Schema } from 'mongoose';

interface TicketModel extends Model<ITicket> {}

const ticketSchema: Schema = new Schema<ITicket>({
  movieTitle: {
    type: String,
    trim: true,
  },
  availableTickets: {
    type: Number,
  },
  movieGenre: {
    type: String,
    trim: true,
  },

  price: {
    type: Number,
  },
});

// ticketSchema.methods.transform = function(): {
//   const {} = this
// }

const Ticket = mongoose.model<any>('Ticket', ticketSchema);

export default Ticket;
