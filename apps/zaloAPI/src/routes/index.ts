import { Router } from 'express';
import { getProduct, welcome } from '../controllers/app.controller';


const router = Router();
router.get('/',welcome)
router.post('/api/searching', getProduct);

export default router;
