import { default as BoardDAO } from '../dao/boardsDAO.js';


export default class BoardController {

  static async apiGetBoards(req, res) {
    const all_boards = await BoardDAO.get_boards();
    res.json(all_boards)
  }

  static async apiInsertBoards(req, res) {
    const name = req.params.name;
    const columns = req.params.columns;

    if(name.length <= 0 || columns.length <= 1) {
      console.error(`Error: Invalid arguments to apiInserBoards`);
      res.error();
    }

    const all_boards = await BoardDAO.insert_board(name, columns);
    res.json();
  }

  static async apiGetTasks(req, res) {
    const boardName = req.params.boardName;
    const columnName = req.params.columnName;
    const boards = await BoardDAO.get_tasks('', boardName, columnName);
    res.json(boards);
  }

  static async apiGetBoardColumns(req, res) {
    const boardName = req.params.boardName || '';
    if (boardName === '') {
      console.error('apiGetBoardColumns: board name not provided');
      res.json([]);
    }

    const result = await BoardDAO.getBoardColumns(boardName);    
    res.json(result);
  }
}