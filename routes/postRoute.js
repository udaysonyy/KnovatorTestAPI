const express = require('express');
const postRoute = express.Router();
const { getPost, makePost, deletePost, updatePost } = require('../controller/createPost');
const auth = require('../middleware/auth');

postRoute.get('/', auth, getPost);
postRoute.post('/', auth, makePost);
postRoute.delete('/:id', auth, deletePost);
postRoute.put('/:id', auth, updatePost);

module.exports = postRoute;