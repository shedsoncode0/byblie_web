const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    bio: {
      type: String,
      default: "",
    },
    church: {
      type: String,
      default: "",
    },
    number: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    profileImage: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    meets: {
      type: Array,
      default: [],
    },
    studys: {
      type: Array,
      default: [],
    },
    number: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "",
    },
    branch: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
