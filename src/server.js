import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const mongodb = process.env.MONGODB;

mongoose
    .connect(mongodb)
    .then(() => {
        console.log("MongoDB has been initialized!");
    }).catch((error) => {
        console.error("Error during MongoDB initialization!", error);
    });
    
export default mongoose;