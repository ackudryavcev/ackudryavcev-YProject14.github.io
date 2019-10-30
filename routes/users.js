const routerUser = require('express').Router();
const {
  getAllUsers, getUser, createUser,
} = require('../controllers/users');

routerUser.get('/:id', getUser);

routerUser.get('/', getAllUsers);

routerUser.post('/', createUser);

module.exports = routerUser;
