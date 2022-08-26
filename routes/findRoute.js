const express = require('express');
const findRoute = express.Router();
const { locationFind , activeCount } = require('../controller/findByTask')

findRoute.post('/locationFind', locationFind);
findRoute.get('/activeCount', activeCount);

module.exports = findRoute;