import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    usernama: String,
    email: String,
    password: String,
    confirmPassword: String,
    follow: {
        type: [String],
        default: []
    },

});

const userPost = mongoose.model('User', userSchema);

export default userPost;
