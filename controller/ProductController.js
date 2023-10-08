import {
  add,
  get,
  edit,
  del
} from '../services/ProductService.js';

export const createProduct = async (req, res) => {
  try {
    const product = await add(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await get();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await edit(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product updated', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await del(id);
    if (deleted) {
      return res.json({ message: 'Product deleted' });
    }
    return res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
