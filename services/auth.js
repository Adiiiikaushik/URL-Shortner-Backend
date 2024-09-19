const jwt = require("jsonwebtoken");
const secret = "Aditya@321"; // Ideally, store this in environment variables

// Function to sign JWT with specific user information
function setUser(user) {
    // Include only necessary fields (like id and email)
    return jwt.sign(
        { id: user._id, email: user.email }, 
        secret, 
        { expiresIn: '1h' } // Token will expire in 1 hour
    );
}

// Function to verify JWT and handle errors
function getUser(token) {
    if (!token) return null;
    try {
        // Verify the token and return the decoded payload
        return jwt.verify(token, secret);
    } catch (error) {
        // Handle error (e.g., token expired, malformed)
        console.error('JWT Error:', error.message);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};
