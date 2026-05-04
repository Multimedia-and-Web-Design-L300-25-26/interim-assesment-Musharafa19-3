import { Router } from 'express';

import {
  getAllCrypto,
  getTopGainers,
  getNewListings,
  createCrypto,
} from '../controllers/cryptoController.js';

const router = Router();

router.get('/crypto', getAllCrypto);
router.get('/crypto/gainers', getTopGainers);
router.get('/crypto/new', getNewListings);
router.post('/crypto', createCrypto);

export default router;
