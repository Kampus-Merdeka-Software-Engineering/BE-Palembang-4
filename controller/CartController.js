import { CartService } from '../services/index.js';

export const createCart = async (req, res) => {
  try {
    const cart = await CartService.createCart(req.body);
    console.log('Cart created for user:', cart.User_ID);
    res.status(201).json(cart);
  } catch (error) {
    console.error('Error creating Cart:', error);
    if (error.message === 'User not found') {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

export const getAllCartsByUser = async (req, res) => {
  const { User_ID } = req.params;
  try {
    const carts = await CartService.getAllCartsByUser(User_ID);
    console.log('Retrieved carts for user:', User_ID);
    res.json(carts);
  } catch (error) {
    console.error('Error retrieving carts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCart = await CartService.updateCart(id, req.body);
    if (!updatedCart) {
      console.error('Cart not found:', id);
      return res.status(404).json({ message: 'Cart not found' });
    }
    console.log('Cart updated for user:', updatedCart.User_ID);
    res.json({ message: 'Cart updated', cart: updatedCart });
  } catch (error) {
    console.error('Error updating Cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await CartService.deleteCart(id);
    if (deleted) {
      console.log('Cart deleted:', id);
      return res.json({ message: 'Cart deleted' });
    }
    console.error('Cart not found:', id);
    return res.status(404).json({ message: 'Cart not found' });
  } catch (error) {
    console.error('Error deleting Cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
