import mongoose from "mongoose";
import { connect } from "node:http2";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Atlas Connected Successfully........!")
    } catch (error) {
        console.log("MongoDB connection failed:",error)
        process.exit(1)
    }
}

export default connectDB;