// server/services/authService.js
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import User from '../../models/userModel.js';
import generateResetToken from '../../utils/generateResetToken.js';
import sendEmail from '../../utils/sendEmail.js';

export const createUser = async ({ username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ username, email, password: hashedPassword });
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const validatePassword = async (input, hashed) => {
  return await bcrypt.compare(input, hashed);
};
export const forgotPasswordService = async (email, req) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('No user found with this email');

  const { resetToken, hashedToken } = generateResetToken();

  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 minutes
  await user.save();

  const resetUrl = `${req.protocol}://${req.get('host')}/api/user/reset-password/${resetToken}`;

  const html = `
    <h3>Password Reset</h3>
    <p>Click the link below to reset your password:</p>
    <Link href="${resetUrl}">${resetUrl}</Link>
    <p>This link expires in 15 minutes.</p>
  `;

  await sendEmail({
    to: user.email,
    subject: 'Password Reset Request',
    html,
  });

  return { message: 'Reset link sent to your email' };
};

export const resetPasswordService = async (token, newPassword) => {
  const hashedToken = Crypto.createHash('sha256').update(token).digest('hex');

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) throw new Error('Invalid or expired token');

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  return { message: 'Password reset successful. You can now log in.' };
};
