import { CategoryService } from '../services/index.js';

export const createCategory = async (req, res) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    console.log('Category created:', category.category_name);
    res.status(201).json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    console.log('Retrieved all categories');
    res.json(categories);
  } catch (error) {
    console.error('Error retrieving categories:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryService.getCategoryById(id);
    if (!category) {
      console.error('Category not found:', id);
      return res.status(404).json({ message: 'Category not found' });
    }
    console.log('Retrieved category:', category.category_name);
    res.json(category);
  } catch (error) {
    console.error('Error retrieving category:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCategory = await CategoryService.updateCategory(id, req.body);
    if (!updatedCategory) {
      console.error('Category not found:', id);
      return res.status(404).json({ message: 'Category not found' });
    }
    console.log('Category updated:', updatedCategory.category_name);
    res.json({ message: 'Category updated', category: updatedCategory });
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await CategoryService.deleteCategory(id);
    if (deleted) {
      console.log('Category deleted:', id);
      return res.json({ message: 'Category deleted' });
    }
    console.error('Category not found:', id);
    return res.status(404).json({ message: 'Category not found' });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
