import { KelolaPelangganService } from '../services/index.js';

export const createKelolaPelanggan = async (req, res) => {
  try {
    const kelolaPelanggan = await KelolaPelangganService.createKelolaPelanggan(req.body);
    console.log('KelolaPelanggan created:', kelolaPelanggan.Nama);
    res.status(201).json(kelolaPelanggan);
  } catch (error) {
    console.error('Error creating KelolaPelanggan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllKelolaPelanggan = async (req, res) => {
  try {
    const kelolaPelanggan = await KelolaPelangganService.getAllKelolaPelanggan();
    console.log('Retrieved all KelolaPelanggan');
    res.json(kelolaPelanggan);
  } catch (error) {
    console.error('Error retrieving KelolaPelanggan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateKelolaPelanggan = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedKelolaPelanggan = await KelolaPelangganService.updateKelolaPelanggan(id, req.body);
    if (!updatedKelolaPelanggan) {
      console.error('KelolaPelanggan not found:', id);
      return res.status(404).json({ message: 'KelolaPelanggan not found' });
    }
    console.log('KelolaPelanggan updated:', updatedKelolaPelanggan.Nama);
    res.json({ message: 'KelolaPelanggan updated', kelolaPelanggan: updatedKelolaPelanggan });
  } catch (error) {
    console.error('Error updating KelolaPelanggan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteKelolaPelanggan = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await KelolaPelangganService.deleteKelolaPelanggan(id);
    if (deleted) {
      console.log('KelolaPelanggan deleted:', id);
      return res.json({ message: 'KelolaPelanggan deleted' });
    }
    console.error('KelolaPelanggan not found:', id);
    return res.status(404).json({ message: 'KelolaPelanggan not found' });
  } catch (error) {
    console.error('Error deleting KelolaPelanggan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
