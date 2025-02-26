import express from 'express';
import { createTag, getAllTags, getPostsByTag } from '../controllers/tag.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tags
 *   description: Tag management
 */

/**
 * @swagger
 * /api/tag/create:
 *   post:
 *     tags: [Tags]
 *     summary: Create a new tag
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Tag created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tag'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tag/all:
 *   get:
 *     tags: [Tags]
 *     summary: Get all tags
 *     responses:
 *       200:
 *         description: List of all tags
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tag'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tag/{tagId}/posts:
 *   get:
 *     tags: [Tags]
 *     summary: Get posts by tag
 *     parameters:
 *       - in: path
 *         name: tagId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the tag
 *     responses:
 *       200:
 *         description: List of posts in the tag
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       404:
 *         description: Tag not found
 *       500:
 *         description: Internal server error
 */

router.post('/create', createTag);
router.get('/all', getAllTags);
router.get('/:tagId/posts', getPostsByTag);

export default router;
