// routes/storyRoutes.js
import express from 'express';
import  uploadStory from '../../middleware/upload/storyUpload.js'
import  uploadVideo from '../../middleware/upload/uploadVideo.js'
import  {protect} from '../../middleware/authMiddleware.js'
import { uploadStoryController } from '../../controller/User/storyController.js';
import { getMyReelDrafts, uploadReelController ,likeReel,commentOnReel,saveReel } from '../../controller/User/reelController.js';

const router = express.Router();

router.post('/stories/upload', protect, uploadStory.single('media'), uploadStoryController);
router.post('/reels/upload',protect,uploadVideo.single('video'), uploadReelController);



router.get('/reels/drafts', protect, getMyReelDrafts);

router.post('/reel/like/:reelId', protect, likeReel);
router.post('/reel/comment/:reelId', protect, commentOnReel);
router.post('/reel/save/:reelId', protect, saveReel);

export default router;
