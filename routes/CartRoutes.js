import express from 'express';
import CartController from '../controller/index.js';

const router = express.Router();

// Rute untuk menambah produk ke keranjang
router.post('/api/carts', CartController.addToCart);

// Rute untuk mengambil keranjang belanja pengguna
router.get('/carts/:userId', CartController.getUserCart);

// Rute untuk mengupdate produk di dalam keranjang
router.put('/api/carts/:id', CartController.updateCartItem);

// Rute untuk menghapus produk dari keranjang
router.delete('/api/carts/:id', CartController.deleteCartItem);

export default router;
