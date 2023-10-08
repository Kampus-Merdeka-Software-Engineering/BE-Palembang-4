import express from 'express';
import OrderListController from '../controller/index.js';

const router = express.Router();

// Rute untuk mengambil daftar pesanan pengguna
router.get('/order-lists/:userId', OrderListController.getUserOrderList);

// Rute untuk menambahkan daftar pesanan pengguna
router.post('/api/order-lists', OrderListController.createOrderList);

// Rute untuk mengupdate daftar pesanan pengguna berdasarkan ID
router.put('/api/order-lists/:id', OrderListController.updateOrderList);

// Rute untuk menghapus daftar pesanan pengguna berdasarkan ID
router.delete('/api/order-lists/:id', OrderListController.deleteOrderList);

export default router;
