const express = require('express');
const db = require('../api/config/db.js');

async function viewUser(req, res) {
    const querySql = 'SELECT * FROM usuarios';

    try {
        db.query(querySql, (error, result, fields) => {
            if(error) {
                console.log(error)
            } else {
                console.log(result)
                res.status(200).json(result)
                // console.log(fields)
            }
        })
    } catch(error) {
        console.log(error)
    }

}

module.exports = viewUser

