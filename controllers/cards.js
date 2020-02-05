const card = require('../models/card');

module.exports.getAllCards = (req, res) => {
  card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

module.exports.deleteCard = (req, res) => {
  card.findById(req.params.cardId)
    // eslint-disable-next-line consistent-return
    .then((card) => {
      if (!card.owner.equals(req.user._id)) {
      // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({ message: 'Чужая карточка' });
      }
      if (!card) return Promise.reject(new Error('Такой карты нет'));
    })
    .then(() => card.findByIdAndRemove(req.params.id))
    .then((card1) => res.send(card1))
    .catch((err) => res.status(404).send({ message: `Возникла ошибка ${err.message}` }));
};
