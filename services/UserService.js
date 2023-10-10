import { Users } from '../models/index.js';

import uploadProfile from '../middleware/UserUpload.js';

export const registerUser = async (req, res) => {
  try {
    uploadProfile.single('profilePicture')(req, res, async (err) => {
      if (err) {
        console.error('Error uploading profile picture:', err);
        return res.status(500).json({ message: 'Error uploading profile picture' });
      }      
      const profilePictureUrl = req.file ? `upload/profile/${req.file.filename}` : null;
      const userData = {
        nama: req.body.nama,
        username: req.body.username,
        telephone_number: req.body.telephone_number,
        email: req.body.email,
        password: req.body.Password,
      };
      await UsersService.createUserWithProfilePicture(userData, profilePictureUrl);
      res.status(201).json({ message: 'User registered successfully' });
    });

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getUserById = async (id) => {
  const user = await Users.findByPk(id);
  console.log('Retrieved user by ID:', id);
  return user;
};

export const updateUser = async (id, userData) => {
  const [updatedRowsCount] = await Users.update(userData, { where: { Username: id } });
  if (updatedRowsCount === 0) {
    console.log('User not found for updating:', id);
    return null;
  }
  console.log('User updated:', id);
  return getUserById(id);
};

export const deleteUser = async (id) => {
  const deletedRowCount = await Users.destroy({ where: { Username: id } });
  if (deletedRowCount === 0) {
    console.log('User not found for deletion:', id);
    return false;
  }
  console.log('User deleted:', id);
  return true;
};
