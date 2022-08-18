import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError.js";

const ensureAuth = (request, response, next) => { 
    console.log("request ", request);
    const { authorization } = request.headers;
    console.log("authorization ", authorization);
    if (!!!authorization || authorization === undefined) {
        throw new AppError(401, "JWT is missing!");
    }
    try {
        const token = authorization.split(" ")[1];
        //console.log("token ", token);
        const secret = process.env.SECRET_KEY || "default";
        const decoded = jwt.verify(token, secret);
        //console.log("decoded ", decoded);
        const { sub } = decoded;
        request.user = {
            _id: sub,
        };
        //console.log("request.user ", request.user);
        return next();
        
    } catch (error) {
        console.log("error ", error);
        
        throw new AppError(401, "Invalid Token");
    }
    
};

export default ensureAuth;