import jwt from "jsonwebtoken";

const createJWT = (payload) => {
    const userToken = jwt.sign(
        payload,
        process.env.JWT_SECRET, {
            expiresIn: Math.floor(Date.now() / 1000) + (60 * parseInt(process.env.JWT_EXPIRATION))
        }, { algorithm: process.env.JWT_ALGO }
    );
    return userToken;
}

export { createJWT };