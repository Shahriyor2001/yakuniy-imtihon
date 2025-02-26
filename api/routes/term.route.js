import express from 'express';
import { createTerm, getTermsByLetter } from '../controllers/term.controller.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Term:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         definition:
 *           type: string
 *         letter:
 *           type: string
 *       required:
 *         - name
 *         - definition
 *         - letter
 */


/**
 * @swagger
 * tags:
 *   name: Terms
 *   description: Term management
 */

/**
 * @swagger
 * /api/term/create:
 *   post:
 *     tags: [Terms]
 *     summary: Create a new term
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               definition:
 *                 type: string
 *             required:
 *               - name
 *               - definition
 *     responses:
 *       201:
 *         description: Term created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Term'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/term/letter/{letter}:
 *   get:
 *     tags: [Terms]
 *     summary: Get terms by letter
 *     parameters:
 *       - in: path
 *         name: letter
 *         schema:
 *           type: string
 *         required: true
 *         description: The letter to filter terms by
 *     responses:
 *       200:
 *         description: List of terms starting with the specified letter
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Term'
 *       500:
 *         description: Internal server error
 */

router.post('/create', createTerm);
router.get('/letter/:letter', getTermsByLetter);

export default router;
