const corsOptions = require('../config/corsOption');

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    corsOptions.origin(origin, (err, allow) => {
        if (err) {
            // If there's an error (origin not allowed), respond with a CORS error
            res.status(403).json({ error: 'Origin not allowed' });
        } else {
            // If origin is allowed, set the Access-Control-Allow-Origin header
            // res.header('Access-Control-Allow-Origin', origin);
            // Also set Access-Control-Allow-Credentials to true
            res.header('Access-Control-Allow-Credentials', true);
            next();
        }
    });
}


module.exports = credentials;
