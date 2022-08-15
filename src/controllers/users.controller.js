import UserService from "../services/users.service.js";

export default class UserController {
    static async store(data) {
        const { name, email, password, age } = data;
        //try {
            const user = await UserService.store({name, email, password, age});
            return user;
        //} catch (error) {
        //    throw new Error(error);
        //}
    }
    static async index() {
        const users = await UserService.index();
        return users;
    }
    
    static async update(data, id) {
        const { name, email, password, age } = data;
        try {
            const user = await UserService.update({name, email, password, age}, {id});
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    static async delete(id) {
        try {
            const user = await UserService.delete({id});
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}