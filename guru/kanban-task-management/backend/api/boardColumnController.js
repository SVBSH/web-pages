import { default as BoardColumnsDAO } from '../dao/boardColumnsDAO.js';


export default class BoardColumnController {

  static async apiGetAllBoardColumns(req, res) {
    res.json([])
  }


  static async apiGetBoard(req, res) {
    const columnName = req.params.columnName || '';
    const boardId = req.params.boardId || '';

    if (columnName === '') {
      console.error('Error in apiGetBoard: columnName not provided');
      return
    }
    else if (columnName === '') {
      console.error('Error in apiGetBoard: boardId not provided');
      return
    }

    const all_boards = await BoardColumnsDAO.getBoardColumn(boardId, columnName);
    if (all_boards.length === 0) {
      return {}
    }
    res.json(all_boards[0]);
  }

  static async apiCreateBoardColumn(req, res) {

    const boardName = req.body.boardName || ''
    const columnName = req.body.columnName || '';
    const columnColorMark = req.body.colorMark || '';

    if (boardName === '') {
      console.error(`apiCreateBoardColumn: invalid columnName provided`);
      res.json({})
    }

    if (columnName === '') {
      console.error(`apiCreateBoardColumn: invalid columnName provided`);
      res.json({})
    }
    if (columnColorMark === '') {
      console.error(`apiCreateBoardColumn: invalid columnName provided`);
      res.json({})
    }

    const response = await BoardColumnsDAO.insertBoardColumn(boardName, columnName, columnColorMark);
    return res.json(response);
  }
}