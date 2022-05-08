import Post from "../models/Post.js";

const getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({
      count: posts.length,
      posts,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createNewPost = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    let post = new Post(title, body);

    post = await post.sve();

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findById(req.params.id);
    res.status(200).json({
      posts,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getAllPosts, createNewPost, getPostById };
