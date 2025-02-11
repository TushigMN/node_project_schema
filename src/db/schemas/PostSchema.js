import mongoose, { get } from "mongoose";
import { PostSchema } from "../schemas/PostSchema.js";
import { comment } from "../models/comment.js";
const { Schema } = mongoose;

export const PostSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      Id: [],
    },

    caption: {
      type: String,
      required: false,
    },

    imageUrl: {
      type: String,
      required: true,
      url: "https://i.sstatic.net/34AD2.jpg",
    },

    user: {
      type: String,
      required: true,
    },

    likes: {
      type: [String],
      required: false,
    },

    comments: {
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
