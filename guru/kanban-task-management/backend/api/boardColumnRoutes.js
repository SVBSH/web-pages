import express from 'express';
import BoardColumnController from './boardColumnController.js';

const router = express.Router();
router.get('/', BoardColumnController.apiGetAllBoardColumns);
router.get('/boardId=:boardId&columnName=:columnName', BoardColumnController.apiGetBoard);
router.post('/newColumn', BoardColumnController.apiCreateBoardColumn);



export default router;