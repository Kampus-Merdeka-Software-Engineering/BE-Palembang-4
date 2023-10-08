import { DataTypes } from 'sequelize';
import sequelize from '../config/Databases.js';
import CheckOut from './CheckOut.js';

const PaymentMethod = sequelize.define('payment_methods', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  method: {
    type: DataTypes.STRING,
  },
  no_rek: {
    type: DataTypes.STRING,
  },
  nama: {
    type: DataTypes.STRING,
  },
});

export default PaymentMethod;
