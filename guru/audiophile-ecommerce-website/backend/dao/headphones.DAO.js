let products;
let audiophile;


export default class HeadhonesDao {

  static async injectDB(connection) {
    console.log('Init headphones');

    if (products) {
      console.log('success no Init headphones');
      return;
    }

    try {
      audiophile = await connection.db('audiophile');
      products = audiophile.collection('products');
    }
    catch (e) {
      console.error(`Unable to establish connection in headphonesDAO: ${e}`)
    }
  }

  static async getHeadphones() {
    let cursor;
    try {
      cursor = await products.find({
        category: 'headphones'
      })
    }
    catch (e) {
      console.error(`Unable to get Headphones: ${e}`)
      return []
    }

    return cursor.toArray();
  }
2
  static async getHeadphone(id) {
    let cursor;
    try {
      cursor = await products.findOne({
        category: 'headphones',
        id: id
      })

    }
    catch(e) {
      console.error(`Unable get headphoneDao: ${e}`);
      return '';
    }
    return cursor;
  }
}
