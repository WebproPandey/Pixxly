import User from '../../models/userModel.js';
import Block from '../../models/blockModel.js';

export const getUserProfileService = async (userId) => {
  const user = await User.findById(userId).select('-password -verifyToken -resetPasswordToken');
  if (!user) throw new Error('User not found');
  return user;
};



export const updateUserProfileService = async (userId, updates) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  user.bio = updates.bio || user.bio;
  user.avatar = updates.avatar || user.avatar;
  user.avatarPublicId = updates.avatarPublicId || user.avatarPublicId;

  await user.save();
  return user;
};

export const getUserByUsernameService = async (username) => {
  const user = await User.findOne({ username: username.toLowerCase() })
    .select('username bio avatar followers following isPrivate');

  if (!user) throw new Error('User not found');

  return user;
};

export const followUserService = async (currentUserId, usernameToFollow) => {
  const targetUser = await User.findOne({ username: usernameToFollow.toLowerCase() });
  if (!targetUser) throw new Error('User not found');
  if (targetUser._id.equals(currentUserId)) throw new Error("You can't follow yourself");

  const currentUser = await User.findById(currentUserId);

  // Check if already following
  if (targetUser.followers.includes(currentUserId)) {
    throw new Error('Already following this user');
  }

  targetUser.followers.push(currentUserId);
  currentUser.following.push(targetUser._id);

  await targetUser.save();
  await currentUser.save();

  return {
    following: currentUser.following,
    followers: targetUser.followers,
  };
};

export const unfollowUserService = async (currentUserId, usernameToUnfollow) => {
  const targetUser = await User.findOne({ username: usernameToUnfollow.toLowerCase() });
  if (!targetUser) throw new Error('User not found');
  if (targetUser._id.equals(currentUserId)) throw new Error("You can't unfollow yourself");

  const currentUser = await User.findById(currentUserId);

  // Check if not following
  if (!targetUser.followers.includes(currentUserId)) {
    throw new Error('You are not following this user');
  }

  // Remove from followers & following
  targetUser.followers = targetUser.followers.filter(id => id.toString() !== currentUserId.toString());
  currentUser.following = currentUser.following.filter(id => id.toString() !== targetUser._id.toString());

  await targetUser.save();
  await currentUser.save();

  return {
    following: currentUser.following,
    followers: targetUser.followers,
  };
};

export const blockUserService = async (blockerId, blockedUsername) => {
  const blockedUser = await User.findOne({ username: blockedUsername.toLowerCase() });
  if (!blockedUser) throw new Error('User not found');
  if (blockedUser._id.equals(blockerId)) throw new Error("You can't block yourself");

  const alreadyBlocked = await Block.findOne({
    blocker: blockerId,
    blocked: blockedUser._id,
  });

  if (alreadyBlocked) throw new Error('User is already blocked');

  const newBlock = await Block.create({
    blocker: blockerId,
    blocked: blockedUser._id,
  });

  return newBlock;
};

export const unblockUserService = async (blockerId, blockedUsername) => {
  const blockedUser = await User.findOne({ username: blockedUsername.toLowerCase() });
  if (!blockedUser) throw new Error('User not found');

  const existingBlock = await Block.findOne({
    blocker: blockerId,
    blocked: blockedUser._id,
  });

  if (!existingBlock) throw new Error('User is not blocked');

  await Block.findByIdAndDelete(existingBlock._id);

  return { success: true };
};
