const router = require('express').Router();
const { update, deleteUser, getUser } = require('../controllers/userController');

// Update User
router.put('/:id', update);

// Delete user
router.delete('/:id', deleteUser);

// Get a single user
router.get('/:id', getUser);


module.exports = router;