'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


const app = express();
mongoose.connect('mongodb+srv://diego:123@cluster0-rs7uk.mongodb.net/test?retryWrites=true&w=majority', ()=>{
    console.log('connected');
});


const Customer = require('./models/customer-model');
const Product = require('./models/product-model');
const Order = require('./models/order-model');

const indexRoutes = require('./routes/index-routes');
const productRoutes = require('./routes/product-routes');
const customerRoutes = require('./routes/customer-routes');
const orderRoutes = require('./routes/order-routes');
const loginRoutes = require('./routes/login-routes');
const authMiddleware = require('./middlewares/auth-guard');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const BASE_URL = '/v1';

app.use(BASE_URL+'/', indexRoutes);
app.use(BASE_URL+'/products', authMiddleware.authorize, productRoutes);
app.use(BASE_URL+'/customers', authMiddleware.authorize, customerRoutes);
app.use(BASE_URL+'/orders', authMiddleware.authorize, orderRoutes);
app.use(BASE_URL+'/login', loginRoutes);

module.exports = app;