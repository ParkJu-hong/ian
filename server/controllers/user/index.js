const {
    generateAccessToken,
    generateRefreshToken,
    sendRefreshToken,
    sendAccessToken,
    resendAccessToken,
    isAuthorized,
    checkRefeshToken
} = require('../tokenFunction');

// login
module.exports = {
    login: (req, res) => {
        console.log('req.body.token : ', req.body.token);
        if (req.body.token !== undefined) {
            const data = 'ThisIsDummyData'
            const accessToken = generateAccessToken(data);
            const refreshToken = generateRefreshToken(data);
            // const refreshToken = generateRefreshToken(data);
            console.log('accessToken : ', accessToken);

            sendRefreshToken(res, refreshToken);
            sendAccessToken(res, accessToken);
            // sendRefreshToken(res, refreshToken);
        }
    },
    isAuthorization: (req, res) => {
        const accessTokenData = isAuthorized(req);
        if (!accessTokenData) {
            // return res.status(401).send("no token in req.headers['authorization']");
            return res.json({ data: null, message: 'invalid access token' });
        }
        res.json({ message: 'This is Authorization OK' });
    }
}

