import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    caption: { type: String, maxlength: 2200 },
    image: {
      url: { type: String, required: true },
      public_id: { type: String, required: true }
    },
    music: {
      title: { type: String },
      artist: { type: String },
      url: { type: String },
      public_id: { type: String }
    },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    saves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Save' }],
    
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
