import express from 'express';
import { index, produtos, camisetas } from '../controllers/siteController.js';

const router = express.Router();

router.get('/', index);
router.get('/produtos', produtos);
router.post('/camisetas', camisetas);

export default router;
