'use strict'

const tokenService = require('../services/token-service');


exports.login = async (req, res, next) => {
    if(req.body.email) {
        const token = await tokenService.generateToken(req.body.email);
        res.status(200).send({token, message: "Token gerado com sucesso! Utilize ele para acessar a API"});
    }else {
        res.status(400).send({message:"Informe um e-mail para gerar seu token de acesso à API"});
    }
};


