const routerCards = require('express').Router();
const cards = require('../data/cards');

routerCards.get('/', (req, res) => {
  res.send(cards);
});
module.exports = routerCards;
