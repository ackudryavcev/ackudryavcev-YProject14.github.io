import express, { static } from 'express';
import { join } from 'path';
import routerUser from './routes/users';
import routerCards from './routes/cards';
import routerError from './routes/error';

const { PORT = 3000 } = process.env;
const app = express();
app.use(static(join(__dirname, 'public')));
app.use('/users', routerUser);
app.use('/cards', routerCards);
app.use('/:id', routerError);
app.listen(PORT);
