import Term from '../models/term.model.js';
import { errorHandler } from '../utils/error.js';

export const createTerm = async (req, res, next) => {
  const { name, definition } = req.body;
  const letter = name.charAt(0).toUpperCase();
  try {
    const term = await Term.create({ name, definition, letter });
    res.status(201).json(term);
  } catch (error) {
    next(error);
  }
};

export const getTermsByLetter = async (req, res, next) => {
  const { letter } = req.params;
  try {
    const terms = await Term.find({ letter });
    res.status(200).json(terms);
  } catch (error) {
    next(error);
  }
};
