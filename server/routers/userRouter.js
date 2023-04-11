const { followUser, getPostOfFollowings, getMyPostController, getUserPostController, deleteProfileController, getUserProfile, updateProfileController, getProfile } = require('../controllers/userController');
const requiredUser = require('../middleWare/requiredUser');
const router = require('express').Router();
const express = require('express');
var bodyParser = require('body-parser');
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
router.post('/follow', requiredUser, followUser);
router.get('/followingPost', requiredUser, getPostOfFollowings);
router.get('/getPost', requiredUser, getMyPostController);
router.post('/getUserPost', requiredUser, getUserPostController);
router.delete('/deleteProfile', requiredUser, deleteProfileController);
router.post('/getUserProfile', requiredUser, getUserProfile);
router.put('/update', requiredUser, updateProfileController);
router.get('/profile', requiredUser, getProfile)

module.exports = router;