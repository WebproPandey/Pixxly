import Story from '../../models/storyModel.js';

export const uploadStoryController = async (req, res) => {
  try {
    const { mediaUrl, caption, musicTitle, musicArtist, musicUrl } = req.body;
    const userId = req.user._id;

    let media = {
      url: '',
      public_id: '',
      type: ''
    };

    // If file uploaded (using multer)
    if (req.file) {
      media.url = req.file.path;
      media.public_id = req.file.filename;
      media.type = req.file.mimetype.startsWith('video') ? 'video' : 'image';
    } 
    // If URL provided instead
    else if (mediaUrl) {
      media.url = mediaUrl;
      media.type = mediaUrl.match(/\.(mp4|mov)$/) ? 'video' : 'image';
      media.public_id = `url-${Date.now()}`
    } 
    else {
      return res.status(400).json({ message: 'No media provided' });
    }

    const story = await Story.create({
      media,
      caption,
      music: {
        title: musicTitle,
        artist: musicArtist,
        url: musicUrl
      },
      user: userId,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
    });

    res.status(201).json({ message: 'Story uploaded successfully', story });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading story', error: error.message });
  }
};
