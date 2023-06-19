const Project = require("../models/ProjectModel");
const User = require("../models/UserModel");

/**
 * @description Get all users projects
 * @route Get /api/project/all
 * @access Private
 */
const getProjects = async (req, res) => {
  const projects = await Project.find({ user: req.user.id }).sort({
    createdAt: -1,
  });

  if (projects.length === 0) {
    res.status(200).json({ message: "user has no projects" });
  } else {
    res.status(200).json(projects);
  }
};

/**
 * @description Create new project
 * @route POST /api/project/create
 * @access Private
 */
const createProject = async (req, res) => {
  // Geting input from the request body
  const { members, pay, startDate, deadLine, name } = req.body;

  if (!pay || !startDate || !deadLine || !name) {
    res.status(401).json("All fields are required");
    return;
  }

  // Check if Project name already exist
  const projectExist = await Project.findOne({ name });
  if (projectExist) {
    res.status(401).json("Project with this name already exist");
    return;
  }

  const project = await Project.create({
    user: req.user.id,
    name,
    members,
    startDate: startDate,
    deadLine: deadLine,
    pay,
  });

  if (project) {
    res.status(201).json({ project });
  }
};

/**
 * @description Update project
 * @route PUT /api/project/:id
 * @access Private
 */
const updateProject = async (req, res) => {
  const id = req.params.id;

  const project = await Project.findById(id);

  const user = await User.findById(req.user.id);

  // Check if Project name already exist
  if (!project) {
    res.status(401).json("Project with id not found");
  }

  if (project.user.toString() !== user.id) {
    res.status(401).json("User not authorized");
  }

  const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedProject);
};

/**
 * @description Delete project
 * @route Delete /api/delete/:id
 * @access Private
 */
const deleteProject = async (req, res) => {
  const id = req.params.id;

  const project = await Project.findById(id);
  const user = await User.findById(req.user.id);

  // Check if Project exist
  if (!project) {
    res.status(401);
    throw new Error("Project with id not found");
  }

  if (project.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const deletedProject = await Project.findByIdAndDelete(id);
  res.status(200).json(deletedProject);
};

const getSingleProject = async (req, res) => {
  const { projectId } = req.params;

  const project = await Project.findById(projectId);

  if (!project) {
    res.status(400).json("Project not found");
    return;
  }

  res.status(200).json(project);
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getSingleProject,
};
