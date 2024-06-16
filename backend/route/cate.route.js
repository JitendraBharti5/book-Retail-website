import express from "express";
import { getCat } from "../controller/category.controller.js";

const router = express.Router();

router.get("/", getCat);

export default router;