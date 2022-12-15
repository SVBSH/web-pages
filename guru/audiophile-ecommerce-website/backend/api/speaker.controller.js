import SpeakersDAO from "../dao/speakersDAO.js";


export default class SpeakerController {

  static async apiGetProducts(req, res, next) {
    const speakers = await SpeakersDAO.getSpeakers(); 
    res.json(speakers);
  }

  static async apiGetProductDetail(req, res, next) {
    const id = parseInt(req.params.id, 10)
    const speaker = await SpeakersDAO.getSpeaker(id);

    res.json(speaker);
  }

}