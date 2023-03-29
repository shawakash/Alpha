const { followUser, getPostOfFollowings, getMyPostController, getUserPostController, deleteProfileController } = require('../controllers/userController');
const requiredUser = require('../middleWare/requiredUser');
const router = require('express').Router();

router.post('/follow', requiredUser, followUser);
router.get('/followingPost', requiredUser, getPostOfFollowings);
router.get('/getPost', requiredUser, getMyPostController);
router.get('/getUserPost', requiredUser, getUserPostController);
router.delete('/deleteProfile', requiredUser, deleteProfileController);

module.exports = router;