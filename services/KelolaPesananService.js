import { KelolaPelanggan } from '../models/index.js';

export const createKelolaPelanggan = async (kelolaPelangganData) => {
  const kelolaPelanggan = await KelolaPelanggan.create(kelolaPelangganData);
  console.log('Kelola Pelanggan created:', kelolaPelanggan.Nama);
  return kelolaPelanggan;
};

export const getAllKelolaPelanggan = async () => {
  const kelolaPelanggan = await KelolaPelanggan.findAll();
  console.log('Retrieved all KelolaPelanggan');
  return kelolaPelanggan;
};

export const updateKelolaPelanggan = async (id, kelolaPelangganData) => {
  const [updated] = await KelolaPelanggan.update(kelolaPelangganData, { where: { id: id } });
  if (updated) {
    const updatedKelolaPelanggan = await KelolaPelanggan.findOne({ where: { id: id } });
    console.log('KelolaPelanggan updated:', updatedKelolaPelanggan.Nama);
    return updatedKelolaPelanggan;
  }
  return null;
};

export const deleteKelolaPelanggan = async (id) => {
  const deleted = await KelolaPelanggan.destroy({ where: { id: id } });
  if (deleted) {
    console.log('KelolaPelanggan deleted:', id);
    return true;
  }
  return false;
};
