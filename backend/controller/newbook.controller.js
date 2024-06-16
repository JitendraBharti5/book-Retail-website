import Newbook from "../model/newbook.model.js";

export const newbook = async(req, res) => {
    try {
        const { name} = req.body;
        const book = await Newbook.findOne({ name });
        if (book) {
            return res.status(400).json({ message: "book name already exists" });
        }
        
        const createdUser = new User({
            name: name,
            price: price,
            description: description,
             category:category,
             image:image,
        });
        await createdbook.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdbook._id,
                name: createdbook.name,
                price: createdbook.price,
                description: createdbook.description,
                category: createdbook.category,
                image: createdbook.image,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
