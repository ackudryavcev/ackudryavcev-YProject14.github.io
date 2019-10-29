const routerError = require("express").Router();

routerError.get("/", (req, res) => {
	res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
});

module.exports = routerError;
