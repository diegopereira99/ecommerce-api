'use strict';

const repository = require('../repositories/product-repository');

exports.get = async (req, res, next) => {
    try {
        const products = await repository.get();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({status: false, message: "Erro ao buscar produtos"});
    }
};

exports.getBySlug = async (req, res, next) => {
    try {
        const product = await repository.getBySlug(req.params.slug);    
        res.status(200).send({status: true, product});
    } catch (error) {
        res.status(500).send({status: false, message: "Erro ao buscar produto"});
    }
};

exports.post = async (req, res, next) => {
    try {
        if(req.body.price <= 0) {
            throw("Preço deve ser maior que zero");
        }
        const product = await repository.create(req.body);    
        res.status(201).send(product);   
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({status: false, message: "Erro ao salvar produto"});
    }
    
};

exports.put = async (req, res, next) => {
    try {
        const product = await repository.update(req.params.id, req.body);    
        res.status(200).send({status: true, product});
    } catch (error) {
        res.status(500).send({status: false, message: "Erro ao alterar produto"});
    }
};

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);    
        res.status(200).send({status: true});
    } catch (error) {
        res.status(500).send({status: false, message: "Erro ao deletar produto"});
    }
};