import Cat from "../model/category.model.js";

export const getCat = async(req, res) => {
    try {
        const cate = await Cat.find();
        res.status(200).json(cate);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};