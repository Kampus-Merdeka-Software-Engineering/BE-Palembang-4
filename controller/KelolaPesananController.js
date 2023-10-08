import { KelolaPesananService } from '../services/index.js';

export const createKelolaPesanan = async (req, res) => {
  try {
    const kelolaPesanan = await KelolaPesananService.createKelolaPesanan(req.body);
    console.log('KelolaPesanan created for admin:', kelolaPesanan.id_admin);
    res.status(201).json(kelolaPesanan);
  } catch (error) {
    console.error('Error creating KelolaPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllKelolaPesanan = async (req, res) => {
  try {
    const kelolaPesanan = await KelolaPesananService.getAllKelolaPesanan();
    console.log('Retrieved all KelolaPesanan');
    res.json(kelolaPesanan);
  } catch (error) {
    console.error('Error retrieving KelolaPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateKelolaPesanan = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedKelolaPesanan = await KelolaPesananService.updateKelolaPesanan(id, req.body);
    if (!updatedKelolaPesanan) {
      console.error('KelolaPesanan not found:', id);
      return res.status(404).json({ message: 'KelolaPesanan not found' });
    }
    console.log('KelolaPesanan updated for admin:', updatedKelolaPesanan.id_admin);
    res.json({ message: 'KelolaPesanan updated', kelolaPesanan: updatedKelolaPesanan });
  } catch (error) {
    console.error('Error updating KelolaPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteKelolaPesanan = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await KelolaPesananService.deleteKelolaPesanan(id);
    if (deleted) {
      console.log('KelolaPesanan deleted:', id);
      return res.json({ message: 'KelolaPesanan deleted' });
    }
    console.error('KelolaPesanan not found:', id);
    return res.status(404).json({ message: 'KelolaPesanan not found' });
  } catch (error) {
    console.error('Error deleting KelolaPesanan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
