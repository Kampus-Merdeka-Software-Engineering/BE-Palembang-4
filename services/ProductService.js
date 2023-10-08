import { Product } from '../models/index.js';

// Mengambil semua produk
export const get = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error('Gagal mengambil produk');
  }
};

// Mengambil produk berdasarkan ID

// Membuat produk baru
export const add = async (productData) => {
  try {
    const newProduct = await Product.create(productData);
    return newProduct;
  } catch (error) {
    throw new Error('Gagal membuat produk');
  }
};

// Memperbarui produk berdasarkan ID
export const edit = async (id, productData) => {
  try {
    const [updatedRowsCount] = await Product.update(productData, {
      where: { ID: id },
    });
    if (updatedRowsCount === 0) {
      throw new Error('Produk tidak ditemukan');
    }
    return getProductById(id);
  } catch (error) {
    throw new Error('Gagal memperbarui produk');
  }
};

// Menghapus produk berdasarkan ID
export const del = async (id) => {
  try {
    const deletedRowCount = await Product.destroy({
      where: { ID: id },
    });
    if (deletedRowCount === 0) {
      throw new Error('Produk tidak ditemukan');
    }
    return true;
  } catch (error) {
    throw new Error('Gagal menghapus produk');
  }
};
