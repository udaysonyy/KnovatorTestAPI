const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const postSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    body : {
        type : String
    },
    createdBy : {
        type : String
    },
    isActive : {
        type : Boolean,
        require : true
    },
    location : {
        latitude : {
            type : String,
        },
        longitude : {
            type : String
        }
    }
})

module.exports = mongoose.model('post', postSchema);