'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const products = await Product.find();
    return products;
};

exports.create = async (product) => {
    const prod = new Product(product);
    const productSaved = await prod.save();
    return productSaved;
    
};