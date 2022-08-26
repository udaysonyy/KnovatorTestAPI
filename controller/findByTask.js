const post = require('../models/post');

const locationFind = async (req, res) => {
    const { lat, long } = req.body;
    try {
        const posts = await post.find({'location.latitude' : lat, 'location.longitude' : long});
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.send("There is error in finding post based on location");
    }
}

const activeCount = async (req, res) => {
    try {
        const activePosts = await post.find({'isActive': true}).count();
        const inactivePosts = await post.find({'isActive': false}).count();
        const posts = {
            'activePosts' : activePosts,
            'inactivePosts' : inactivePosts
        }
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.send("There is error finding count");
    }
}

module.exports = { locationFind , activeCount };