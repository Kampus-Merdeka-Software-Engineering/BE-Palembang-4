import { DataTypes } from 'sequelize';
import sequelize from '../config/Databases.js';

const Category = sequelize.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
  },
});

export default Category ;