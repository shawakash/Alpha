const jwt = require("jsonwebtoken");
const User = require("../models/User");
const wrapResponse = require('../utils/wrapResponse');
module.exports = async (req, res, next) => {        
    if (
        !req.headers || 
        !req.headers.authorization || 
        !req.headers.authorization.startsWith('Bearer')
        ) {
            return res.status(401).send(wrapResponse.error(401,'Header not provided'));
    }
    // token : 'Bearer SecretToken'    --> only secret token is needed
    const accessToken = req.headers.authorization.split(' ')[1];
    console.log(req.headers.authorization)
    console.log( 'middle', accessToken);
    try {
        const getAccessTokenkey = process.env.ACCESS_TOKEN_KEY;
        const decoded = jwt.verify(accessToken, getAccessTokenkey);
        req._id = decoded.userId;
        const user = await User.findById(req._id);
        if(!user) {
            return res.status(404).send(wrapResponse.error(404, 'User Not Found'));
        }
        console.log(decoded);
        next();
    } catch (error) {
        console.log('error', wrapResponse.error(401,'Invalid Acces Token'))
        res.status(401).send(wrapResponse.error(401,'Invalid Acces Token'));
        return ;
    }
    
};

// pass the authorization token from Auth->Bearer token without writing Bearer inside insomia