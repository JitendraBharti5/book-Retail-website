import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,

});
const Cat = mongoose.model("Cat", categorySchema);

export default Cat;
