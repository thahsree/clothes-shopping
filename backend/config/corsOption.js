// Define the whitelist of allowed origins
const whitelist = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5500',
    'http://localhost:3500'
];

// CORS options configuration object
const corsOptions = {
    origin: (origin, callback) => {
        // Check if the origin is in the whitelist or if it's absent (e.g., for same-origin requests)
        if (whitelist.includes(origin) || !origin) {
            // If the origin is in the whitelist or if it's absent, allow the request
            callback(null, true);
        } else {
            // Otherwise, deny the request with a CORS error
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200 // Set the status code for successful preflight requests
};

// Export the CORS options
module.exports = corsOptions;