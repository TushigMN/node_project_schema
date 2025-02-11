import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { User } from "./db/models/User.js";
import { Comment } from "./db/models/comment.js";

dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

mongoose.connect(url).then(() => {
  console.log("mongo connected");
});

const app = express();

app.post("/", async (req, res) => {
  try {
    await User.create({
      picturePic: "https://i.sstatic.net/34AD2.jpg",
      username: "",
      followers: [User],
      following: [User],
      createdAt: Date,
      updatedAt: Date,
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.post("/comment", async (req, res) => {
  try {
    await Comment.create({ name: "Notion" });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
