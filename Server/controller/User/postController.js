import Post from '../../models/postModel.js';
import User from '../../models/userModel.js';
import Save from '../../models/saveModel.js';

import { getMyPosts ,toggleLikeService ,toggleSavePost } from '../../services/user/postService.js';
import { postValidationSchema } from '../../utils/postvalidation.js';

export const createPost = async (req, res) => {
  try {
    const { error } = postValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    let imageData = null;
    let musicData = null;

    // 📷 Handle image upload via file
    if (req.files?.image?.length > 0) {
      imageData = req.files.image.map(file => ({
        url: file.path,
        public_id: file.filename,
      }))[0]; // You can also store multiple
    }

    // 🎵 Handle music upload via file
    if (req.file) {
      musicData = {
        title: req.body.musicTitle || '',
        artist: req.body.musicArtist || '',
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    // 🌐 Handle image via URL (for Postman/dev)
    if (!imageData && req.body.imageUrl) {
      imageData = {
        url: req.body.imageUrl,
        public_id: 'custom-url',
      };
    }

    // 🌐 Handle music via URL (optional for dev)
    if (!musicData && req.body.musicUrl) {
      musicData = {
        title: req.body.musicTitle || '',
        artist: req.body.musicArtist || '',
        url: req.body.musicUrl,
        public_id: 'custom-url',
      };
    }

    if (!imageData) {
      return res.status(400).json({ message: 'At least one image or image URL is required' });
    }
  const user = await User.findById(req.user._id).select('username');
    const post = await Post.create({
      caption: req.body.caption || '',
      image: imageData,
      music: musicData,
      postedBy:user._id,
    });

    res.status(201).json({ message: 'Post created successfully', post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// controllers/postController.js

// DELETE /api/posts/:postId
export const deletePostController = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.postedBy.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this post' });
    }

    await Post.findByIdAndDelete(postId);
    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting post', error: error.message });
  }
};

// PUT /api/posts/:postId
export const updateCaptionController = async (req, res) => {
  try {
    const { postId } = req.params;
    const { caption } = req.body;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.postedBy.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Unauthorized to update this post' });
    }

    post.caption = caption;
    await post.save();

    return res.status(200).json({ message: 'Post caption updated', post });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating caption', error: error.message });
  }
};



export const getMyPostsController = async (req, res) => {
  try {
    const userId = req.user._id;
    const posts = await getMyPosts(userId);
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
};




export const toggleLikeController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { postId } = req.params;

    const result = await toggleLikeService(postId, userId);

    if (result.liked) {
      // 🔔 Real-time notification emit
      const post = await Post.findById(postId).populate('postedBy._id', 'username');
      const postOwnerId = post.postedBy._id._id || post.postedBy._id;

      req.io.to(postOwnerId.toString()).emit('notification', {
        type: 'like',
        message: `${req.user.username} liked your post.`,
        postId,
        by: req.user.username,
      });
    }

    res.status(200).json({
      message: result.liked ? 'Post liked' : 'Post unliked',
      liked: result.liked,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error in like toggle', error: error.message });
  }
};


export const toggleSavePostController = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user._id;

    const result = await toggleSavePost(postId, userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Save/Unsave failed', error: error.message });
  }
};



export const getMySavedPosts = async (req, res) => {
  try {
    const userId = req.user._id;

    // Populate post details and postedBy user details
    const savedPosts = await Save.find({ savedBy: userId })
      .populate({
        path: 'post',
        populate: { path: 'postedBy', select: 'username avatar' }
      })
      .sort({ createdAt: -1 });

    res.status(200).json({ savedPosts });
  } catch (error) {
    console.error('❌ Error in getMySavedPosts:', error);
    res.status(500).json({ message: 'Failed to fetch saved posts' });
  }
};








