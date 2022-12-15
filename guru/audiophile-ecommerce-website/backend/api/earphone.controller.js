import express from 'express';
import EarphonesDao from '../dao/earphonesDAO.js';

export default class EarphonesControler {

  static async apiGetEarphones(req, res, next) {
    const earphones = await EarphonesDao.get_earphones();
    res.json(earphones);
  }

  static async apiGetEarphone(req, res, next) {
    const earphone_id = parseInt(req.params.id, 10);
    const earphone = await EarphonesDao.get_earphone(earphone_id);
    res.json(earphone);
  }
}