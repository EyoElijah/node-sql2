import { Router } from "express";
const router = Router();
import {
  getAllPosts,
  createNewPost,
  getPostById,
} from "../controllers/post.controller.js";

router.route("/").get(getAllPosts).post(createNewPost);

router.route("/:id").get(getPostById);

export default router;
