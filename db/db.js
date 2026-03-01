import mongoose from "mongoose";
import { connect } from "node:http2";

const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
        console.log("MongoDB connected....!")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;