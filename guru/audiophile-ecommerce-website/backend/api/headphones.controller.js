import HeadhonesDao from "../dao/headphones.DAO.js";


export default class HeadphonesController {

  static async apiGetProducts(req, res, next) {
    const headphones = await HeadhonesDao.getHeadphones();
    res.json(headphones);
  }

  static async apiGetProductDetail(req, res, next) {
    let productId = parseInt(req.params.id, 10);
    const headphone = await HeadhonesDao.getHeadphone(productId);
    
    res.json(headphone);
  }
}