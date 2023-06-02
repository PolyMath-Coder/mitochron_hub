export default interface IBookTicket extends Document {
  customerId: {
    type: string;
  };
  movie: {
    type: string;
  };
}
