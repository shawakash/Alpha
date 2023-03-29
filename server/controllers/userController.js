const Post = require('../models/Post');
const User = require('../models/User');
const wrapResponse = require('../utils/wrapResponse');

const followUser = async (req, res) => {
    try {
        const toFollow = req.body.followId;
        const userId = req._id;
        if (toFollow == userId) {
            return res.status(401).send(wrapResponse.error(401, 'Cant follow yourself'));
        }
        if (!toFollow) {
            return res.status(404).send(wrapResponse.error(404, 'Follow id not Provided'));
        }
        try {
            const user = await User.findById(userId);
            const followUser = await User.findById(toFollow);
            console.log(user);
            if (user.followings.includes(toFollow)) {
                user.followings = user.followings.filter(followerId => followerId != toFollow);
                const updatedUser = await user.save();
                followUser.followers = followUser.followers.filter(followerId => followerId != userId);
                const updatedFollowingUser = await followUser.save();
                return res.status(201).send(wrapResponse.success(201, updatedUser));
            }
            user.followings.push(toFollow);
            const updatedUser = await user.save();
            followUser.followers.push(userId);
            await followUser.save();
            return res.status(201).send(wrapResponse.success(201, updatedUser));
        } catch (e) {
            return res.status(404).send(wrapResponse.error(404, 'User Not Found'));
        }
    } catch (error) {
        return res.status(500).send(wrapResponse.error(500, e.message));
    }
};

const getPostOfFollowings = async (req, res) => {
    try {
        const userId = req._id;
        const user = await User.findById(userId);
        let posts = [];
        if (!user) {
            return res.status(404).send(wrapResponse.error(404, 'User Not Found'));
        }
        const folllowingIds = user.followings;
        console.log(folllowingIds)
        for (const followingId of folllowingIds) {
            const followingUser = await User.findById(followingId);
            const postIds = followingUser.post;
            for (const postId of postIds) {
                const post = await Post.findById(postId);
                posts.push(post);
            }
        }
        return res.status(201).send(wrapResponse.success(201, posts));

        // shortcut
        // const post = await Post.find({
        //     "owner": {
        //         "$in": user.followings,
        //     }
        // });
        // the above is not prefreable for large number of users/posts

    } catch (error) {
        return res.send(wrapResponse.error(500, e.message));
    }

};

const getMyPostController = async (req, res) => {
    try {
        const userId = req._id;
        const post = await Post.find({
            owner: userId
        }).populate('likes');
        if (!post) {
            return res.status(404).send(wrapResponse.error(404, 'Post not Found'));
        }
        return res.status(201).send(wrapResponse.success(201, post));
    } catch (e) {
        return res.status(500).send(wrapResponse.error(500, e.message));
    }


};
const getUserPostController = async (req, res) => {
    try {
        const userId = req.body.userId;
        if (!userId) {
            return res.status(401).send(wrapResponse.error(401, 'No id provided'));
        }
        const posts = await Post.find({
            owner: userId
        }).populate('likes');
        if (!posts.length) {
            return res.status(404).send(wrapResponse.error(404, 'This user has not yet posted'));
        }
        return res.status(200).send(wrapResponse.success(200, posts));
    } catch (e) {
        return res.status(500).send(wrapResponse.error(500, 'Server Error'));
    }
};

const deleteProfileController = async (req, res) => {
    try {
        const userId = req._id;
        const testUser = await User.findById(userId);
        if(!testUser) {
            return res.status(404).send(wrapResponse.error(404, 'No such user in database'));
        }
        const likedPosts = await Post.find({
            likes: userId
        });
        if (likedPosts.length) {
            for (const likedPost of likedPosts) {
                likedPost.likes = likedPost.likes.filter(likes => likes != userId);
                await likedPost.save();
            }
        }
        const posts = await Post.find({
            owner: userId
        });
        if (posts.length) {
            for (const post of posts) {
                const postId = post._id;
                await Post.findByIdAndDelete(postId);
            }
        }

        // await Post.deleteMany({owner: userId});   ---> shortcut 6 
        // findByid works on O(log n ) whereas find({}) works by looping <all></all>


        const followings = await User.find({
            'followers': userId
        });
        if (followings.length) {
            for (const followingUser of followings) {
                followingUser.followers = followingUser.followers.filter(followUser => followUser != userId);
                await followingUser.save();
            }
        }
        const followers = await User.find({
            'followings': userId
        });
        if (followers.length) {
            for (const follower of followers) {
                follower.followings = follower.followings.filter(following => following != userId);
                await follower.save();
            }
        }
        const deletedProfile = await User.findByIdAndDelete(userId);
        console.log(deletedProfile);
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: true
        });
        return res.status(200).send(wrapResponse.success(200, deletedProfile));
    } catch (e) {
        return res.status(500).send(wrapResponse.error(500, e.message));
    }
};

module.exports = {
    followUser,
    getPostOfFollowings,
    getUserPostController,
    getMyPostController,
    deleteProfileController,
};


