import User from "../models/user.model";
export default class UserService {
    static async index () {
        const users = await User.find();
        return users;
    }
}