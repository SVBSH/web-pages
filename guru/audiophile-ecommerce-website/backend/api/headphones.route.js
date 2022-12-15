import express from 'express';
const router = express.Router()

 
import headphonesController from './headphones.controller.js';

router.route('/').get(headphonesController.apiGetProducts)
router.route('/product/:id').get(headphonesController.apiGetProductDetail)


export default router;