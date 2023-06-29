const Post = require('../models/post_model');
const User = require('../models/UserModel');

/**
 * @description Get all users posts
 * @route Get /api/post/all
 * @access Private
 */
const getAllUserPost = async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await Post.find({ user: id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ status: true, data: posts });
  } catch (error) {
    res.status(401).json({ status: false, error });
  }
};

/**
 * @description Get all users projects
 * @route Get /api/project/all
 * @access Private
 */
const getAllPost = async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: -1,
  });
  // .sort({
  //   createdAt: -1,
  // });
  try {
    res.status(200).json({ status: true, data: posts });
  } catch (error) {
    res.status(401).json({ status: false, error });
  }
};

/**
 * @description Create new project
 * @route POST /api/project/create
 * @access Private
 */
const createPost = async (req, res) => {
  // Geting input from the request body
  const { description, bgColor, text, username, name, profileImage } = req.body;

  if (!text || !username || !name || !profileImage) {
    res.status(401).json({
      status: false,
      error: 'All fields are required',
    });
    return;
  }

  try {
    const createdPost = await Post.create({
      user: req.user.id,
      description,
      text,
      bgColor,
      profileImage,
      username,
      name,
    });

    res.status(201).json({ createdPost });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

/**
 * @description Update project
 * @route PUT /api/project/:id
 * @access Private
 */
const updatePost = async (req, res) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  const user = await User.findById(req.user.id);

  // Check if Project name already exist
  if (!Post) {
    res.status(401).json('Post with id not found');
  }

  if (post.user.toString() !== user.id) {
    res.status(401).json('User not authorized');
  }

  const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedPost);
};

/**
 * @description Delete post
 * @route Delete /api/v1/post/delete/:id
 * @access Private
 */
const deletePost = async (req, res) => {
  const id = req.params.id;

  const post = await Post.findById(id);
  const user = await User.findById(req.user.id);

  // Check if Project exist
  if (!post) {
    res.status(401);
    res.status(401).json({
      status: false,
      error: 'post with id not found',
    });
    return;
  }

  if (post.user.toString() !== user.id) {
    res.status(401);
    res.status(401).json({
      status: false,
      error: 'user not authorized',
    });
    return;
  }

  const deletedPost = await Post.findByIdAndDelete(id);
  res.status(200).json({
    status: true,
    message: 'post has been deleted',
    data: deletedPost,
  });
};

const getSinglePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    res.status(400).json({
      status: false,
      error: 'post not found',
    });
    return;
  }

  res.status(200).json(post);
};
//
//
//
//
//
//
/**
 * @description like post
 * @route like /api/v1/post/like
 * @access Public
 */
const likePost = async (req, res) => {
  // Getting all the user details from the req body
  const { userImage, name, username, postId } = req.body;
  const user = await User.findById(req.user.id);

  // Checking for all the details
  if (!postId || !userImage || !name || !username) {
    res.status(500).json({
      status: false,
      error: 'Please pass all requied details',
    });
    return;
  }
  // Finding the post in the database
  const post = await Post.findById(postId);
  if (!post) {
    res.status(401).json({
      status: false,
      error: 'post does not exist',
    });
    return;
  }

  // Making the action to like the post
  try {
    await post.updateOne({
      $push: {
        likes: { userId: user.id, name, userImage, username },
      },
    });
    res.status(200).json({ status: true, message: 'post has been liked' });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
  // }
};
//
//
//
//
//
//
/**
 * @description lunike post
 * @route unlike /api/v1/post/unlike
 * @access Public
 */
const unlikePost = async (req, res) => {
  // Getting all the user details from the req body
  const { userId, postId } = req.body;

  // Checking for all the details
  if (!userId || !postId) {
    res.status(500).json({
      status: false,
      error: 'Please pass all requied details',
    });
    return;
  }
  // Finding the post in the database
  const post = await Post.findById(postId);
  if (!post) {
    res.status(401).json({
      status: false,
      error: 'post does not exist',
    });
    return;
  }

  // Making the action to unlike the post
  try {
    await post.updateOne({
      $pull: { likes: { userId } },
    });
    res.status(200).json({ status: true, message: 'post has been unliked' });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
  // }
};
//
//
//
//
//
//
/**
 * @description comment post
 * @route comment /api/v1/post/comment
 * @access Public
 */
const commentPost = async (req, res) => {
  // Getting all the user details from the req body
  const { userId, userPicture, userName, userUsername, postId, comment } =
    req.body;

  // Checking for all the details
  if (
    !userId ||
    !postId ||
    !userPicture ||
    !userName ||
    !userUsername ||
    !comment
  ) {
    res.status(500).json({
      status: false,
      error: 'Please pass all requied details',
    });
    return;
  }
  // Finding the post in the database
  const post = await Post.findById(postId);
  if (!post) {
    res.status(401).json({
      status: false,
      error: 'post does not exist',
    });
    return;
  }

  // Making the action to like the post
  try {
    await post.updateOne({
      $push: {
        comments: { userId, userName, userPicture, userUsername, comment },
      },
    });
    res
      .status(200)
      .json({ status: true, message: 'you have commented on the post' });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};
//
//
//
//
//
//
/**
 * @description uncomment post
 * @route uncomment /api/v1/post/uncomment
 * @access Public
 */
const uncommentPost = async (req, res) => {
  // Getting all the user details from the req body
  const { userId, postId } = req.body;

  // Checking for all the details
  if (!userId || !postId) {
    res.status(500).json({
      status: false,
      error: 'Please pass all requied details',
    });
    return;
  }
  // Finding the post in the database
  const post = await Post.findById(postId);
  if (!post) {
    res.status(401).json({
      status: false,
      error: 'post does not exist',
    });
    return;
  }

  // Making the action to like the post
  try {
    await post.updateOne({
      $pull: {
        comments: { userId },
      },
    });
    res
      .status(200)
      .json({ status: true, message: 'you have uncommented your comment' });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
  // }
};

module.exports = {
  getAllUserPost,
  createPost,
  updatePost,
  deletePost,
  getSinglePost,
  likePost,
  unlikePost,
  commentPost,
  uncommentPost,
  getAllPost,
};
