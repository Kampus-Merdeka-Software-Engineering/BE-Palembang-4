import Order from '../models/Order.js';
import Order from '../models/Order.js';
import { Order } from '../models/index.js';

export const createOrder = async (OrderData) => {
  const Order = await Order.create(OrderData);
  console.log('Kelola Pelanggan created:', Order.Nama);
  return Order;
};

export const getAllOrder = async () => {
  const Order = await Order.findAll();
  console.log('Retrieved all KelolaPelanggan');
  return Order;
};

export const updateOrder = async (id, OrderData) => {
  const [updated] = await Order.update(OrderData, { where: { id: id } });
  if (updated) {
    const updatedOrder = await Order.findOne({ where: { id: id } });
    console.log('KelolaPelanggan updated:', updatedOrder.Nama);
    return updatedOrder;
  }
  return null;
};

export const deleteOrder = async (id) => {
  const deleted = await Order.destroy({ where: { id: id } });
  if (deleted) {
    console.log('KelolaPelanggan deleted:', id);
    return true;
  }
  return false;
};
