const express = require('express');
const db = require('../api/config/db.js');


async function modificUser(req, res) {
    // const id = req.params
    const objt = req.body
    let values = [];

    //! pega os valores recebidos no body, e monta os valores que vao ser alterados, assim guardando em um array todos
    for(let el in req.body) {
        // console.log(objt[el])
        values.push(`${el} = '${objt[el]}'`)
    }

    //! dps passa esse arrays, com todos os valores que vao ser alterados, ja formatados pelo for a cima
    const queySql = `
        UPDATE usuarios
        SET ${values}
        WHERE idusuarios = ${req.params.id}
    `

    try {
        db.query(queySql, (error, data) => {
            if(error) {
                res.status(500).json(error)
            } else {
                res.status(200).json('Usuario alterado')
            }
        })
    } catch(error) {
        res.status(500).json(error)
    }

}



module.exports = modificUser
