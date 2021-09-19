const ProductController = require("../controllers/projectmanager.controller");

module.exports = (app) => {
	// get all objects
	app.get("/api/products", ProductController.getAll);
	
	// create a new object
	app.post("/api/products", ProductController.create);
	
	// get a single object
	app.get("/api/products/:_id", ProductController.getOne);
	
	// update a single object
	app.put("/api/products/:_id", ProductController.update);
	
	// delete a single object
	app.delete("/api/products/:_id", ProductController.delete);
}
