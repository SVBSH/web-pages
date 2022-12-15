import express from "express";
import bodyParser from 'body-parser';
import morgan from "morgan";
import dotenv from 'dotenv';
// Routers
import boardRouter from './api/board.routes.js';
import boardColumnRouter from './api/boardColumnRoutes.js'
import taskRouter from './api/tasks.routers.js';
dotenv.config();

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(morgan('tiny'));
// routers
app.use('/api/boards', boardRouter);
app.use('/api/boardColumn', boardColumnRouter);
app.use('/api/tasks', taskRouter)

app.get('/', (req, res) => {
  res.send('Hello World!');

})


app.use("*", (_, res) => res.status(404).json({ error: "not found" }))



export default app;