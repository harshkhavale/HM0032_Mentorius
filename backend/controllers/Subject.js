// controllers/Subject.js
import Subject from "../models/Subject.js";
import multer from "multer";
import path from "path";

// Multer setup to save thumbnail to the 'thumbnails' folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/thumbnails/");
  },
  filename: function (req, file, cb) {
    // Extracting file extension
    const ext = path.extname(file.originalname);
    // Generating a unique filename based on current time and original extension
    const uniqueFilename = Date.now() + ext;
    // Storing the filename in the request object for later access
    req.generatedFilename = uniqueFilename;
    cb(null, uniqueFilename);
  },
});
const upload = multer({ storage: storage }).single("thumbnail");

// Create a new subject
export const createSubject = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.log("multer error: " + err.message);
        return res.status(500).json({ message: err.message });
      } else if (err) {
        console.log("multer error: " + err.message);
        return res.status(500).json({ message: err.message });
      }

      const { name, teacher_id, description, uuid } = req.body;
      const thumbnail = req.generatedFilename; // Using the generated filename
      const newSubject = new Subject({
        name,
        teacher_id,
        description,
        uuid,
        thumbnail,
      });
      const savedSubject = await newSubject.save();
      res.status(201).json(savedSubject);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all subjects
export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate("resources enrolled");
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific subject by ID
export const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id).populate(
      "resources enrolled"
    );
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a subject by ID
export const updateSubject = async (req, res) => {
  try {
    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.json(updatedSubject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a subject by ID
export const deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    // Remove the associated thumbnail from the server
    fs.unlinkSync(subject.thumbnail);
    res.json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getSubjectsByTeacherId = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    const subjects = await Subject.find({ teacher_id });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get subjects by user enrollment
export const getSubjectsByUserEnrollment = async (req, res) => {
  try {
    const { user_id } = req.params;
    const subjects = await Subject.find({ enrolled: user_id });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
