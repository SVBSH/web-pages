import { MongoClient } from 'mongodb'
import 'dotenv/config';
import app from './server.js';
import HeadhonesDao from './dao/headphones.DAO.js';
import EarphonesDao from './dao/earphonesDAO.js';
import SpeakersDAO from './dao/speakersDAO.js';


const PORT = process.env.PORT;


MongoClient.connect(
  process.env.AUDIOPHILE_DB_URI,
  { useNewUrlParser: true }
)
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  .then(async client => {
    await HeadhonesDao.injectDB(client);
    await EarphonesDao.injectDB(client);
    await SpeakersDAO.injectDB(client);
    app.listen(
      PORT,
      () => {
        console.log(`Connected successfully to server on port: ${PORT}`);
      }
    )
  })
