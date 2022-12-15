let audiophile;
let earphones;


export default class EarphonesDao {

  static async injectDB(conn) {
    if (earphones) {
      return;
    }
    try {
      audiophile = await conn.db('audiophile');
      earphones = await audiophile.collection('products');
    } catch(e) {
      console.error(`Unable to establish connection in earphonesDAO: ${e}`)
    }
  }

  static async get_earphone(id) {
    let cursor;
    try {
      cursor = await earphones.findOne({
        id: id,
        category: 'earphones'
      })
    } catch (e) {
      console.error(`Unable to get earphone: ${e}`);
      return {}
    }
 
    return cursor;
  }

  static async get_earphones(amount = 10) {
    let cursor;
    try {
      cursor = await earphones.find({
        category: 'earphones'
      })
    } catch(e) {
      console.error(`Unable to get earphones: ${e}`)
      return []
    }

    return cursor.toArray();
  }


};