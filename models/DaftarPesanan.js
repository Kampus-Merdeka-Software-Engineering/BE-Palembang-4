import { DataTypes } from 'sequelize';
import sequelize from '../config/Databases.js';
import Users from './Users.js';
import PaymentMethod from './PaymentMethod.js';
import KelolaPesanan from './KelolaPesanan.js';

const DaftarPesanan = sequelize.define('DaftarPesanan', {
  no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  shipping_address: {
    type: DataTypes.TEXT,
  },
  ordered_products: {
    type: DataTypes.STRING,
  },
  payment_method_id: {
    type: DataTypes.INTEGER,
  },
});

export default DaftarPesanan;
