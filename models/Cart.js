import { DataTypes } from 'sequelize';
import sequelize from '../config/Databases.js';
import Users from './Users.js';
import Product from './Product.js';

const Cart = sequelize.define('carts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  product_name: {
    type: DataTypes.STRING,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  choice: {
    type: DataTypes.BOOLEAN,
  },
});

export default Cart;
