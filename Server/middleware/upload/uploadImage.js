import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../../config/cloudinary.js';

const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'pixxly/images',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    resource_type: 'image',
  },
});

const uploadImage = multer({ storage: imageStorage });
export default uploadImage;
