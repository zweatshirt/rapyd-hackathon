import bcrypt from 'brcyptjs';
import token from 'jsonwebtoken'
import User from '../models/User.js';
import dotenv from 'dotenv'
// grabs User schema
import User from '../models/User.js'

dotenv.config();

// get User entered information from front end for sign in auth
export const signin = async (req, res) => {
    const { email, password } = req.body; // get all form fields

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({message: 'User DNE'});
        else {
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordCorrect) return res.status(400).json({ message: 'Incorrect password.' })
            else { 
                const token = jwt.sign(
                    { email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: "2h"}
                );
                res.status(200).json({ result: existingUser, token});
                }
        }
    } catch(error) {
        res.status(500).json({ message: 'Error handling User sign in authentication.' });
    }

}


// sign up auth
export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    try {
        const existingUser = await User.findOne({ email }) // We want to check if the User already has an account
        if (existingUser) return res.status(400).json({ message: 'User already exists'});
        else if (password != confirmPassword) return res.status(400).json({ message: "Passwords don't match"});
        else {
            const hashedPass = await bcrypt.hash(password, 12);
            const resultingUser = await User.create({ name: `${firstName} ${lastName}`, email, password: hashedPass });
            const token = jwt.sign(
                { email: resultingUser.email, id: resultingUser.id }, process.env.JWT_SECRET, {expiresIn: "2h"}
            );
            res.status(200).json({ result: resultingUser, token});
        }
    

    }
    catch (error) {
        res.status(500).json({ message: 'Error handling user sign up authentication.' });
    }
}