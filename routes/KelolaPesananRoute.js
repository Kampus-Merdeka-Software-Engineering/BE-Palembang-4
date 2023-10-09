import express from 'express';
import KelolaPesananController from '../controller/index.js';

const router = express.Router();

// Rute untuk membuat pesanan baru
router.post('/api/kelola-pesanan', KelolaPesananController.createOrder);

// Rute untuk mengambil semua pesanan
router.get('/kelola-pesanan', KelolaPesananController.getAllOrders);

// Rute untuk mengambil detail pesanan berdasarkan ID
router.get('/kelola-pesanan/:id', KelolaPesananController.getOrderById);

// Rute untuk mengupdate pesanan berdasarkan ID
router.put('/api/kelola-pesanan/:id', KelolaPesananController.updateOrder);

// Rute untuk menghapus pesanan berdasarkan ID
router.delete('/api/kelola-pesanan/:id', KelolaPesananController.deleteOrder);

export default router;
