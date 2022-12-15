import { ObjectId } from 'mongodb';


let kanbanTaskManager;
let boards;


export default class BoardDAO {

  static async injectDB(conn) {
    if (kanbanTaskManager) {
      return;
    }

    try {
      kanbanTaskManager = await conn.db('kanban-task-manager');
      boards = await kanbanTaskManager.collection('boards');
    }
    catch (e) {
      console.error(`Unable to establish connection in boardsDAO: ${e}`);
    }
  }

  static async getBoardColumns(boardName, userId = '') {
    console.log(boardName)
    const pipeline = [
      {
        '$match': {
          'name': boardName
        }
      }, {
        '$lookup': {
          'from': 'board_columns',
          'localField': '_id',
          'foreignField': 'board_id',
          'as': 'board_columns'
        }
      }, {
        '$project': {
          '_id': 0,
          'board_columns': 1
        }
      }
    ]

    try {
      const boardColumns = await boards.aggregate(pipeline);
      return boardColumns.toArray();
    }
    catch (e) {
      console.error(`getBoardColumns: ${e}`);
    }
    return []
  }

  static async getBoard(name) {
    let cursor;
    const pipeline = [
      {
        $match: {
          name: name
        }
      }
    ]
    try {
      cursor = await boards.aggregate(pipeline).next();
      return cursor;
    }
    catch (e) {
      console.error(e)
    }
    return [];
  }

  // TODO: add parameter userId to identificate owner of board
  static async get_boards() {
    let cursor;
    let pipeline = [
      {
        $match: {}
      }, {
        $project: {
          _id: 0,
          name: 1
        }
      }
    ]

    try {
      cursor = await boards.aggregate(pipeline)
    }
    catch (e) {
      console.error(`Unable to get boards: ${e}`)
      return [];
    }
    return cursor.toArray()
  }


  static async insert_board(name, columns) {
    let cursor;

    try {
      cursor = await boards.insertOne({
        name: name
      });
    }
    catch (e) {
      console.error(`Unable to insert new board ${e}`);
      return false
    }
    return true;
  }

  static async remove_board(name) {
    let cursor;


    try {
      cursor = await boards.deleteOne({
        name: name
      })
    }
    catch (e) {
      console.error(`Unable to delete ${name}: ${e}`)
    }
    return cursor.status;
  }

  static async get_tasks(userName = '', boardName, columnName) {

    let cursor;
    const pipeline = [{
      $match: {
        _id: ObjectId(boardName)
      }
    }]

    // let pipeline = [
    //   {
    //     $match: {}
    //   }, {
    //     $project: {
    //       _id: 0,
    //       name: 1
    //     }
    //   }
    // ]
    try {
      cursor = await boards.aggregate(pipeline);
    } catch (e) {
      console.error(`Unable to get tasks: ${e}`)
    }
    return cursor.toArray();
  }
}