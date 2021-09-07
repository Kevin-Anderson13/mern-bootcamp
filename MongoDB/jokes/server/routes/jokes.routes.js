const JokesController = require('../controllers/jokes.controller');

module.exports = (app) => {
	// get all objects
	app.get("/api/jokes", JokesController.getAll);
	
	// create a new object
	app.post("/api/jokes", JokesController.create);
	
	// get a single object
	app.get("/api/jokes/:id", JokesController.getOne);
	
	// update a single object
	app.put("/api/jokes/:id", JokesController.update);
	
	// delete a single object
	app.delete("/api/jokes/:id", JokesController.delete);
}
