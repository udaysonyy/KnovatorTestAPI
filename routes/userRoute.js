const express = require('express');
const userRoute = express.Router();
const { register, login } = require('../controller/createUser')

userRoute.post('/register', register);
userRoute.post('/login', login);

module.exports = userRoute;

