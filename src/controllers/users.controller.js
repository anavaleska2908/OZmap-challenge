import UserService from "../services/users.service";

export default class UserController {
    static async index() {
        const users = await UserService.index();
        return users;
    }
}