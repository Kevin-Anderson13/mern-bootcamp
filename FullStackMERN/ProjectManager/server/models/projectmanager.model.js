const mongoose = require("mongoose");

const uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A Product Title is required"],
        minlength: [3, "A Product Title must be at least 3 characters"],
        unique: true
    },

    price: {
        type: Number
    },

    description: {
        type: String
    }
}, { timestamps: true })

ProductSchema.plugin(uniqueValidator);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;