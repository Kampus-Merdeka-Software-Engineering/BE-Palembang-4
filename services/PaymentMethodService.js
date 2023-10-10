import { PaymentMethod } from '../models/index.js';

export const createPaymentMethod = async (paymentMethodData) => {
  try {
    const newPaymentMethod = await PaymentMethod.create(paymentMethodData);
    return newPaymentMethod;
  } catch (error) {
    throw new Error('Error creating payment method');
  }
};

export const getAllPaymentMethods = async () => {
  try {
    const paymentMethods = await PaymentMethod.findAll();
    return paymentMethods;
  } catch (error) {
    throw new Error('Error fetching payment methods');
  }
};

export const getPaymentMethodById = async (id) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(id);
    if (!paymentMethod) {
      throw new Error('Payment method not found');
    }
    return paymentMethod;
  } catch (error) {
    throw new Error('Error fetching payment method by ID');
  }
};

export const updatePaymentMethod = async (id, updatedPaymentMethodData) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(id);
    if (!paymentMethod) {
      throw new Error('Payment method not found');
    }
    await paymentMethod.update(updatedPaymentMethodData);
    return paymentMethod;
  } catch (error) {
    throw new Error('Error updating payment method');
  }
};

export const deletePaymentMethod = async (id) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(id);
    if (!paymentMethod) {
      throw new Error('Payment method not found');
    }
    await paymentMethod.destroy();
    return paymentMethod;
  } catch (error) {
    throw new Error('Error deleting payment method');
  }
};
