const mongoose = require('mongoose');

// Below is a schema with some example info inside
const JokeSchema = mongoose.Schema({
	setup: {
		type: String,
		required: [true, "A joke setup is required"],
		minLength: [5, "A joke setup must be at least 5 characters long"]
	},
	punchline: {
		type: String,
		required: [true, "A punchline for your joke is required"],
		minLength: [2, "A punchline for your joke must be at least 2 characters long"]
	},
}, { timestamps: true });

// collection name and the schema jare required to create a model
module.exports = mongoose.model("joke", JokeSchema);

