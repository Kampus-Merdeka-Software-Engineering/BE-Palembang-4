import express from 'express';
import UserRoutes from './UserRoutes.js';
import CategoryRoutes from './CategoryRoutes.js';
import PaymentMethodRoutes from './PaymentMethodRoutes.js';
import ProductRoutes from './ProductRoutes.js';
import CartRoutes from './CartRoutes.js';
import OrderRoutes from './OrderRoute.js';

const router = express.Router();

// Gabungkan semua rute ke dalam router
router.use('/users', UserRoutes);
router.use('/categories', CategoryRoutes);
router.use('/payment-methods', PaymentMethodRoutes);
router.use('/products', ProductRoutes);
router.use('/carts', CartRoutes);
router.use('/order-lists', OrderRoutes);

export default router;
