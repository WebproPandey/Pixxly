import {
  getUserProfileService,
  updateUserProfileService,
  getUserByUsernameService,
  followUserService,
  unfollowUserService,
  blockUserService,
  unblockUserService,
} from '../../services/user/userProfileService.js';

import cloudinary from '../../config/cloudinary.js';
import User from '../../models/userModel.js';

export const getMyProfile = async (req, res) => {
  const userId = req.user._id;
  const profile = await getUserProfileService(userId);
  res.status(200).json(profile);
};



export const updateMyProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bio, avatar: avatarUrl } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    let avatar = user.avatar;
    let avatarPublicId = user.avatarPublicId;

    // ✅ File upload via Multer + Cloudinary
    if (req.file) {
      // 🗑️ Delete old image if exists
      if (user.avatarPublicId) {
        await cloudinary.uploader.destroy(user.avatarPublicId);
      }

      // Save new file info
      avatar = req.file.path; // Cloudinary image URL
      avatarPublicId = req.file.filename; // public_id from multer-storage-cloudinary
    }

    // ✅ Direct image URL (optional)
    else if (avatarUrl) {
      if (user.avatarPublicId) {
        await cloudinary.uploader.destroy(user.avatarPublicId);
      }

      avatar = avatarUrl;
      avatarPublicId = ''; // No Cloudinary image, so clear public_id
    }

    const updatedUser = await updateUserProfileService(userId, {
      bio,
      avatar,
      avatarPublicId,
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ message: 'Profile update failed' });
  }
};


export const getUserByUsername = async (req, res) => {
  try {
    const user = await getUserByUsernameService(req.params.username);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const followUser = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const targetUsername = req.params.username;

    const result = await followUserService(currentUserId, targetUsername);
    res.status(200).json({ message: `You followed ${targetUsername}`, result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const targetUsername = req.params.username;

    const result = await unfollowUserService(currentUserId, targetUsername);
    res.status(200).json({ message: `You unfollowed ${targetUsername}`, result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const blockUser = async (req, res) => {
  try {
    const result = await blockUserService(req.user._id, req.params.username);
    res.status(200).json({ message: `You blocked ${req.params.username}`, result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const unblockUser = async (req, res) => {
  try {
    const result = await unblockUserService(req.user._id, req.params.username);
    res.status(200).json({ message: `You unblocked ${req.params.username}`, result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
