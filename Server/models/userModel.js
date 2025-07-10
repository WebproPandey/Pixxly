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
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
