import Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const createBook = async (req, res) => {
  try {
    const { name, price, description, category, image, userId } = req.body;

    const bookExists = await Book.findOne({ name });
    if (bookExists) {
      return res.status(400).json({ message: "Book name already exists" });
    }

    const newBook = new Book({
      name,
      price,
      description,
      category,
      image,
      userId,
    });

    await newBook.save();
    res.status(201).json({
      message: "Book posted successfully",
      book: newBook,
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getBooksByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const books = await Book.find({ userId });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};