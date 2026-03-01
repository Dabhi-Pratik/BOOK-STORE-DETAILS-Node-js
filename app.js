import express from "express"
import connectDB from "./db/db.js"
import HttpError from "./middleware/HttpError.js"
import route from "./route/bookRouter.js"

const app = express()
const port = 5000

// Parse JSON body from requests
app.use(express.json())

// Test route
app.get("/", (req, res) => {
  res.status(200).json("Hello from Book Store Server")
})

// Main API routes
app.use("/book", route)

// Handle unknown routes
app.use((req, res, next) => {
  next(new HttpError("Request route not found...!", 404))
})

// Central error handler
app.use((error, req, res, next) => {
  if (res.headersSent) return next(error)

  res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error"
  })
})

// Start server after DB connection
async function startServer() {
  try {
    await connectDB()

    app.listen(port, () => {
      console.log(`Server Running on port ${port}`)
    })

  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

startServer()