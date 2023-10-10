import { Category } from '../models/index.js';

export const createCategory = async (categoryData) => {
  const newCategory = await Category.create(categoryData);
  console.log('Category created:', newCategory.Category_Name);
  return newCategory;
};

export const getAllCategories = async () => {
  const categories = await Category.findAll();
  console.log('Retrieved all categories');
  return categories;
};

export const updateCategory = async (id, categoryData) => {
  const [updatedRowsCount] = await Category.update(categoryData, { where: { ID: id } });
  if (updatedRowsCount === 0) {
    console.log('Category not found for updating:', id);
    return null;
  }
  console.log('Category updated:', id);
  return getCategoryById(id);
};

export const deleteCategory = async (id) => {
  const deletedRowCount = await Category.destroy({ where: { ID: id } });
  if (deletedRowCount === 0) {
    console.log('Category not found for deletion:', id);
    return false;
  }
  console.log('Category deleted:', id);
  return true;
};

export const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  console.log('Retrieved category by ID:', id);
  return category;
};
