/** @format */

const router = require('express').Router();

const { verifyAccessToken } = require('../../utils/jwt');
const {
  deletePost,
  getAllPost,
  getAllUserPost,
  getSinglePost,
  createPost,
  updatePost,
  likePost,
  unlikePost,
  commentPost,
  uncommentPost,
} = require('../controllers/post_controller');

// Get all users podt
router.get('/', verifyAccessToken, getAllUserPost);

// Get all posts
router.get('/all', verifyAccessToken, getAllPost);

// Get all users Projects
router.get('/:id', getSinglePost);

// Create Project
router.post('/create', verifyAccessToken, createPost);

// Update Project
router.put('/update/:id', verifyAccessToken, updatePost);

// Delete Project
router.delete('/delete/:id', verifyAccessToken, deletePost);
//
//
//
// Post Interactions

// like post
router.post('/like', verifyAccessToken, likePost);

// unlike post
router.post('/unlike', verifyAccessToken, unlikePost);

// comment post
router.post('/comment', verifyAccessToken, commentPost);

// uncomment post
router.post('/uncomment', verifyAccessToken, uncommentPost);

module.exports = router;
