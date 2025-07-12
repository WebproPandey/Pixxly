import express from 'express';
import { createPost, deletePostController,updateCaptionController,getMyPostsController ,toggleLikeController ,toggleSavePostController ,getMySavedPosts} from '../../controller/User/postController.js';
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

router.delete('/:postId', protect, deletePostController);

// UPDATE caption only
router.put('/:postId', protect, updateCaptionController);


router.get('/posts/my-posts', protect, getMyPostsController);

router.post('/:postId/like', protect, toggleLikeController);

router.post('/save/:postId', protect, toggleSavePostController);

// not completed this routed
router.get('/saved', protect, getMySavedPosts);


export default router;
