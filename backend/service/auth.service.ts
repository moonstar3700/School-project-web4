import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;
const generateJwtToken = (username: string): string => {
    return jwt.sign({ username }, secret, { expiresIn: expiration });
};

export default { generateJwtToken };
