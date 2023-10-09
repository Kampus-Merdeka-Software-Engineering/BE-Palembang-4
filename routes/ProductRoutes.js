import express from 'express';
import {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
  }  from '../controller/ProductController.js';

const router = express.Router();

// Rute untuk mengambil semua produk
router.get('/products', getAllProducts);

// Rute untuk membuat produk baru
router.post('/api/products', createProduct);

// Rute untuk mengambil detail produk berdasarkan ID

// Rute untuk mengupdate produk berdasarkan ID
router.put('/api/products/:id', updateProduct);

// Rute untuk menghapus produk berdasarkan ID
router.delete('/api/products/:id', deleteProduct);

export default router;
