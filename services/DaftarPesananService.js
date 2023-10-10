import { DaftarPesanan } from '../models/index.js';

export const createDaftarPesanan = async (daftarPesananData) => {
  const daftarPesanan = await DaftarPesanan.create(daftarPesananData);
  console.log('DaftarPesanan created for user:', daftarPesanan.User_ID);
  return daftarPesanan;
};

export const getAllDaftarPesananByUser = async (User_ID) => {
  const daftarPesanan = await DaftarPesanan.findAll({ where: { User_ID: User_ID } });
  console.log('Retrieved DaftarPesanan for user:', User_ID);
  return daftarPesanan;
};

export const updateDaftarPesanan = async (id, daftarPesananData) => {
  const [updated] = await DaftarPesanan.update(daftarPesananData, { where: { id: id } });
  if (updated) {
    const updatedDaftarPesanan = await DaftarPesanan.findOne({ where: { id: id } });
    console.log('DaftarPesanan updated for user:', updatedDaftarPesanan.User_ID);
    return updatedDaftarPesanan;
  }
  return null;
};

export const deleteDaftarPesanan = async (id) => {
  const deleted = await DaftarPesanan.destroy({ where: { id: id } });
  if (deleted) {
    console.log('DaftarPesanan deleted:', id);
    return true;
  }
  return false;
};
