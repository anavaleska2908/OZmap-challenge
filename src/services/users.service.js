import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { AppError } from "../errors/appError.js";
export default class UserService {
    static async store ({name, email, password, age}) {
        if(age < 18) {
            throw new AppError( 400, "Underage user" );
        }
        
        const checkUserExists = await User.findOne({email: email});
        
        if(!!checkUserExists) {
            throw new AppError(401, "Email already exists.");
        }
        //try {
            //usuario menor de idade
            //if(age >= 18) {
                const user = await User.create( {
                    name,
                    email,
                    password: bcryptjs.hashSync( password, 8 ), 
                    age
                } );
                return user;
            //} else {
            //    throw new AppError( 400, "Underage user" );
                
            //}
            
        //} catch (error) {
        //    throw new AppError(error);
        //}
    }
    
    static async index () {
        const users = await User.find();
        return users;
    }
    
    static async update ({name, email, password, age}, {id}) {
        try {
            const user = await User.findById({ _id: id });
            
            name ? (user.name = name) : user.name
            email ? (user.email = email) : user.email
            password ? (user.password = password) : user.password
            age ? (user.age = age) : user.age
            
            user.password = bcryptjs.hashSync(password, 8);
            
            await user.save();
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    static async delete ({ id }) {
        try {
            const user = User.findByIdAndDelete({ _id: id });
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}