import { PaymentMethodService } from '../services/index.js';

export const createPaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethodService.createPaymentMethod(req.body);
    console.log('Payment Method created:', paymentMethod.method);
    res.status(201).json(paymentMethod);
  } catch (error) {
    console.error('Error creating Payment Method:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethodService.getAllPaymentMethods();
    console.log('Retrieved all Payment Methods');
    res.json(paymentMethods);
  } catch (error) {
    console.error('Error retrieving Payment Methods:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getPaymentMethodById = async (req, res) => {
  const { id } = req.params;
  try {
    const paymentMethod = await PaymentMethodService.getPaymentMethodById(id);
    if (!paymentMethod) {
      console.error('Payment Method not found:', id);
      return res.status(404).json({ message: 'Payment Method not found' });
    }
    console.log('Retrieved Payment Method:', paymentMethod.method);
    res.json(paymentMethod);
  } catch (error) {
    console.error('Error retrieving Payment Method:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updatePaymentMethod = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPaymentMethod = await PaymentMethodService.updatePaymentMethod(id, req.body);
    if (!updatedPaymentMethod) {
      console.error('Payment Method not found:', id);
      return res.status(404).json({ message: 'Payment Method not found' });
    }
    console.log('Payment Method updated:', updatedPaymentMethod.method);
    res.json({ message: 'Payment Method updated', paymentMethod: updatedPaymentMethod });
  } catch (error) {
    console.error('Error updating Payment Method:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deletePaymentMethod = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await PaymentMethodService.deletePaymentMethod(id);
    if (deleted) {
      console.log('Payment Method deleted:', id);
      return res.json({ message: 'Payment Method deleted' });
    }
    console.error('Payment Method not found:', id);
    return res.status(404).json({ message: 'Payment Method not found' });
  } catch (error) {
    console.error('Error deleting Payment Method:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
