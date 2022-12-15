import TasksDAO from "../dao/tasksDAO.js";
import BoardDAO from "../dao/boardsDAO.js";

export default class TasksController {

  static async apiGetColumnTasks(boardName, columnName) {
    const board = BoardDAO.getBoard(boardName);
    console.log(board._id);
  }

  static async apiGetTasks(req, res) {
    console.log('apiGetTasks');
    res.json({});
  }

  static async apiCreateTask(req, res) {
    console.log('apiCreateTasks', req.body);

    const boardName = req.body.boardName || '';
    const columnName = req.body.columnName || '';
    const taskName = req.body.taskName || '';
    const taskDescription = req.body.taskDescription || '';

    TasksDAO.insertTask(
      boardName,
      columnName,
      taskName,
      taskDescription
    );

    res.json({});
  }
}