const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "An Author Name is required"
        ],
        minlength: [
            2,
            "An Author Name must be at least 2 characters"
        ],
    }
}, { timestamps: true })


const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;