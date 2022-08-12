import UserService from "../services/users.service";

export default class UserController {
    static async store(data) {
        const { name, email, password, age } = data;
        try {
            const user = await UserService.store({name, email, password, age});
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    static async index() {
        const users = await UserService.index();
        return users;
    }
}