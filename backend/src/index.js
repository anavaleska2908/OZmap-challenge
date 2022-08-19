import "dotenv/config"
import Koa from 'koa';
import router from './routes/index.js';
import json from 'koa-json';
import koaBody from 'koa-body';
import { AppError } from "./errors/appError.js";
import cors from '@koa/cors';
import jwt from 'koa-jwt';
import swagger from "swagger2";
import swagger2 from "swagger2-koa";

const swaggerDocument = swagger.loadDocumentSync("api.yaml");
const app = new Koa();

app.use(koaBody())
   .use(json())
   .use(cors())
   .use(swagger2.ui(swaggerDocument, "/swagger"))
//   .use(async (ctx, next) => {
//    return await next().catch((error) => {
//        if(401 === error.status) {
//            ctx.status = 401;
//            ctx.body = "JWT is missing!"
//        } else {
//            throw error;
//        }
//    })
//})
//   .use(jwt({secret: process.env.SECRET_KEY}).unless({path: [/\/register/, /\/login/, /\/users/]}))
   .use(router.routes())
   

app.on("error", (error, ctx) => {
    if(!error instanceof AppError) {
        ctx.status = 500;
        ctx.body = "Internal Server Error";
    }
    ctx.status = error.statusCode;
    ctx.body = {error: error.message};
});
  
export default app;