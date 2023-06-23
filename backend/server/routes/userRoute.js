const router = require('express').Router();
const {
  update,
  deleteUser,
  getUser,
  sendFriendRequest,
  unfriendUser,
  getAllUser,
} = require('../controllers/userController');
const { verifyAccessToken } = require('../../utils/jwt');

// Update User
router.get('/all', verifyAccessToken, getAllUser);

// Update User
router.put('/:id', update);

// Delete user
router.delete('/:id', deleteUser);

// Get a single user
router.get('/:id', getUser);

// friend a user
router.post('/addFriend', sendFriendRequest);

// unfriend a user
router.post('/unfriend', unfriendUser);

module.exports = router;
