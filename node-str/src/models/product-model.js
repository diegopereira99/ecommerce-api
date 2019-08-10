'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    sku: {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
    }
});

module.exports = mongoose.model('Product', schema);