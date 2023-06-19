const mongoose = require("mongoose");

const ProjectTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: String,
      default: "0",
    },
    deleted: {
      type: String,
      default: "0",
    },
    onGoing: {
      type: String,
      default: "0",
    },
    tasks: {
      type: Array,
      default: [],
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Project",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProjectType", ProjectTypeSchema);
