const jwt = require('jsonwebtoken');      // npm i jsonwebtoken
const bcrypt = require('bcrypt');
const Users = require('../models/User');
const wrapRespose = require('../utils/wrapResponse');
const signupController = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username;
        const avatar = req.body.avatar;
        console.log(avatar)
        const mobileNumber = req.body.mobileNumber;
        const existingUserName = await Users.findOne({ username: username });
        const existingEmail = await Users.findOne({ email: email });
        const existingMobileNumber = await Users.findOne({ mobileNumber: mobileNumber });
        if (existingEmail || existingMobileNumber || existingUserName) {
            res.status(409).json(wrapRespose.error(409, 'Username already in use :( '));
            return;
        }
        if (!email || !mobileNumber || !username) {
            res.status(400).send(wrapRespose.error(400, 'Data Absent :)'));
            return;
        }

        //  validation code

        // hash the password by bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({
            name,
            email,
            password: hashedPassword,
            username,
            mobileNumber,
            avatar
        });
        const users = await newUser.save();
        const createdUser = await Users.findById(users._id);
        if (!users) {
            return res.status(403).json(wrapRespose.error(403, ':)'));
        } else {
            return res.status(201).json(wrapRespose.success(201, {users}));
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
const loginController = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        if (!username) {
            return res.status(403).json(wrapRespose.error(403, 'Data absent :('));
        }
        const user = await Users.findOne({ username }).select('+password');
        if (!user) {
            return res.status(404).json(wrapRespose.error(404, 'No such user :('));
        }
        const userId = user._id;
        console.log(user.password)
        const passwordMatched = await bcrypt.compare(password, user.password);      //  --> to check if the entered password matches with the encrypted/hashed one
        if (user && password) {
            if (!passwordMatched) {
                return res.status(403).json(wrapRespose.error(403, `Wrong Password ${username} :( `));
            }
        }
        const accessToken = generateAccessToken({ username, password, userId });
        const refreshToken = generateRefreshToken({ username, password, userId });
        res.cookie('jwt', refreshToken, {
            httpOnly: true,               // can be only accessed by backend
            secure: true
        });
        return res.status(200).json(wrapRespose.success(200, {accessToken, refreshToken, user}));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
const logoutController = async (req, res) => {
    try {
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: true
        });
        console.log('hola')
        return res.send(200, 'Logout Successfully from backend c;ear the local storage');
    } catch (error) {
        return res.status(500).send(500, e.message);
    }
};
// this api checks the refresh token validity and generates a new access token after it expires
const refreshAccessTokenController = async (req, res) => {
    const cookies = req.cookies;    // will we taken from cookies
    if(!cookies.jwt){
        return res.status(401).json(wrapRespose.error(401, 'Refresh Token Not Sent'))
    }
    const refreshToken = cookies.jwt;

    try {
        const getRefreshTokenkey = process.env.REFRESH_TOKEN_KEY;
        const decoded = jwt.verify(refreshToken, getRefreshTokenkey);
        console.log({username: decoded.username, password: decoded.password})
        const username = decoded.username;
        const password = decoded.password;
        // be cautioned while sending data to token , always send data as {user,pass,...}
        const newAccessToken = generateAccessToken({ username, password });
        res.status(201).send(wrapRespose.success(201, newAccessToken));
        console.log(newAccessToken);
        return 0;
    } catch (error) {
        return res.status(401).json(wrapRespose.error(401, 'Invalid Refresh Key'));
    }
};

// internal function
const generateAccessToken = (data) => {
    const accessTokenKey = process.env.ACCESS_TOKEN_KEY;
    const token = jwt.sign(data, accessTokenKey, {
        expiresIn: '1d'
    });      // --> Generates a token
    return token;
}
const generateRefreshToken = (data) => {
    const refreshTokenKey = process.env.REFRESH_TOKEN_KEY;
    const token = jwt.sign(data, refreshTokenKey, {
        expiresIn: '1y'
    });      // --> Generates a token

    return token;
}

module.exports = {
    signupController,
    loginController,
    refreshAccessTokenController,
    logoutController,
}