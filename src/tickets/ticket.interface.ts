import { Transform } from 'stream';

export default interface ITicket extends Document {
  _id: number;
  movieTitle: string;
  availableTickets: number;
  movieGenre: string;
  price: number;
  transform(): Transform;
}
