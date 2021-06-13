import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: String,
    name: String,
    dob: String, // date of birth
    createdAt: {
        type: Date,
        default: new Date()
    }

});

const User = mongoose.model('User', userSchema)
export default User;