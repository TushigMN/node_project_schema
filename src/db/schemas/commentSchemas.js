import mongoose from "mongoose";
const { Schema } = mongoose;

export const commentSchema = new Schema(
  {
    name: String,
  },
  { collection: "comment" }
);
