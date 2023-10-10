import express from 'express';
import { UsersController } from '../controllers';
import { authMiddleware } from '../middleware/AuthMiddleware';

const router = express.Router();

// Rute untuk pendaftaran pengguna dan login
router.post('/register', UsersController.createUserAndLogin);
// router.post('/login', UsersController.loginUser); // Anda dapat mengaktifkannya jika Anda ingin mengaktifkan login

// Rute untuk mengambil informasi pengguna yang telah login
router.get('/profile', authMiddleware, UsersController.getUserProfile);

export default router;
