import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../../config/cloudinary.js';

const musicStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'pixxly/music',
    resource_type: 'video', // for audio use `video` in cloudinary
    allowed_formats: ['mp3', 'wav', 'aac'],
  },
});

const uploadMusic = multer({ storage: musicStorage });
export default uploadMusic;
