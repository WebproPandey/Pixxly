import mongoose from 'mongoose';

const saveSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post',required: false },
    reel: { type: mongoose.Schema.Types.ObjectId, ref: 'Reel',required: false },
    savedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Save', saveSchema);
