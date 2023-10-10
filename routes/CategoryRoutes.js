import express from 'express';
import CategoryController from '../controller/index.js';

const router = express.Router();

// Rute untuk mendapatkan semua kategori
router.get('/categories', CategoryController.getAllCategories);

// Rute untuk membuat kategori baru
router.post('/api/categories', CategoryController.createCategory);

// Rute untuk mendapatkan detail kategori berdasarkan ID
router.get('/api/categories/:id', CategoryController.getCategoryById);

// Rute untuk mengupdate kategori berdasarkan ID
router.put('/api/categories/:id', CategoryController.updateCategory);

// Rute untuk menghapus kategori berdasarkan ID
router.delete('/api/categories/:id', CategoryController.deleteCategory);

export default router;
