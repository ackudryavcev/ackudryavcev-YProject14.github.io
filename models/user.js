/* eslint-disable no-useless-escape */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 30,
	},
	about: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 30,
	},
	avatar: {
		type: String,
		required: true,
		validate: {
			validator: (v) => /https?:/.test(v),
			message: "Не соотвествует формату",
		},
	},
});

module.exports = mongoose.model("user", userSchema);
