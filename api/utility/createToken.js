
import jwt from 'jsonwebtoken';

// create token
export const createToken = (data) => {

    return jwt.sign(data, process.env.TOKEN_SECRET)

}