import Mentor from "../models/Mentor.js";
import User from "../models/User.js";
import multer from "multer";
import path from "path";

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets"); // Images will be stored in public/assets folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending timestamp to ensure unique filenames
  },
});

const upload = multer({ storage: storage });

// Create a new mentor
const createMentor = async (req, res) => {
  try {
    // Destructure data from request body
    const {
      name,
      userId,
      description,
      keywords,
      education,
      experience,
      interests,
      socialLinks,
    } = req.body;

    // Extract filenames from uploaded files
    console.log(req.files);
    const profilePicture = req.files["profilePicture"][0].filename;
    const coverPicture = req.files["coverPicture"][0].filename;

    const enrolled = []; // Assuming no enrolled users initially

    // // Validate user ID
    // const user = await User.findById({ _id: userId });
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    // Create new mentor instance
    const newMentor = new Mentor({
      name,
      user_id: userId,
      enrolled,
      description,
      keywords: JSON.parse(keywords), // Parse keywords as JSON array
      education: JSON.parse(education), // Parse education as JSON array
      experience,
      interests: JSON.parse(interests), // Parse interests as JSON array
      profilepicture: profilePicture,
      coverpicture: coverPicture,
      sociallinks: JSON.parse(socialLinks), // Parse socialLinks as JSON array
    });

    // Save mentor to database
    const savedMentor = await newMentor.save();

    // Return success response
    res.status(201).json(savedMentor);
  } catch (error) {
    // Return error response
    res.status(500).json({ message: "Internal server error", error: error });
    console.log(error);
  }
};

// Retrieve all mentors
const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve a single mentor by ID
const getMentorById = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a mentor by ID
const updateMentorById = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    // Update mentor fields
    mentor.name = req.body.name || mentor.name;
    mentor.description = req.body.description || mentor.description;
    mentor.keywords = req.body.keywords || mentor.keywords;
    mentor.education = req.body.education || mentor.education;
    mentor.experience = req.body.experience || mentor.experience;
    mentor.interests = req.body.interests || mentor.interests;
    if (req.file) {
      mentor.profilepicture = req.file.filename; // If new profile picture is uploaded, update it
    }
    const updatedMentor = await mentor.save();
    res.status(200).json(updatedMentor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a mentor by ID
const deleteMentorById = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    await mentor.remove();
    res.status(200).json({ message: "Mentor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const enrollMentor = async (mentorId, userIds) => {
  try {
    // Find the mentor by ID
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      throw new Error("Mentor not found");
    }

    // Validate user IDs
    // You can add more validation if needed, e.g., check if the user exists
    if (!userIds || !Array.isArray(userIds)) {
      throw new Error("Invalid user IDs");
    }

    // Append user IDs to the enrolled array
    mentor.enrolled.push(...userIds);

    // Save the updated mentor
    const updatedMentor = await mentor.save();

    return updatedMentor;
  } catch (error) {
    throw error; // Propagate the error to the caller
  }
};

const getUsersMentor = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    // Find mentors where the user is enrolled
    const mentors = await Mentor.find({ enrolled: userId });

    return mentors;
  } catch (error) {
    throw error;
  }
};
const checkIsMentor = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    // Find mentors where the user ID matches the user_id field
    const mentors = await Mentor.find({ user_id: userId });

    if (mentors.length === 0) {
      const error = new Error("Mentor not found");
      error.status = 404;
      throw error;
    }

    return mentors;
  } catch (error) {
    throw error;
  }
};

export {
  createMentor,
  getMentors,
  getMentorById,
  updateMentorById,
  deleteMentorById,
  enrollMentor,
  getUsersMentor,
  checkIsMentor,
  upload,
};
