import multer from 'multer';

// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/profile'); // Simpan gambar di folder 'upload/profile'
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now(); // Timestamp untuk menghindari nama berkas yang sama
    const uniqueSuffix = `${timestamp}-${Math.round(Math.random() * 1E9)}`;
    const fileExtension = file.originalname.split('.').pop();
    const fileName = `${uniqueSuffix}.${fileExtension}`;
    cb(null, fileName);
  },
});

const uploadProfile = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Batasan ukuran berkas (5 MB)
  },
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|gif/; // Jenis berkas yang diizinkan (sesuaikan dengan kebutuhan Anda)
    const mimeType = allowedFileTypes.test(file.mimetype);
    const extName = allowedFileTypes.test(file.originalname.toLowerCase());
    if (mimeType && extName) {
      return cb(null, true);
    }
    cb(new Error('Invalid file type. Only JPEG, JPG, PNG, or GIF are allowed.'));
  },
});

export default uploadProfile;
