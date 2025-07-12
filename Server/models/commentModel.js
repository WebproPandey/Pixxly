import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: false},
    reel: { type: mongoose.Schema.Types.ObjectId, ref: 'Reel',required: false },
    commentedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Comment', commentSchema);
