import {
  getUserProfileService,
  getUserByUsernameService,
  followUserService,
  unfollowUserService,
  blockUserService,
  unblockUserService,
} from '../../services/user/userProfileService.js';

export const getMyProfile = async (req, res) => {
  const userId = req.user._id;
  const profile = await getUserProfileService(userId);
  res.status(200).json(profile);
};

export const updateMyProfile = async (req, res) => {
  const userId = req.user._id;
  const { bio, avatar } = req.body;
  const updated = await updateUserProfileService(userId, { bio, avatar });
  res.status(200).json(updated);
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
