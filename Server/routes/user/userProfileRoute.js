import express from 'express';
import {
  getMyProfile,
  updateMyProfile,
  getUserByUsername,
  followUser,
  unfollowUser,
  blockUser,
  unblockUser
} from '../../controller/User/userProfileController.js';
import {protect} from '../../middleware/authMiddleware.js';
import upload from '../../middleware/upload/uploadMiddleware.js';

const router = express.Router();

// Own Profile
router.get('/me', protect, getMyProfile);
router.put('/me', protect, upload.single('avatar'), updateMyProfile);

// View Other User Profile
router.get('/:username', protect, getUserByUsername);

router.post('/follow/:username', protect, followUser);
router.post('/unfollow/:username', protect, unfollowUser);
router.post('/block/:username', protect, blockUser);
router.post('/unblock/:username', protect, unblockUser);

export default router;
