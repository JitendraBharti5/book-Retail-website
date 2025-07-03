import express from "express";
import { getBooks, createBook } from "../controller/book.controller.js";
import Book from "../model/book.model.js";
import { getBooksByUser } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBooks);

router.post("/newbook", createBook);

router.get("/category/:category", async (req, res) => {
  try {
    const books = await Book.find({ category: req.params.category });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/search/:name", async (req, res) => {
  try {
    const searchTerm = req.params.name.toLowerCase();
    const books = await Book.find();

    const matchedBooks = books.filter((book) => {
      const bookName = book.name.toLowerCase();
      const matchCount = searchTerm.split("").filter(char => bookName.includes(char)).length;
      const matchPercentage = (matchCount / bookName.length) * 100;

      return bookName.includes(searchTerm) || matchPercentage >= 70;
    });

    res.json(matchedBooks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/user/:userId", getBooksByUser);
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
