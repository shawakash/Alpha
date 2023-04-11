const Post = require('../models/Post');
const User = require('../models/User');
const wrapResponse = require('../utils/wrapResponse');
const cloudinary = require('cloudinary').v2;

const getAllPosController = async (req, res) => {
    const owner = req._id;
    const user = await User.findById(owner);
    if (!user) {
        return res.status(404).send(wrapResponse.error(404, 'User not found'));
    }
    console.log(user)
    let allPost = [];
    const userPosts = user.post;
    console.log(userPosts)
    for (const postId of userPosts) {                        // don't use for Each 
        const post = await Post.findById(postId);
        console.log(post);
        if (!post) {
            return res.status(404).send(wrapResponse.error(404, 'Post not found'));
        }
        allPost.push(post);
    };
    console.log(allPost)
    return res.send(wrapResponse.success(201, allPost));
}

const createPostController = async (req, res) => {
    const caption = req.body.caption;
    const postImage = req.body.image;
    const owner = req._id;
    let image = {}
    const user = await User.findById(req._id);
    if (!caption) {
        return res.status(401).send(wrapResponse.error(401, 'Caption Needed'));
    }
    if(postImage) {
        const cloudImg = await cloudinary.uploader.upload(postImage, {
            folder: "postImg",
        });
        image = {
            url: cloudImg.secure_url,
            publicId: cloudImg.public_id
        }
    }
    // 
    const post = await Post.create({
        caption,
        image,
        owner,
    });
    console.log(post);
    if (!post) {
        return res.status(403).json(wrapResponse.error(403, 'Cannot make this post :('));
    } else {
        user.post.push(post._id);
        await user.save();
        console.log(user.post)
        return res.status(201).json(wrapResponse.success(201, { post }));
    }
};

const likeandUnlikePostController = async (req, res) => {
    try {
        const postId = req.body.postId;
        const userId = req._id;
        try {
            const post = await Post.findById(postId);
            if (post.likes.includes(userId)) {
                post.likes = post.likes.filter(likedBy => likedBy != userId);
                await post.save();
                return res.status(201).send(wrapResponse.success(201, post));
            }
            post.likes.push(userId);
            const updatedPost = await post.save();
            return res.status(201).send(wrapResponse.success(201, updatedPost));

        } catch (error) {
            return res.status(404).send(wrapResponse.error(404, 'Post Not Found'));

        }
        
    } catch (e) {
        return res.status(500).send(wrapResponse.error(500, e.message));
    }

};

const updatePostController = async (req, res) => {
    try {
        const postId = req.body.postId;
        const caption = req.body.caption;
        const post = await Post.findById(postId);
        const userId = req._id;
        if (!post) {
            return res.status(404).send(wrapResponse.error(404, 'Post not found'));
        }

        if (post.owner != userId) {
            return res.status(401).send(wrapResponse.error(401, 'Only owner can updated post'));
        }
        post.caption = caption;
        const updatedPost = await post.save();
        return res.status(201).send(wrapResponse.success(201, updatedPost));
    } catch (e) {
        return res.status(500).send(wrapResponse.error(500, e.message));
    }

};
const deletePostController = async (req, res) => {
    try {
        const postId = req.body.postId;
        const post = await Post.findById(postId);
        const userId = req._id;
        if (!post) {
            return res.status(404).send(wrapResponse.error(404, 'Post not found'));
        }

        if (post.owner != userId) {
            return res.status(401).send(wrapResponse.error(401, 'Only owner can delete post'));
        }
        const user = await User.findById(userId);
        user.post = user.post.filter(id => id != postId);
        const updatedPost = await user.save();
        await Post.findByIdAndDelete(postId);
        return res.status(201).send(wrapResponse.success(201, updatedPost));
    } catch (e) {
        return res.status(500).send(wrapResponse.error(500, e.message));
    }

};

module.exports = { getAllPosController, createPostController, likeandUnlikePostController, updatePostController, deletePostController };