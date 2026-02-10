import { Router } from 'express';
import { getProduct } from '../controllers/app.controller';


const router = Router();

router.post('/api/searching', getProduct);

export default router;
