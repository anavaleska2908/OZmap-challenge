import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { AppError } from "../errors/appError.js";

class AuthService { 
    static async store({email, password}) {
        const user = await User.findOne({email: email});
        if (!user) {
            throw new AppError(400, "Incorrect email / password combination!");
        }
        const passwordMatch = await bcryptjs.compare(password, user.password);
        if(!passwordMatch) {
            throw new AppError(400, "Incorrect email / password combination!");
        }
        const token = jwt.sign({}, process.env.SECRET_KEY || "default", {
            subject: String(user._id),
            expiresIn: "1d",
        });
        return {
            user,
            token,
        };
    }
}

export default AuthService;