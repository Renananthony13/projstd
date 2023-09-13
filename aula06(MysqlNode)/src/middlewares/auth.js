// middleware de autenticacao

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization

    if(token) {
        res.status(401).send('Access token nao informado')
    } 

    const [text, token_ver] = token.split(' ')

    try {

        jwt.verify(token_ver, process.env.SECRET_KEY)

        const {iduser, emailUser} = jwt.decode(token_ver)
        
        req.iduser = iduser
        req.emailUser = emailUser

        return next()
    } catch(error) {
        res.status(501).res('Acess toke n')
    }
    
}

