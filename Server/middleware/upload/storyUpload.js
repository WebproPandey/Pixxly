// middleware/storyUpload.js
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../../config/cloudinary.js';

const storyStorage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let folder = 'pixxly/stories';
    let resource_type = file.mimetype.startsWith('video') ? 'video' : 'image';
    
    return {
      folder,
      resource_type,
      allowed_formats: ['jpg', 'jpeg', 'png', 'mp4', 'mov'],
    };
  }
});

const uploadStory = multer({ storage: storyStorage });

export default uploadStory;
