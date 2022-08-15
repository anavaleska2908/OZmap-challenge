import mongoose from "../database.js";

const UserSchema = mongoose.Schema( {
    type: "object",
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

const User = mongoose.model( 'User', UserSchema );

export default User;