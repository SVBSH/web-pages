let products;
let audiophile;


export default class SpeakersDAO {

  static async injectDB(connection) {
    console.log('Init speakers');

    if (products) {
      return;
    }

    try {
      audiophile = await connection.db('audiophile');
      products = audiophile.collection('products');
    }
    catch (e) {
      console.error(`Unable to establish connection in speakers: ${e}`)
    }
  }

  static async getSpeakers() {
    let cursor;
    try {
      cursor = await products.find({
        category: 'speakers'
      })
    }
    catch (e) {
      console.error(`Unable to get speakers: ${e}`)
      return []
    }

    return cursor.toArray();
  }
2
  static async getSpeaker(id) {
    let cursor;
    try {
      cursor = await products.findOne({
        category: 'speakers',
        id: id
      })

    }
    catch(e) {
      console.error(`Unable get speakerDao: ${e}`);
      return '';
    }
    return cursor;
  }
}
