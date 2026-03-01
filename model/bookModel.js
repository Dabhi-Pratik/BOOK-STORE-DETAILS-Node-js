import mongoose from "mongoose"

// Book schema (structure of data)
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique: true,
    },
    author:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    publisher:String,
    quantity:Number,
})

const Book = mongoose.model("Book",bookSchema)

export default Book;