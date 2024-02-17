// controllers/Mentor.js
import Mentor from "../models/Mentor.js";
import multer from "multer";
import path from "path";
import User from "../models/User.js";
// Multer setup to save profile picture to the 'public/assets' folder
const profilePictureStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    // Extracting file extension
    const ext = path.extname(file.originalname);
    // Generating a unique filename based on current time and original extension
    const uniqueFilename = Date.now() + ext;
    // Storing the filename in the request object for later access
    req.profilePictureFilename = uniqueFilename;
    cb(null, uniqueFilename);
  },
});
const uploadProfilePicture = multer({ storage: profilePictureStorage }).single(
  "profilepicture"
);

// Create a new mentor
export const createMentor = async (req, res) => {
  try {
    uploadProfilePicture(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.log("multer error: " + err.message);
        return res.status(500).json({ message: err.message });
      } else if (err) {
        console.log("multer error: " + err.message);
        return res.status(500).json({ message: err.message });
      }

      const {
        name,
        user_id,
        description,
        keywords,
        education,
        experience,
        interests,
      } = req.body;

      const profilepicture = req.profilePictureFilename; // Using the generated filename

      // Check if the user_id exists in the User collection

      const newMentor = new Mentor({
        name,
        user_id,
        description,
        keywords,
        education,
        experience,
        interests,
        profilepicture,
      });

      const savedMentor = await newMentor.save();
      res.status(201).json(savedMentor);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
