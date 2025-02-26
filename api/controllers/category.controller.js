import Category from '../models/category.model.js';
import { errorHandler } from '../utils/error.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the category.
 *         name:
 *           type: string
 *           description: The name of the category.
 *       required:
 *         - name
 */
export const createCategory = async (req, res, next) => {

  try {
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

export const getPostsByCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const posts = await Post.find({ category: categoryId });
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name },
      { new: true }
    );
    if (!updatedCategory) {
      return next(errorHandler(404, 'Category not found'));
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return next(errorHandler(404, 'Category not found'));
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    next(error);
  }
};
