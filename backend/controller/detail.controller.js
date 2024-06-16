import Book from "../model/book.model.js";

export const getSBook = async (req, res,next) => {

  try {

     
      const sbook = await Book.findOne({_id:req.params.id});
    res.json(sbook);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
