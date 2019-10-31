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
  card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) { res.status(404).send({ message: 'Нет такой карточки' }); } else { res.send({ data: card }); }
    })
    .catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};
