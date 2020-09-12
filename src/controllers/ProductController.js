const { update } = require('../models/Product');
const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json({ products });
    },

    async store(req, res) {
        const { title, description, url } = req.body;
        
        return res.status(201).json(await Product.create({ title, description, url }))
    },
}