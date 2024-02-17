import mongoose from "mongoose";

import Resource from "./Resource.js";
import User from "./User.js";
const Subject = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    resources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource",
      },
    ],
    enrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const subject = mongoose.model("Subject", Subject);
export default subject;
