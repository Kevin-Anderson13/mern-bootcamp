const mongoose = require('mongoose');
const dbName = "authors";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`You successfully connected to the ${dbName} database!`)
    })
    .catch((err) => {
        console.log(`There was an error connecting to ${dbName}`);
        console.log(err);
    });