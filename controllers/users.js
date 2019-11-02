const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  user.find({}, '-password')
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

module.exports.getUser = (req, res) => {
  user.findById(req.params.id, '-password')
    .then((user) => {
      if (!user) { res.status(404).send({ message: 'Нет такого пользователя' }); } else { res.send({ data: user }); }
    })
    .catch(() => {
      res.status(404).send({ message: 'Нет такого пользователя' });
    });
};

module.exports.createUser = (req, res) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => user.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => {
      const userNoPassword = user.toObject();
      delete userNoPassword.password;
      res.send(userNoPassword);
    })
    .catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  return user.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });

      res.send({ token });
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message });
    });
};
