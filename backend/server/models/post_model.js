const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
    },
    username: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    profileImage: {
      type: String,
    },
    textColor: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: []
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', PostSchema);
