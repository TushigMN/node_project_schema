import mongoose from "mongoose";
import { commentSchema } from "../schemas/commentSchema.js";

export const comment = mongoose.model("comment", commentSchema);
