import "dotenv/config"
import Koa from 'koa';
import router from './routes/index.js';
import json from 'koa-json';
import koaBody from 'koa-body';

const app = new Koa();

app.use(koaBody());
app
.use(json())
.use(router.routes())

const port = process.env.PORT || 3000;

const server = app
  .listen(port, async () => {        
      console.log(`Server is running on port: ${port}`);
  })
  .on('error', error => {
      console.error(error)
  });
  
export default server;