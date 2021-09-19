// import express and other libraries
const express = require("express");
const cors = require("cors");
const app = express();

// configure express app server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:3000"
}));

// configure mongoose to connect
// create mongoose.config.js in config folder then use require below.  see notes on config folder
require("./config/mongoose.config");

// add routes to listen
const productRoutes = require("./routes/projectmanager.routes");
productRoutes(app); // run the routes and pass in our app server

// start the app server listening (usually port 8000)
app.listen(8000, () => {console.log("The express app server is listening on port: " + 8000);})

// then use nodemon server.js or npx nodemon server.js or node server.js
// the command to "start" is written in the package.json


