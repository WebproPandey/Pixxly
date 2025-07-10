// server/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpire: { type: Date },
    avatar: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isPrivate: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    googleId: { type: String },
    isVerified: { type: Boolean, default: false },
    bio: { type: String, default: '' },
    avatar: { type: String, default: '' },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Follow' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Follow' }],
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Block' }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
