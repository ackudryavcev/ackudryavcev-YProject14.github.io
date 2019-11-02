const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routerUser = require('./routes/users');
const routerCards = require('./routes/cards');
const routerError = require('./routes/error');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.post('/signin', login);
app.post('/signup', createUser);

app.use(auth);

app.use('/users', routerUser);
app.use('/cards', routerCards);
app.use('/:id', routerError);
app.listen(PORT);
