import express from 'express';
const router = express.Router();
import EarphonesControler from './earphone.controller.js';


router.route('/').get(EarphonesControler.apiGetEarphones);
router.route('/product/:id').get(EarphonesControler.apiGetEarphone);
// router.route('/product/:id/detail').get(EarphonesControler.getEarphones);

export default router;