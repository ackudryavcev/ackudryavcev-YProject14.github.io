const user = require("../models/user");

module.exports.getAllUsers = (req, res) => {
	user.find({})
		.then((users) => res.send({ data: users }))
		.catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

module.exports.getUser = (req, res) => {
	user.findById(req.params.id)
		.then((user) => {
			res.send({ data: user });
		})
		.catch(() => {
			res.status(404).send({ message: "Нет такого пользователя" });
		});
};

module.exports.createUser = (req, res) => {
	const { name, about, avatar } = req.body;

	user.create({ name, about, avatar })
		.then((user) => res.send({ data: user }))
		.catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};
