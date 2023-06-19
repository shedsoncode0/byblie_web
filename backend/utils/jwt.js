const jwt = require("jsonwebtoken");
const User = require('../server/models/UserModel');

const signAccessToken = (userId) => {
    let token;

    const payload = {
        id: userId,
    };
    
    const options = {
        expiresIn: '1d',
        issuer: "devtask.io",
        audience: [userId],
    }

    const secret = process.env.ACCESS_TOKEN_SECRET;

    try {
        token = jwt.sign( payload, secret, options);
        return token
    } catch (error) {
        // return createError.InternalServerError();
        return error.message
    }
};

const signRefreshToken = (userId) => {
    const payload = {
        id: userId,
    };

    const options = {
        expiresIn: '1y',
        issuer: "devtask.io",
        audience: [userId],
    }

    const secret = process.env.REFRESH_TOKEN_SECRET;

    try {
        token = jwt.sign( payload, secret, options)
        return token
    } catch (error) {
        // return createError.InternalServerError();
        return error.message
    }
};

const verifyAccessToken = async (req, res, next) => {
    let token;

    if (req.headers['authorization']) {
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        token = bearerToken[1];
    
        try {
            // Verify the token
            const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
            // Get the user from the token
            req.user = await User.findById(decode.id).select('-password');
    
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized');
        }
    };

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    //     if (err) {
    //         return next(res.status(401));
    //     }
    //     req.payload = payload;
    //     next()
    // });
}

const verifyRefreshToken = (refreshToken) => {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
        if (err) {
            return next(res.status(401));
        }
        const userId = payload.aud;
        return userId
        next()
    });
}

module.exports = {
    signAccessToken,
    signRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
};