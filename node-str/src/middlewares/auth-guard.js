const jwt = require('jsonwebtoken');
const config = require('../config');



exports.authorize = async (req, res, next) => {
    const token = req.headers['authorizate-token'];
    if(token) {
        jwt.verify(token, global.API_KEY, (error, decoded)=> {
            if(error) {
                res.status(401)
                .send({message: "Token inválido"});
            }else {
                next();
            }
        });
    }else {
        res.status(401)
        .send({message: "Token para acesso à API não informado"});
    } 
}