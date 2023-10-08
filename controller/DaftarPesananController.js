import { DaftarPesananService } from '../services/index.js';

export const createDaftarPesanan = async (req, res) => {
  try {
    const daftarPesanan = await DaftarPesananService.createDaftarPesanan(req.body);
    console.log('DaftarPesanan created for user:', daftarPesanan.User_ID);
    res.status(201).json(daftarPesanan);
  } catch (error) {
    console.error('Error creating DaftarPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllDaftarPesananByUser = async (req, res) => {
  const { User_ID } = req.params;
  try {
    const daftarPesanan = await DaftarPesananService.getAllDaftarPesananByUser(User_ID);
    console.log('Retrieved DaftarPesanan for user:', User_ID);
    res.json(daftarPesanan);
  } catch (error) {
    console.error('Error retrieving DaftarPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateDaftarPesanan = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDaftarPesanan = await DaftarPesananService.updateDaftarPesanan(id, req.body);
    if (!updatedDaftarPesanan) {
      console.error('DaftarPesanan not found:', id);
      return res.status(404).json({ message: 'DaftarPesanan not found' });
    }
    console.log('DaftarPesanan updated for user:', updatedDaftarPesanan.User_ID);
    res.json({ message: 'DaftarPesanan updated', daftarPesanan: updatedDaftarPesanan });
  } catch (error) {
    console.error('Error updating DaftarPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteDaftarPesanan = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await DaftarPesananService.deleteDaftarPesanan(id);
    if (deleted) {
      console.log('DaftarPesanan deleted:', id);
      return res.json({ message: 'DaftarPesanan deleted' });
    }
    console.error('DaftarPesanan not found:', id);
    return res.status(404).json({ message: 'DaftarPesanan not found' });
  } catch (error) {
    console.error('Error deleting DaftarPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
