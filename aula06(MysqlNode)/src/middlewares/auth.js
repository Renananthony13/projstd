// middleware de autenticacao

const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization

    if(token) {
        res.status(401).send('Access token nao informado')
    }


    
}

