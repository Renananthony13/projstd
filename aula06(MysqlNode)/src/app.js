const express = require('express');
const router = require('./routes/router.js')
const dotenv = require('dotenv').config()

const app = express();
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(router)

const db = require('./api/config/db.js') 

app.get('/', (req, res) => {
    res.send('Hello world')
})

// app.get('/getusers', (req, res) => {

//     const querySql =  'SELECT * FROM usuarios'

//     db.query(querySql, (error, result, fields) => {
//         if(error) {
//             console.log(error)
//         } else {
//             console.log(result)
//             // console.log(fields)
//         }
//     })

// })

// app.post('/newuser', (req, res) => {

//     const querySql = `INSERT INTO usuarios(nome, email, senha) VALUES ('${req.body.nome}', '${req.body.email}', '${req.body.senha}')`
//     // INSERT INTO usuarios(nome, email, senha) VALUES ('rodrigao', 'rodrigo@gmail.com', 123);

//     db.query(querySql, (error, data) => {
//         if(error) {
//             console.log(error)
//         } else {
//             console.log('Adicionado com sucesso')
//             res.status(200).json(data)
//         }
//     })

// })


module.exports = app



