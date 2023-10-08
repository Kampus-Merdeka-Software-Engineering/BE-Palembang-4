const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/image/');
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    cb(null, `${Date.now()}${extname}`);
  },
});

const uploadProductImage = multer({ storage: storage });

module.exports = uploadProductImage;
