import { createPost, findById, findAll } from "../models/Post.model.js";

const getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await findAll();
    res.status(200).json({
      count: posts.length,
      posts: posts,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createNewPost = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    const post = await createPost(title, body);

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const [posts, _] = await findById(req.params.id);
    res.status(200).json({
      posts,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getAllPosts, createNewPost, getPostById };
