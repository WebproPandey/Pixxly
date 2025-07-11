import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../../config/cloudinary.js';

const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'pixxly/videos',
    resource_type: 'video',
    allowed_formats: ['mp4', 'mov', 'avi', 'mkv'],
  },
});

const uploadVideo = multer({ storage: videoStorage });
export default uploadVideo;
