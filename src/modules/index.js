import { Router } from 'express';
import { resolve } from 'path';

const router = Router();

router.get('/', (_, res) => {
  res.sendFile(resolve('public/views/index.html'));
}); 

export default router;