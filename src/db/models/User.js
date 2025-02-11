import mongoose from "mongoose";
import { UserSchema } from "../schemas/UserSchema.js";

export const User = mongoose.model("User", UserSchema);
