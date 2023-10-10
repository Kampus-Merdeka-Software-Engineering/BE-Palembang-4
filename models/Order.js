import { DataTypes } from 'sequelize';
import sequelize from '../config/Databases.js';

const Order = sequelize.define('Order', {
  id_order: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_admin: {
    type: DataTypes.STRING,
  },
  method: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
});

export default Order;
