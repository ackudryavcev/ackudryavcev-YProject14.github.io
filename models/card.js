const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 30,
	},
	link: {
		type: String,
		required: true,
		validate: {
			validator: (v) => /https?:/.test(v),
			message: "Не соотвествует формату",
		},
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
		required: true,
	},
	likes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
		default: [],
		required: false,
	}],
	createdAt: {
		type: Date,
		default: Date.now,
		required: false,
	},
});

module.exports = mongoose.model("card", cardSchema);
