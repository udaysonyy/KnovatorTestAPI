const post = require('../models/post');

const makePost = async (req, res) => {
    const { title , body , createdBy , isActive , location } = req.body;

    try {
        const newPost = await post.create({
            title : title,
            body : body,
            createdBy : createdBy,
            isActive : isActive,
            location : location
        })
    } catch (e) {
        console.log(e);
        res.send("There is error making post");
    }


}

const getPost = async (req, res) => {
    try {
        const posts = await post.find();
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.send("There is error getting post");
    }
}

const updatePost = async (req, res) => {
    const id = req.params.id;

    const { title , body , createdBy , isActive , location } = req.body;
    
    const newPost = {
        title : title,
        body : body,
        createdBy : createdBy,
        isActive : isActive,
        location : location
    };

    try {
        await post.findByIdAndUpdate(id, newPost, {new : true});
    } catch (e) {
        console.log(e);
        console.log("There is error updating post");
    }
}

const deletePost = async (req, res) => {
    const id = req.params.id;

    try {
        await post.findByIdAndDelete(id);
    } catch (e) {
        console.log(e);
        console.log("There is error deleting post");
    }
}

module.exports = { makePost , getPost , updatePost , deletePost };