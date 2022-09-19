import { Router } from "express";
const router = Router();
import { createTask, getTasks, updateTask, deleteTask, getTask } from '../controllers/tasks.controller.js';

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.get('/tasks/:id', getTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;