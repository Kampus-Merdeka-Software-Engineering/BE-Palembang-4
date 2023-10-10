import { OrderService } from '../services/index.js';

export const createOrder = async (req, res) => {
  try {
    const Order = await OrderService.createOrder(req.body);
    console.log('KelolaPesanan created for admin:', Order.id_admin);
    res.status(201).json(Order);
  } catch (error) {
    console.error('Error creating KelolaPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const Order = await OrderService.getAllOrder();
    console.log('Retrieved all KelolaPesanan');
    res.json(Order);
  } catch (error) {
    console.error('Error retrieving KelolaPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await OrderService.updateOrder(id, req.body);
    if (!updatedOrder) {
      console.error('KelolaPesanan not found:', id);
      return res.status(404).json({ message: 'KelolaPesanan not found' });
    }
    console.log('KelolaPesanan updated for admin:', updatedOrder.id_admin);
    res.json({ message: 'KelolaPesanan updated', Order: updatedOrder });
  } catch (error) {
    console.error('Error updating KelolaPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await OrderService.deleteOrder(id);
    if (deleted) {
      console.log('Order deleted:', id);
      return res.json({ message: 'Order deleted' });
    }
    console.error('Order not found:', id);
    return res.status(404).json({ message: 'Order not found' });
  } catch (error) {
    console.error('Error deleting Order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
