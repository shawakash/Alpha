const { getAllPosController, createPostController, likeandUnlikePostController, deletePostController, updatePostController, likedPostController } = require('../controllers/postController');
const requiredUser = require('../middleWare/requiredUser');
const router = require('express').Router();

router.get('/all', requiredUser, getAllPosController);
router.post('/createPost', requiredUser, createPostController);
router.post('/likePost', requiredUser, likeandUnlikePostController);
router.delete('/deletePost', requiredUser, deletePostController);
router.put('/updatePost', requiredUser, updatePostController);
router.get('/likedPosts', requiredUser, likedPostController);

module.exports = router;