import express from "express";
import {
  createMentor,
  getMentors,
  getMentorById,
  updateMentorById,
  deleteMentorById,
  enrollMentor,
  getUsersMentor,
  upload,
  checkIsMentor,
} from "../controllers/Mentor.js";

const router = express.Router();

// Route for creating a new mentor
router.post(
  "/",
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "coverPicture", maxCount: 1 },
  ]),
  createMentor
);

// Route for retrieving all mentors
router.get("/", getMentors);

// Route for retrieving a single mentor by ID
router.get("/:id", getMentorById);

// Route for updating a mentor by ID
router.put("/:id", upload.single("profilePicture"), updateMentorById);

// Route for deleting a mentor by ID
router.delete("/:id", deleteMentorById);

// Route for enrolling users to a mentor
router.post("/:mentorId/enroll", async (req, res) => {
  const { mentorId } = req.params;
  const { userIds } = req.body;

  try {
    // Call the enrollMentor function
    const updatedMentor = await enrollMentor(mentorId, userIds);

    res.status(200).json(updatedMentor);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
});
router.get("/users/:userId/mentors", async (req, res) => {
  const { userId } = req.params;

  try {
    // Call the getUsersMentor function
    const mentors = await getUsersMentor(userId);

    res.status(200).json(mentors);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
});
router.get("/check/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const mentors = await checkIsMentor(userId);
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
