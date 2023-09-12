const exprress = require('express');
const db = require('../api/config/db.js');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
    const {nome, email, tlefone ,senha} = req.body;

    const hash = bcrypt.hashSync(senha, 10)

    const querySql = `INSERT INTO usuarios(nome, email, senha, telefone) VALUES ('${req.body.nome}', '${req.body.email}','${hash}', '${req.body.telefone}')`
    // INSERT INTO usuarios(nome, email, senha) VALUES ('rodrigao', 'rodrigo@gmail.com', 123);

    try {
        db.query(querySql, (error, data) => {
            if(error) {
                console.log(error)
            } else {
                console.log('Adicionado com sucesso')
                res.status(200).json(data)
            }
        })
    } catch(error) {
        console.log(error)
    }

}

module.exports = createUser




