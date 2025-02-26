import Tag from '../models/tag.model.js';
import { errorHandler } from '../utils/error.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     Tag:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the tag.
 *         name:
 *           type: string
 *           description: The name of the tag.
 *       required:
 *         - name
 */
export const createTag = async (req, res, next) => {

  try {
    const tag = await Tag.create({ name });
    res.status(201).json(tag);
  } catch (error) {
    next(error);
  }
};

export const getAllTags = async (req, res, next) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

export const getPostsByTag = async (req, res, next) => {
  const { tagId } = req.params;
  try {
    const tag = await Tag.findById(tagId).populate('posts');
    if (!tag) {
      return next(errorHandler(404, 'Tag not found'));
    }
    res.status(200).json(tag.posts);
  } catch (error) {
    next(error);
  }
};
