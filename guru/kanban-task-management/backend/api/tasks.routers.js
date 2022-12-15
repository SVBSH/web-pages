import express from "express";
import TasksController from '../api/tasks.controller.js';
const router = express.Router();


router.post('/newTask', TasksController.apiCreateTask);
router.get('/', TasksController.apiGetTasks);


export default router;