const routerUser = require('express').Router();

const users = require('../data/users');

routerUser.get('/', (req, res) => {
  res.send(users);
});
routerUser.get('/:id', (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < users.length; i += 1) {
    // eslint-disable-next-line eqeqeq
    if (users[i]._id == id) {
      res.send(users[i]);
      return;
    }
  }
  res.status(404).send({ message: 'Нет пользователя с таким id' });
});
module.exports = routerUser;
