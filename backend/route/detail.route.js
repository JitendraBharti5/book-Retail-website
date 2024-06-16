import express from "express";
import { getSBook } from "../controller/detail.controller.js";

const router = express.Router();

router.get("/:id", getSBook);

export default router;
