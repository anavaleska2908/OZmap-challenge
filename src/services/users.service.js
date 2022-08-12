import User from "../models/user.model";
import bcryptjs from "bcryptjs";
export default class UserService {
    static async store ({name, email, password, age}) {
        try {
            password = bcryptjs.hashSync( password, 8 );
            const user = await User.create({name, email, password, age});
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    static async index () {
        const users = await User.find();
        return users;
    }
}