import mongoose from 'mongoose';

const termSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  definition: {
    type: String,
    required: true,
  },
  letter: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Term = mongoose.model('Term', termSchema);
export default Term;
