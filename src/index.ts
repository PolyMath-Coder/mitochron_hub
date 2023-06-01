import express from 'express';
import { Request, Response } from 'express';
import { json, urlencoded } from 'express';
import { config } from 'dotenv';
config();
import connect from './config/mongoose';
import apiRoutes from './routes/routes';
const PORT = process.env.PORT;

const app = express();

app.use(json());

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: true, message: 'Welcome to Mitochron server!' });
});

connect();

app.listen(PORT, (): void => {
  console.log(`Server now live at port ${PORT}`);
});
