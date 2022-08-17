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
        min: 18,
        max: 115,
    },
});

const User = mongoose.model( 'User', UserSchema );

export default User;