export default interface IUser extends Document {
  name: {
    type: string;
  };
  age: {
    type: number;
  };
  gender: {
    type: string;
  };
}
