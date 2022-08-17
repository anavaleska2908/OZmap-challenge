import "dotenv/config"
import Koa from 'koa';
import router from './routes/index.js';
import json from 'koa-json';
import koaBody from 'koa-body';
import { AppError } from "./errors/appError.js";

const app = new Koa();

app.use(koaBody())
   .use(json())
   .use(router.routes());

app.on("error", (error, ctx) => {
    if(!error instanceof AppError) {
        ctx.status = 500;
        ctx.body = "Internal Server Error";
    }
    ctx.status = error.statusCode;
    ctx.body = {error: error.message};
});

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false
});
  
export default app;