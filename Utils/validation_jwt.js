const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SIGN, {expiresIn: '1h'})
};

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        const user = jwt.verify(token, process.env.JWT_SIGN)
        req.user = user;
        next();
    } 
}



module.exports = {
    generateToken,
    validateToken
}