# 📚 Book Store API (Node.js + Express + MongoDB)

A simple REST API for managing books using Node.js, Express, and MongoDB.

This project supports full CRUD operations:

✔ Add Book  
✔ Get All Books  
✔ Get Book by ID  
✔ Update Book  
✔ Delete Book  

---

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (API Testing)

---

## 📁 Project Structure
Book-Store/
│
├── controller/
│ └── bookController.js
├── model/
│ └── bookModel.js
├── route/
│ └── bookRouter.js
├── middleware/
│ └── HttpError.js
├── db/
│ └── db.js
├── app.js
└── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository


git clone https://github.com/your-username/book-store-api.git
cd book-store-api

2️⃣ Install Dependencies

npm install

3️⃣ Start MongoDB

Make sure MongoDB is running locally:


4️⃣ Run Server
npm run dev

Server will run at:

http://localhost:5000

📡 API Endpoints
➕ Add Book

POST /book/add

Request Body (JSON)

{
  "title": "JavaScript Basics",
  "author": "Pratik",
  "price": 450
}

📖 Get All Books

GET /book/all

🔍 Get Book by ID

GET /book/:id

✏️ Update Book

PUT /book/update/:id

Request Body
{
  "price": 750
}
🗑️ Delete Book

DELETE /book/:id

🧪 Testing with Postman

All APIs were tested using Postman.

📸 Postman Screenshots

🏠 Home
<img width="1920" height="1032" alt="Home" src="https://github.com/user-attachments/assets/6478b248-9e08-49b1-9a5d-9b24a863f31d" />


➕ Add Book
<img width="1920" height="1032" alt="Add" src="https://github.com/user-attachments/assets/7fbe166b-f6f0-44f4-b92b-4362de5a0b54" />

📖 Get All Books
<img width="1920" height="1032" alt="All-book" src="https://github.com/user-attachments/assets/919a3338-87cd-4006-bb35-3d00b9d7a9ab" />


🔍 Get Book by ID
<img width="1920" height="1032" alt="Find by id" src="https://github.com/user-attachments/assets/2b0056dd-0519-422b-b913-c46ab9186348" />


✏️ Update Book
<img width="1920" height="1032" alt="Update" src="https://github.com/user-attachments/assets/25cdafb1-99f7-46f2-93e4-1804dad81193" />


🗑️ Delete Book
<img width="1920" height="1032" alt="delete" src="https://github.com/user-attachments/assets/b4445e59-ca16-495a-a1b6-6cd57cdcfea8" />


MongoDB Database: bookstore
Collection: books

🎯 Features

✔ Simple MVC architecture
✔ Clean error handling
✔ RESTful API design
✔ Easy to extend
✔ Beginner-friendly project


