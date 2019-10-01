import cards from '../data/cards';

const routerCards = require('express').Router();


routerCards.get('/', (req, res) => {
  res.send(cards);
});
export default routerCards;
