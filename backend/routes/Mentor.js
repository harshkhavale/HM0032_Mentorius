import express from "express";
import { createMentor } from "../controllers/Mentor.js";

const router = express.Router();

// Route to save mentor data
router.post("/", createMentor);

export default router;
