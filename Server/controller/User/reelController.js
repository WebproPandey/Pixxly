// controllers/reelController.js
import Reel from '../../models/reelModel.js';
import ReelDraft from '../../models/reelDraftModel.js';
import Like from '../../models/likeModel.js';
import Comment from '../../models/commentModel.js';
import Save from '../../models/saveModel.js';

export const uploadReelController = async (req, res) => {
  try {
    const {
      videoUrl,
      caption,
      musicTitle,
      musicArtist,
      musicUrl,
      mentionedUserIds,
      isDraft
    } = req.body;

    const userId = req.user._id;

    let video = {
      url: '',
      public_id: '',
      type: 'video'
    };

    // Handle uploaded file via Multer
    if (req.file) {
      video.url = req.file.path;
      video.public_id = req.file.filename;
    }
    // Handle URL
    else if (videoUrl) {
      video.url = videoUrl;
      video.public_id = 'url-upload'; // Dummy
    } else {
      return res.status(400).json({ message: 'No video provided' });
    }

    const baseData = {
      createdBy: userId,
      video,
      caption,
      music: {
        title: musicTitle,
        artist: musicArtist,
        url: musicUrl
      },
      mentionedUsers: mentionedUserIds || []
    };

    if (isDraft === 'true' || isDraft === true) {
      const draft = await ReelDraft.create(baseData);
      return res.status(201).json({ message: 'Reel saved to drafts', draft });
    } else {
      const reel = await Reel.create(baseData);
      return res.status(201).json({ message: 'Reel uploaded successfully', reel });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error uploading reel', error: error.message });
  }
};


export const getMyReelDrafts = async (req, res) => {
  try {
    const userId = req.user._id;
    const drafts = await ReelDraft.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json({ drafts });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drafts', error: error.message });
  }
};




export const likeReel = async (req, res) => {
  try {
    const userId = req.user._id;
    const { reelId } = req.params;

    const existing = await Like.findOne({ reel: reelId, likedBy: userId });
    if (existing) {
      await Like.deleteOne({ _id: existing._id });
      return res.status(200).json({ message: 'Reel unliked' });
    }

    const like = await Like.create({ reel: reelId, likedBy: userId });
    res.status(201).json({ message: 'Reel liked', like });
  } catch (error) {
    res.status(500).json({ message: 'Error liking reel', error: error.message });
  }
};

export const commentOnReel = async (req, res) => {
  try {
    const userId = req.user._id;
    const { reelId } = req.params;
    const { text } = req.body;

    const comment = await Comment.create({
      reel: reelId,
      commentedBy: userId,
      text
    });

    res.status(201).json({ message: 'Comment added to reel', comment });
  } catch (error) {
    res.status(500).json({ message: 'Error commenting', error: error.message });
  }
};

export const saveReel = async (req, res) => {
  try {
    const userId = req.user._id;
    const { reelId } = req.params;

    const existing = await Save.findOne({ reel: reelId, savedBy: userId });
    if (existing) {
      await Save.deleteOne({ _id: existing._id });
      return res.status(200).json({ message: 'Reel unsaved' });
    }

    const save = await Save.create({ reel: reelId, savedBy: userId });
    res.status(201).json({ message: 'Reel saved', save });
  } catch (error) {
    res.status(500).json({ message: 'Error saving reel', error: error.message });
  }
};

