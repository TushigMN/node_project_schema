import mongoose, { get } from "mongoose";
import { commentSchema } from "./commentSchemas.js";
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    comment: String,
    like: Array,
  },
  { _id: false }
);

export const UserSchema = new Schema(
  {
    profilePic: {
      type: String,
      required: false,
      url: "https://i.sstatic.net/34AD2.jpg",
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },

    followers: {
      type: [String],
      required: false,
    },

    following: {
      type: [String],
      required: false,
    },
  },
  {
    collection: "Users",
    timestamps: true,
    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
  }
);
