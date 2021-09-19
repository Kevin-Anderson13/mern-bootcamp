const Product = require("../models/projectmanager.model.js");

module.exports = {
    getAll: (req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => res.status(400).json(err))
    },

    getOne: (req, res) => {
        Product.findById({ _id: req.params._id })
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => res.status(400).json(err))
    },

    create : (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => res.status(400).json(err))
    },

    update: (req, res) => {
        Product.findByIdAndUpdate(
            { _id: req.params._id },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .then((updatedProduct) => res.json(updatedProduct))
            .catch((err) => res.status(400).json(err))
    },

    delete: (req, res) => {
        Product.deleteOne({ _id: req.params._id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => res.status(400).json(err))
    }


}