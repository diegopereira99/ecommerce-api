'use strict';

const repository = require('../repositories/customer-repository');


exports.post = async (req, res, next) => {
    try {
        const customer = await repository.create(req.body);    
        res.status(201).send(customer);   
    } catch (error) {
        console.log(error.message);
        res.status(500).send({status: false, message: "Erro ao salvar usuário"});
    }
    
};