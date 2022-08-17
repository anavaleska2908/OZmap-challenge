import { verify } from "jsonwebtoken";
import { AppError } from "../errors/appError";

const ensureAuth = (request, response, next) => { 
    const { authorization } = request.headers;
    if (!authorization) {
        throw new AppError(401, "JWT is missing!");
    }
    try {
        const token = authorization.split(" ")[1];
        const secret = process.env.SECRET_KEY || "default";
        const decoded = verify(token, secret);
        const { sub } = decoded;
        request.user = {
            _id: sub,
        };
        return next();
        
    } catch (error) {
        throw new AppError(401, "Invalid Token");
    }
};

export default ensureAuth;