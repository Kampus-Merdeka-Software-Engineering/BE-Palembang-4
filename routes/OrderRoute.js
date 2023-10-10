import express from 'express';
import OrderController from '../controller/index.js';

const router = express.Router();

// Rute untuk mengambil daftar pesanan pengguna
router.get('/order-lists/:userId', OrderController.getUserOrder);

// Rute untuk menambahkan daftar pesanan pengguna
router.post('/api/order-lists', OrderController.createOrder);

// Rute untuk mengupdate daftar pesanan pengguna berdasarkan ID
router.put('/api/order-lists/:id', OrderController.updateOrder);

// Rute untuk menghapus daftar pesanan pengguna berdasarkan ID
router.delete('/api/order-lists/:id', OrderController.deleteOrder);

export default router;
