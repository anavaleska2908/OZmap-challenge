import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const mongodb = process.env.NODE_ENV === "test" ? process.env.MONGODB_TEST : process.env.MONGODB;

mongoose
    .connect(mongodb)
    .then(() => {
        console.log("MongoDB has been initialized!");
    }).catch((error) => {
        console.error("Error during MongoDB initialization!", error);
    });
    
export default mongoose;