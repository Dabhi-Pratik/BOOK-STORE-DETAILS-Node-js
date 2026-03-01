import express from "express"
import {addBook,getBook,allBook,deleteBook, updateBook} from "../controller/bookController.js"

const router = express.Router()

// Add new book
router.post("/add", addBook)

// Get all books
router.get("/all", getBook)

// Get single book by ID
router.get("/:id", allBook)

// Update book by ID
router.put("/update/:id", updateBook)

// Delete book by ID
router.delete("/:id", deleteBook)

export default router