const express = require('express');
const router = express.Router();

//! controllers
const createUser = require('../controllers/createUserController.js')
const viewUser = require('../controllers/viewUserController.js')
const modificUser = require('../controllers/modifcUserController.js')
const login = require('../controllers/loginController.js');

router.post('/newuser', createUser)
router.get('/getusers', viewUser)
router.put('/update/:id', modificUser)
router.post('/login', login)

module.exports = router




