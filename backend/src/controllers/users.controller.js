import UserService from "../services/users.service.js";

export default class UserController {
    static async store(data) {
        const { name, email, password, age } = data;
        const user = await UserService.store({name, email, password, age});
        return user;
    }
    
    static async index() {
        const users = await UserService.index();
        return users;
    }
    
    static async show(id) {
        const user = await UserService.show({id});
        return user;
    }
    
    static async update(data, id) {
        const { name, email, password, age } = data;
        const user = await UserService.update({name, email, password, age}, {id});
        return user;
    }
    
    static async delete(id) {
        const user = await UserService.delete({id});
        return user;
    }
}