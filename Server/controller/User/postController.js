import Post from '../../models/postModel.js';
import User from '../../models/userModel.js';
import { getMyPosts ,toggleLikeService ,toggleSavePost ,getSavedPosts} from '../../services/user/postService.js';
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
      postedBy: {
      _id: user._id,
      username: user.username
     }
    });

    res.status(201).json({ message: 'Post created successfully', post });
  } catch (err) {
    res.status(500).json({ message: err.message });
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



export const getSavedPostsController = async (req, res) => {
  try {
    const userId = req.user._id;
    const posts = await getSavedPosts(userId);
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching saved posts', error: error.message });
  }
};

