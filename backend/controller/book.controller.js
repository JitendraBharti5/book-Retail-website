import Book from "../model/book.model.js";
export const getBook = async(req, res) => {
    try {

      
        const book = await Book.find();
        res.status(200).json(book);


    } catch (error) {



        console.log("Error: ", error);
        res.status(500).json(error);
    }
    
};
export const newbook = async(req, res,next) => {
    try {
        const { name,price,description,category,image} = req.body;
        const newbook = new Book({
            name:name,
            price:price,
            description:description,
            category:category,
            image:image,
        })
  await newbook.save()
  res.status(201).json({
    message: "Book Posted successfully",
});
} catch (error) {
console.log("Error: " + error.message);
res.status(500).json({ message: "Internal server error" });
}
    
};
