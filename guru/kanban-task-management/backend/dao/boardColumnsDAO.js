import { response } from 'express';
import { ObjectId } from 'mongodb';
import BoardDAO from './boardsDAO.js';

let kanbanTaskManager;
let boardColumns;


export default class BoardColumnsDAO {
  static async injectDB(conn) {
    if (kanbanTaskManager) {
      return;
    }

    try {
      kanbanTaskManager = await conn.db('kanban-task-manager');
      boardColumns = await kanbanTaskManager.collection('board_columns');
    }
    catch (e) {
      console.error(`Unable to establish connection in boardColumns: ${e}`);
    }
  }

  static async getAllBoardColumns(boardName) {
    let cursor;

    try {
      cursor = await boardColumns.find({
        board_id: boardId
      }).toArray();
      return cursor;
    }
    catch (e) {
      console.error(`Unable to fetch board columns ${e}`);
    }
    return []
  }

  static async getBoardColumn(boardId, columnName) {
    let cursor;

    try {
      // cursor = await boardColumns.aggregate(pipeline);
      cursor = await boardColumns.find({
        board_id: boardId,
        columnName: columnName
      });

      return cursor.next()
    }
    catch (e) {
      console.log(`Unable to fetch board column ${e}`);
    }
    return []
  }

  static async insertBoardColumn(boardName, columnName, colorMark) {
    let cursor;

    const pipeline = [
      {
        $match: {
          columnName: 'Todo'
        }
      }
    ]

    // Get board_id
    const boardInfo = await BoardDAO.getBoard(boardName);
    const boardId = boardInfo === null ? null : boardInfo._id;
    if (boardId === null) {
      console.error(`inserBoardColumn: provided boardName does not exist`);
      return false
    }

    try {
      cursor = await boardColumns.find({
        board_id: boardId,
        columnName: columnName
      }).toArray();

      // Test new if new column name is unique his board 
      if (cursor.length != 0) {
        console.error('inserBoardColumn: name of the board column is not unique');
        return false;
      }
      // Insert a new column
      boardColumns.insertOne({
        board_id: ObjectId(boardId),
        columnName: columnName,
        colorMark: `#${colorMark}`
      })
      return true

    }
    catch (e) {
      console.log(`Unable to fetch board column ${e}`);
    }
    return false;
  }
}