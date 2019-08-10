const jwt = require('jsonwebtoken');
const config = require('../config');


exports.generateToken = async (data)=> {
    if(data)
        return jwt.sign({data}, global.API_KEY, {expiresIn: '1d'});
};

exports.verifyToken = async (token)=> {
    if(token)
        return jwt.verify(token, global.API_KEY);
}