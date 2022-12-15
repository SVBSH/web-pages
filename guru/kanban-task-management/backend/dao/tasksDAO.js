import { ObjectId } from 'mongodb';
import BoardDAO from './boardsDAO.js';
import boardColumnsDAO from './boardColumnsDAO.js';

let kanbanTaskManager;
let tasks;


export default class TasksDAO {

  static async injectDB(conn) {
    if (kanbanTaskManager) {
      return;
    }

    try {
      kanbanTaskManager = await conn.db('kanban-task-manager');
      tasks = await kanbanTaskManager.collection('tasks');
    }
    catch (e) {
      console.error(`Unable to establish connection in tasks: ${e}`);
    }
  }

  static async getColumnTasks(boardName, boardColumnName) {
    let cursor;
    const pipeline = [{}];

    const boardInfo = await BoardDAO.getBoard(boardName);
    const boardId = boardInfo === null ? null : boardInfo._id;
    if (boardId === null) {
      console.error(`getColumnTasks: board does not exist`);
      return false
    }

    // Get board column id
    const boardColumnInfo = await boardColumnsDAO.getBoardColumn(boardId, columnName);
    const boardColumnId = boardInfo === null ? null : boardInfo._id;

    if (boardColumnId === null) {
      console.error(`inserTask: provided task name does not exist`);
      return false
    }

  }

  static async getTask(taskName) {
    let cursor;
    const pipeline = [
      {
        $match: {
          'title': taskName
        }
      }
    ]

    try {
      cursor = await tasks.aggregate(pipeline);
      return cursor
    }
    catch (e) {
      console.log(`Unable to fetch task ${e}`);
    }
    return []
  }

  static async insertTask(boardName, columnName, taskName, taskDescription) {
    let cursor;

    // Get board_id
    const boardInfo = await BoardDAO.getBoard(boardName);
    const boardId = boardInfo === null ? null : boardInfo._id;
    if (boardId === null) {
      console.error(`inserTask: provided task board does not exist`);
      return false
    }

    // Get board column id
    const boardColumnInfo = await boardColumnsDAO.getBoardColumn(boardId, columnName);
    const boardColumnId = boardColumnInfo === null ? null : boardColumnInfo._id;

    if (boardColumnId === null) {
      console.error(`inserTask: provided board column does not exist`);
      return false
    }
    console.log(`BoardId: ${boardId}`);
    console.log(`BoardColumnId: ${boardColumnId}`);
    try {
      // TODO: Get task_id
      cursor = await tasks.find({
        column_id: boardColumnId,
        title: taskName
      }).next();

      // Test new if new task is unique this particular column 
      if (cursor != null) {
        console.error('inserBoardColumn: name of the task is not unique');
        return false;
      }
      // Insert a new column
      tasks.insertOne({
        column_id: ObjectId(boardColumnId),
        title: taskName,
        description: taskDescription
      });
      return true

    }
    catch (e) {
      console.log(`Unable to fetch board column ${e}`);
    }
    return false;
  }
}