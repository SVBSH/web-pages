import express from 'express';
const router = express.Router();
import SpeakerController from './speaker.controller.js';

router.route('/').get(SpeakerController.apiGetProducts);
router.route('/product/:id').get(SpeakerController.apiGetProductDetail);

export default router;