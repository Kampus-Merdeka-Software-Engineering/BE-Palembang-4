import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config(); // Mengimpor konfigurasi dari .env

const jwtSecret = process.env.JWT_SECRET; // Mengambil kunci JWT dari variabel lingkungan

export const authMiddleware = async (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

export const comparePasswords = async (plainPassword, hashedPassword) => {
  const isPasswordValid = await bcrypt.compare(plainPassword, hashedPassword);
  return isPasswordValid;
};
