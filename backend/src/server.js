import app from "./index.js";
const port = process.env.PORT || 3333;

const server = app
  .listen(port, async () => {        
    console.log(`Server is running on port: ${port}`);
  })
  .on('error', error => {
    console.error(error)
  });
  
export default server;