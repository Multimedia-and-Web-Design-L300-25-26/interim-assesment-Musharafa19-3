import { Router } from 'express';

import {
  register,
  login,
  logout,
  getProfile,
} from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = Router();

router.route('/register').get(register).post(register);
router.route('/login').get(login).post(login);
router.get('/profile', protect, getProfile);
router.post('/logout', logout);

export default router;
