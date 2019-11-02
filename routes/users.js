const routerUser = require('express').Router();
const {
  getAllUsers, getUser,
} = require('../controllers/users');

routerUser.get('/:id', getUser);

routerUser.get('/', getAllUsers);

module.exports = routerUser;
