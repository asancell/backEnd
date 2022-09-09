const route = require('express').Router();
const authController = require('../controllers/auth.controller');

route.post('/register',authController.register)

module.exports = route