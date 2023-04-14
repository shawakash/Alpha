const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    image: {
        publicId: String,
        url: String
    },
    caption: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    
},{
    timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);