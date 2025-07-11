import express from 'express';
import { createPost, getMyPostsController ,toggleLikeController ,toggleSavePostController ,getSavedPostsController} from '../../controller/User/postController.js';
import uploadImage from '../../middleware/upload/uploadImage.js';
import uploadMusic from '../../middleware/upload/uploadMusic.js';
import { protect } from '../../middleware/authMiddleware.js';

const router = express.Router();

// For image + music
router.post('/post/create-post',protect,
  uploadImage.fields([{ name: 'image', maxCount: 4 }]),
  uploadMusic.single('music'),
  createPost
);
router.get('/posts/my-posts', protect, getMyPostsController);

router.post('/:postId/like', protect, toggleLikeController);

router.post('/save/:postId', protect, toggleSavePostController);
router.get('/saved', protect, getSavedPostsController);

export default router;
