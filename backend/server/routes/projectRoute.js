/** @format */

const router = require("express").Router();

const { verifyAccessToken } = require("../../utils/jwt");
const {
  createProject,
  updateProject,
  deleteProject,
  getProjects,
  getSingleProject,
} = require("../controllers/projectController");
const {
  getProjectTypes,
  createProjectType,
  updateProjectType,
} = require("../controllers/project_type_controller");

// Get all users Projects
router.get("/all", verifyAccessToken, getProjects);

// Get all users Projects
router.get("/user/project/:projectId", getSingleProject);

// Create Project
router.post("/create", verifyAccessToken, createProject);

// Update Project
router.put("/update/:id", verifyAccessToken, updateProject);

// Delete Project
router.delete("/delete/:id", verifyAccessToken, deleteProject);
//
//
//
//
//
// PROJECT TYPE
//
//
//
//
//
//
// Get all users Projects
router.get("/project_type/all/:projectId", getProjectTypes);

// Get all users Projects
// router.get("/user/project/:projectId", getSingleProject);

// Create Project
router.post("/project_type/create", createProjectType);

// Update Project
router.put("/project_type/update/:id", updateProjectType);

// Delete Project
// router.delete("/delete/:id", verifyAccessToken, deleteProject);

module.exports = router;
