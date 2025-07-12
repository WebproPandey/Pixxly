import Post from '../../models/postModel.js';
import Like from '../../models/likeModel.js';
import Save from '../../models/saveModel.js';
import mongoose from 'mongoose';



export const getMyPosts = async (userId) => {
  const posts = await Post.find({ 'postedBy._id': userId }).sort({ createdAt: -1 });
  return posts;
};


export const toggleLikeService = async (postId, userId) => {
  const existingLike = await Like.findOne({ post: postId, likedBy: userId });

  if (existingLike) {
    // Unlike
    await Like.findByIdAndDelete(existingLike._id);
    await Post.findByIdAndUpdate(postId, { $pull: { likes: existingLike._id } });
    return { liked: false };
  } else {
    // Like
    const newLike = await Like.create({ post: postId, likedBy: userId });
    await Post.findByIdAndUpdate(postId, { $addToSet: { likes: newLike._id } });
    return { liked: true, likeId: newLike._id };
  }
};



export const toggleSavePost = async (postId, userId) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error('Post not found');

  const existingSave = await Save.findOne({ post: postId, savedBy: userId });

  if (existingSave) {
    await existingSave.deleteOne();
    post.saves.pull(existingSave._id);
    await post.save();
    return { message: 'Post unsaved' };
  } else {
    const newSave = await Save.create({ post: postId, savedBy: userId });
    post.saves.push(newSave._id);
    await post.save();
    return { message: 'Post saved' };
  }
};


