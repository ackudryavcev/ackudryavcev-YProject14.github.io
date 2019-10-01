const express = require('express');
const path = require('path');
const routerUser = require('./routes/users');
const routerCards = require('./routes/cards');
const routerError = require('./routes/error');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', routerUser);
app.use('/cards', routerCards);
app.use('/:id', routerError);
app.listen(PORT);
