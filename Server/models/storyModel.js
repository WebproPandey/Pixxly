// models/storyModel.js
import mongoose from 'mongoose';

const storySchema = new mongoose.Schema(
  {
    media: {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
      type: { type: String, enum: ['image', 'video'], required: true }
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

storySchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model('Story', storySchema);
