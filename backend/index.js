import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import  logger  from "morgan";
import path from "path"
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cateRoute from "./route/cate.route.js";
import detailRoute from "./route/detail.route.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/cate", cateRoute);
app.use("/detail",detailRoute);

app.use(logger("tiny"))

if(process.env.NODE_ENV === "production"){
const dirPath = path.resolve();
app.use(express.static(path.join(dirPath, "frontend", "dist")));
app.get("*",(req,res) => {
        res.sendFile(path.join(dirPath, "frontend", "dist", "index.html"));
});
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
