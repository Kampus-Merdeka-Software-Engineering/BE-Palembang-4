import { UserService } from '../services/index.js';

export const createUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    console.log('User created:', user.username);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    console.log('Retrieved all users');
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getUserByUsername = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await UserService.getUserByUsername(username);
    if (!user) {
      console.error('User not found:', username);
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('Retrieved user:', user.username);
    res.json(user);
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateUser = async (req, res) => {
  const { username } = req.params;
  try {
    const updatedUser = await UserService.updateUser(username, req.body);
    if (!updatedUser) {
      console.error('User not found:', username);
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('User updated:', updatedUser.username);
    res.json({ message: 'User updated', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteUser = async (req, res) => {
  const { username } = req.params;
  try {
    const deleted = await UserService.deleteUser(username);
    if (deleted) {
      console.log('User deleted:', username);
      return res.json({ message: 'User deleted' });
    }
    console.error('User not found:', username);
    return res.status(404).json({ message: 'User not found' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
