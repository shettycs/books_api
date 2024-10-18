const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Books array
let books = [];

// POST: Add a new book to the books array
app.post('/books', (req, res) => {
  const newBook = req.body; // Expecting { id: number, bookname: string, author: string }

  // Check if the book already exists by ID
  const bookExists = books.some(book => book.id === newBook.id);

  if (bookExists) {
    return res.status(400).send({ message: 'Book with this ID already exists' });
  }

  // Add the new book to the array
  books.push(newBook);

  res.status(201).send({ message: 'Book added successfully', book: newBook });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
