import HttpError from "../middleware/HttpError.js";
import Book from "../model/bookModel.js";

//Add Book
const addBook = async (req,res,next)=>{
    try {
        const book = new Book(req.body)
       await book.save()

       res.status(200).json({message:"Book Added successfully.....!"})
    } catch (error) {
        next(new HttpError(error.message,500))
    }
}

// GET ALL BOOKS
const getBook = async (req,res,next) => {
try {
    const books = await Book.find();
    res.status(200).json(books)
} catch (error) {
     next(new HttpError(error.message,500))
}
}

// GET BOOK BY ID

const allBook = async (req,res,next)=>{
    try {
        const book = await Book.findById(req.params.id)
        
        if(!book){
            return next(new HttpError("Book not Found",404))
        }

        res.status(200).json(book)
    } catch (error) {
       next(new HttpError(error.message,500)) 
    }
}

// DELETE BOOK

const deleteBook = async (req,res,next) => {

    try {
        const book = await Book.findByIdAndDelete(req.params.id)

        if(!book){
            return next(new HttpError("Book not Found..!",404))
        }

        res.status(200).json({message:"Book Deleted Successfully....!"})
    } catch (error) {
        next(new HttpError(error.message,500))
    }
}

// UPDATE BOOK 

const updateBook = async (req,res,next)=>{
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})

        if(!updateBook){
            return next(new HttpError("Failed to Update Book...!",404))
        }

        res.status(200).json({message:"Book Updated Successfully...!",updateBook})
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
}

export { addBook ,getBook,allBook,deleteBook,updateBook}