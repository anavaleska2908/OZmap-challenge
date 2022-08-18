import "dotenv/config"
import Koa from 'koa';
import router from './routes/index.js';
import json from 'koa-json';
import koaBody from 'koa-body';
import { AppError } from "./errors/appError.js";
import cors from '@koa/cors';

const app = new Koa();

app.use(koaBody())
   .use(json())
   .use(cors())
   .use(router.routes());

app.on("error", (error, ctx) => {
    if(!error instanceof AppError) {
        ctx.status = 500;
        ctx.body = "Internal Server Error";
    }
    ctx.status = error.statusCode;
    ctx.body = {error: error.message};
});
  
export default app;