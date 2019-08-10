'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.create = async (customer) => {
    const cust = new Customer(customer);
    const customerSaved = await cust.save();
    return customerSaved;
};
