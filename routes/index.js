import express from 'express';
import UserRoutes from './UserRoutes.js';
import CategoryRoutes from './CategoryRoutes.js';
import KelolaPesananRoutes from './KelolaPesananRoute.js';
import PaymentMethodRoutes from './PaymentMethodRoutes.js';
import ProductRoutes from './ProductRoutes.js';
import CartRoutes from './CartRoutes.js';
import CheckoutRoutes from './CheckOutRoutes.js';
import OrderListRoutes from './OrderListRoute.js';

const router = express.Router();

// Gabungkan semua rute ke dalam router
router.use('/users', UserRoutes);
router.use('/categories', CategoryRoutes);
router.use('/kelola-pesanan', KelolaPesananRoutes);
router.use('/payment-methods', PaymentMethodRoutes);
router.use('/products', ProductRoutes);
router.use('/carts', CartRoutes);
router.use('/checkout', CheckoutRoutes);
router.use('/order-lists', OrderListRoutes);

export default router;
