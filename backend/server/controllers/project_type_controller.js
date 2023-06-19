/** @format */

const Project = require("../models/ProjectModel");
const User = require("../models/UserModel");
const ProjectTypeModel = require("../models/project_type_model");

/**
 * @description Get all users projects Type
 * @route Get /api/project/all
 * @access Private
 */
const getProjectTypes = async (req, res) => {
  const projectId = req.params.projectId;
  if (projectId === "") {
    res.status(400).json("Project id is empty");
    return;
  }

  try {
    const projectTypes = await ProjectTypeModel.find({
      project: projectId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(projectTypes);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * @description Create new project
 * @route POST /api/project/create
 * @access Private
 */
const createProjectType = async (req, res) => {
  // Geting input from the request body
  const { name, projectId } = req.body;

  if (!name) {
    res.status(401).json("Name is requied");
    return;
  }

  // Check if Project name already exist
  const projectTypeExist = await ProjectTypeModel.findOne({ name });
  if (projectTypeExist) {
    res.status(401).json("ProjectType with this name already exist");
    return;
  }

  const projectType = await ProjectTypeModel.create({
    name,
    project: projectId,
  });

  if (projectType) {
    res.status(201).json({ projectType });
  }
};

/**
 * @description Update project
 * @route PUT /api/project/:id
 * @access Private
 */
const updateProjectType = async (req, res) => {
  const id = req.params.id;

  const project = await projectType.findById(id);

  const user = await project.findById(req.user.id);

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
  getProjectTypes,
  createProjectType,
  updateProjectType,
  deleteProject,
  getSingleProject,
};
