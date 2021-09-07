const Jokes = require('../models/jokes.model');

// get all objects
module.exports.getAll = (req, res) => {
	console.log("inside get all");
	
	Jokes.find()
		.then((allJokes) => {
			console.log(allJokes);
			res.json(allJokes);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

// create a new object
module.exports.create = (req, res) => {
	console.log(req.body);  // holds the json object that we will use for create
	
	Jokes.create(req.body)
		.then((newObject) => {
			console.log(newObject);
			res.json(newObject);
		})
		.catch((err) => {
			console.log(err);
			// change the response object status to 400 so the client can see the error
			// then send the error in json back to the client
			res.status(400).json(err);
		})
};

// get a single object
module.exports.getOne = (req, res) => {
	console.log("looking for id: " + req.params.id);
	
	Jokes.findById(req.params.id)
		.then((oneObject)  =>  {
			console.log(oneObject);
			res.json(oneObject);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
};

// update a single object
// need the ID and the data to update an existing document
module.exports.update = (req, res) => {
	console.log("looking for id: " + req.params.id);
	console.log(req.body);  // holds the json object that we will use for update
	
	Jokes.findByIdAndUpdate(req.params.id, req.body, {
		new: true,            // this returns the updated data
		runValidators: true,
	})
		.then((updatedObject) => {
			console.log(updatedObject);
			res.json(updatedObject);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
};

// delete a single object
module.exports.delete = (req, res) => {
	console.log("looking for id: " + req.params.id);
	
	Jokes.findByIdAndDelete(req.params.id)
		.then((deletedObject) => {
			console.log(deletedObject);
			res.json(deletedObject);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
} 
