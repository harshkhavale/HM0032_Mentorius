// routes/subjects.js
import express from "express";
import {
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
  getSubjectsByTeacherId,
  getSubjectsByUserEnrollment,
} from "../controllers/Subject.js";

const router = express.Router();

// Create a new subject
router.post("/", createSubject);

// Get all subjects
router.get("/", getAllSubjects);

// Get a specific subject by ID
router.get("/:id", getSubjectById);

// Get subjects by teacher ID
router.get("/teacher/:teacher_id", getSubjectsByTeacherId);

// Get subjects by user enrollment
router.get("/user/:user_id", getSubjectsByUserEnrollment);

// Update a subject by ID
router.put("/:id", updateSubject);

// Delete a subject by ID
router.delete("/:id", deleteSubject);

export default router;
