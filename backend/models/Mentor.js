import mongoose from "mongoose";
import User from "../models/User.js";
const Mentor = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    enrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    description: {
      type: String,
      required: true,
    },
    keywords: [{ type: String, required: true }],
    education: [
      {
        type: String,
      },
    ],
    experience: {
      type: String,
      required: true,
    },
    interests: {
      type: String,
      required: true,
    },

    profilepicture: {
      type: String,
      required: true,
    },
    coverpicture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const mentor = mongoose.model("Mentor", Mentor);
export default mentor;
