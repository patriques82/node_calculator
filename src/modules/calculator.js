import { Router } from 'express';
import numberCruncher from './calculation/numberCruncher.js';

const router = Router();

router.post('/', (req, res) => {
  const result = numberCruncher(req.body);
  res.send(result.toString());
});

router.get('/:numOne/:operator/:numTwo', (req, res) => {
  const result = numberCruncher(req.params)
  res.json({ result })
})

export default router;
