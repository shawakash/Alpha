const {signupController, loginController, refreshAccessTokenController} = require('../controllers/authController');
const { logoutController } = require('../controllers/authController');
const requiredUser = require('../middleWare/requiredUser');
const router = require('express').Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.get('/refresh', refreshAccessTokenController);
router.get('/logout', requiredUser, logoutController);


module.exports = router;