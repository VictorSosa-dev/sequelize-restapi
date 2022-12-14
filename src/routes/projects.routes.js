import { Router } from "express";
const router = Router();

import { 
    createProject, 
    getProjects, 
    updateProject, 
    deleteProject, 
    getProject,
    getProjectTasks 
 } from '../controllers/projects.controller.js';

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.get("/projects/:id", getProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

router.get("/projects/:id/tasks", getProjectTasks);



export default router;