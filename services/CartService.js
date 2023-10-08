import { Cart } from '../models/index.js';

export const createCart = async (cartData) => {
  const cart = await Cart.create(cartData);
  console.log('Cart created for user:', cart.User_ID);
  return cart;
};

export const getAllCartsByUser = async (user_id) => {
  const carts = await Cart.findAll({ where: { User_ID: user_id } });
  console.log('Retrieved carts for user:', user_id);
  return carts;
};

export const updateCart = async (id, cartData) => {
  const [updated] = await Cart.update(cartData, { where: { ID: id } });
  if (updated) {
    const updatedCart = await Cart.findOne({ where: { ID: id } });
    console.log('Cart updated for user:', updatedCart.User_ID);
    return updatedCart;
  }
  return null;
};

export const deleteCart = async (id) => {
  const deleted = await Cart.destroy({ where: { ID: id } });
  if (deleted) {
    console.log('Cart deleted:', id);
    return true;
  }
  return false;
};
