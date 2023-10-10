import express from 'express';
import PaymentMethodController  from '../controller/index.js';

const router = express.Router();

// Rute untuk mengambil semua metode pembayaran
router.get('/payment-methods', PaymentMethodController.getAllPaymentMethods);

// Rute untuk membuat metode pembayaran baru
router.post('/api/payment-methods', PaymentMethodController.createPaymentMethod);

// Rute untuk mengambil detail metode pembayaran berdasarkan ID
router.get('/api/payment-methods/:id', PaymentMethodController.getPaymentMethodById);

// Rute untuk mengupdate metode pembayaran berdasarkan ID
router.put('/api/payment-methods/:id', PaymentMethodController.updatePaymentMethod);

// Rute untuk menghapus metode pembayaran berdasarkan ID
router.delete('/api/payment-methods/:id', PaymentMethodController.deletePaymentMethod);

export default router;
