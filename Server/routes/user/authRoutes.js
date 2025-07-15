import express from 'express';
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  deactivateAccount,
  deleteAccount,
  togglePrivacy
} from '../../controller/User/authController.js';
import passport from 'passport';
import { protect } from '../../middleware/authMiddleware.js';
import generateToken from '../../utils/generateToken.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/google',passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    const token = generateToken(req.user);

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      res.redirect(`${process.env.FRONTEND_URL}/home`);
  }
);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/deactivate', protect, deactivateAccount);
router.delete('/delete', protect, deleteAccount);
router.patch('/toggle-privacy', protect, togglePrivacy);

export default router;