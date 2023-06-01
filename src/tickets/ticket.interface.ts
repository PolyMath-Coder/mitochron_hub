export default interface ITicket extends Document {
  movieTitle: {
    type: string;
  };
  availableTickets: {
    type: number;
  };
  price: {
    type: number;
  };
}
