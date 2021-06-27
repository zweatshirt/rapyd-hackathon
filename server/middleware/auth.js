import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Used to confirm or deny user actions (such as posting)
const auth = async (req, res, next) => {
    let decodedData;
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        if (token && isCustomAuth) { // if the user was created manually as opposed to Google or FB sign up
            decodedData = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = decodedData?.id;
        }
        else { // when working with Google sign in 
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub; // sub is essentially Google's version of a user ID
        }

        next();
    }

    catch (error) {
        console.log(error);
    }
}

export default auth;