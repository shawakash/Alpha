const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    avatar: {
        publicId: String,
        url: String
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    followings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        }
    ]
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);