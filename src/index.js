import "dotenv/config"
import Koa from 'koa';
import router from './routes/index.js';
import json from 'koa-json';
import koaBody from 'koa-body';
import { AppError, handleError } from "./errors/appError.js";

const app = new Koa();

app.use(koaBody())
   .use(json())
   .use(router.routes());
   
//app.use(async (error) => {
//    console.log("error instanceof", error);
//    if (error instanceof AppError) {
//        return error.response.body = {
//            status: error.response.statusCode,
//            message: error.response.message,
            
//        }
//        //return error.status(error.statusCode).json({
//        //    status: "error",
//        //    message: error.message,
//        //});
//    }
//    return error.response.body = {
//        status: 500,
//        message: "Internal Server Error",
//    }
//    //return error.status(500).json({
//    //    status: "error",
//    //    message: "Internal Server Error",
//    //})
//})

app.on("error", (error, ctx) => {
    if(!error instanceof AppError) {
        ctx.status = 500;
        ctx.body = "Internal Server Error";
    }
    ctx.status = error.statusCode;
    ctx.body = {error: error.message};
})

//const port = process.env.PORT || 3000;

//const server = app
//  .listen(port, async () => {        
//      console.log(`Server is running on port: ${port}`);
//  })
//  .on('error', error => {
//      console.error(error)
//  });
  
export default app;