import mongoose from 'mongoose';

const reelSchema = new mongoose.Schema(
  {
    video: {
      url: { type: String, required: true },
      public_id: { type: String, required: true }
    },
    caption: { type: String, maxlength: 2200 },
    music: {
      title: String,
      artist: String,
      url: String
    },
    mentionedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isDraft: { type: Boolean, default: false },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    saves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Save' }],
  },
  { timestamps: true }
);

export default mongoose.model('Reel', reelSchema);
