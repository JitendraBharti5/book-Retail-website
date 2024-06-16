import express from "express";
import { newbook } from "../controller/book.controller.js";

const router = express.Router();

router.post("/book", newbook);

export default router;