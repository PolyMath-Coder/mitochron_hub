import mongoose, { Schema } from 'mongoose';
import IBookTicket from './book.ticket.interface';

const bookTicketSchema: Schema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  ticket: {
    type: Schema.Types.ObjectId,
    ref: 'Ticket',
  },
});

const bookTicket = mongoose.model<IBookTicket>('Booking', bookTicketSchema);

export default bookTicket;
