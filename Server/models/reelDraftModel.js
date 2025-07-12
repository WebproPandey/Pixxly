// models/reelDraftModel.js
import mongoose from 'mongoose';

const reelDraftSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    video: {
      url: { type: String, required: true },
      public_id: { type: String, default: '' },
      type: { type: String, enum: ['video'], default: 'video' },
    },

    caption: { type: String },
    music: {
      title: { type: String },
      artist: { type: String },
      url: { type: String }
    },

    mentionedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

export default mongoose.model('ReelDraft', reelDraftSchema);
