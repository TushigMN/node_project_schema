import mongoose from "mongoose";
import { PostSchema } from "../schemas/PostSchema.js";

export const Post = mongoose.model("Post", PostSchema);
