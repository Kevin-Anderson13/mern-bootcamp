 const mongoose = require('mongoose');
const dbName = "jokesDB"; // name in quotes can be anything

mongoose.connect("mongodb://localhost/jokesDB", {
useNewUrlParser: true, 
useUnifiedTopology: true,
})
	.then(() => {
	console.log("You successfully connected to the " + jokesDB + " database!")
	})
	.catch((err) => {
	console.log("There was an error connecting to the " + jokesDB + " database:"); 
	console.log(err);
});