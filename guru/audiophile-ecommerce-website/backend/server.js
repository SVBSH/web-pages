import express from 'express';
import morgan from 'morgan';
// import cors from 'cors';
import path from 'path';

// import routers
import { default as routeHeadphone } from './api/headphones.route.js';
import { default as routeEarphone } from './api/earphone.route.js';
import { default as routeSpeaker } from './api/speaker.route.js';


import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
// app.use(cors())
app.use(morgan('tiny')); // console logs

// Serving images
console.log(path.join(__dirname, 'public/images'))
app.use('/static', express.static(path.join(__dirname, 'public/images')))


app.use('/api/headphones', routeHeadphone);
app.use('/api/earphones', routeEarphone);
app.use('/api/speakers', routeSpeaker);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use("*", (req, res) => res.status(404).json({ error: "not found" }))


export default app;