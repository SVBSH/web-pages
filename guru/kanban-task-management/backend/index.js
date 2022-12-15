import { MongoClient } from 'mongodb';
import "dotenv/config";

import BoardsDAO from './dao/boardsDAO.js';
import BoardColumnsDAO from './dao/boardColumnsDAO.js';
import TasksDAO from './dao/tasksDAO.js';

import app from "./server.js";


// console.log(process.env.KANBAN_DB_URI);
const DB_URI = process.env.KANBAN_DB_URI;
const PORT = process.env.PORT;

MongoClient.connect(
  DB_URI
)
  .then(async client => {
    // await
    BoardsDAO.injectDB(client)
    BoardColumnsDAO.injectDB(client);
    TasksDAO.injectDB(client);
    
    app.listen(9000)
  })
  .catch(error => {
    process.exit(1);
  })


// app.listen(9000);