'use strict';

const repository = require('../repositories/order-repository');


exports.post = async (req, res, next) => {
    try {
        const order = await repository.create(req.body);    
        res.status(201).send(order);   
    } catch (error) {
        console.log(error.message);
        res.status(500).send({status: false, message: "Erro ao salvar pedido"});
    }   
};

exports.put = async (req, res, next) => {
    try {
        const order = await repository.update(req.params.id);
        const {_id, status} = order;
        res.status(200).send({_id, status});   
    } catch (error) {
        console.log(error.message);
        res.status(500).send({status: false, message: "Erro ao alterar status do pedido"});
    }   
};

exports.get = async (req, res, next) => {
    try {
        const orders = await repository.get();
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send({status: false, message: "Erro ao buscar pedidos"});
    }
};