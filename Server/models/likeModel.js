import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: false },
    reel: { type: mongoose.Schema.Types.ObjectId, ref: 'Reel',required: false },
    likedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Like', likeSchema);
