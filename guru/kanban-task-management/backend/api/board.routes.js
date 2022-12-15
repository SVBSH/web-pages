import express from 'express';
import BoardController from './board.controller.js';


const router = express.Router();
router.get('/', BoardController.apiGetBoards);
router.get('/insert', BoardController.apiInsertBoards);
router.get('/tasks/:boardName', BoardController.apiGetTasks);
router.get('/boardName=:boardName', BoardController.apiGetBoardColumns);

export default router;