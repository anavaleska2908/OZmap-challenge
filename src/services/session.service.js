import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import User from "../models/user.model";
import { AppError } from "../errors/appError";

class AuthService { 
    static async store({email, password}) {
        const user = await User.findOne({email: email});
        if (!user) {
            throw new AppError(400, "Incorrect email / password combination!");
        }
        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch) {
            throw new AppError(400, "Incorrect email / password combination!");
        }
        const token = sign({}, process.env.SECRET_KEY || "default", {
            subject: user._id,
            expiresIn: "1d",
        });
        return {
            user,
            token,
        };
    }
}

export default AuthService;