import { KelolaPelanggan } from '../models/index.js';

export const createKelolaPelanggan = async (kelolaPelangganData) => {
  try {
    const kelolaPelanggan = await KelolaPelanggan.create(kelolaPelangganData);
    console.log('KelolaPelanggan created:', kelolaPelanggan.Nama);
    return kelolaPelanggan;
  } catch (error) {
    console.error('Error creating KelolaPelanggan:', error);
    throw error;
  }
};

export const getAllKelolaPelanggan = async () => {
  try {
    const kelolaPelanggan = await KelolaPelanggan.findAll();
    console.log('Retrieved all KelolaPelanggan');
    return kelolaPelanggan;
  } catch (error) {
    console.error('Error retrieving KelolaPelanggan:', error);
    throw error;
  }
};

export const updateKelolaPelanggan = async (id, kelolaPelangganData) => {
  try {
    const [updated] = await KelolaPelanggan.update(kelolaPelangganData, { where: { id } });
    if (updated) {
      const updatedKelolaPelanggan = await KelolaPelanggan.findByPk(id);
      console.log('KelolaPelanggan updated:', updatedKelolaPelanggan.Nama);
      return updatedKelolaPelanggan;
    }
    return null;
  } catch (error) {
    console.error('Error updating KelolaPelanggan:', error);
    throw error;
  }
};

export const deleteKelolaPelanggan = async (id) => {
  try {
    const deleted = await KelolaPelanggan.destroy({ where: { id } });
    return deleted;
  } catch (error) {
    console.error('Error deleting KelolaPelanggan:', error);
    throw error;
  }
};