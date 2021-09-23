const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
	// get all author
	app.get("/api/authors", AuthorController.getAllAuthors);
	
	// create a new author
	app.post("/api/authors", AuthorController.createAuthor);
	
	// get a single author
	app.get("/api/authors/:_id", AuthorController.getOneAuthor);
	
	// update a single author
	app.put("/api/authors/:_id", AuthorController.updateAuthor);
	
	// delete a single author
	app.delete("/api/authors/:_id", AuthorController.deleteAuthor);
}