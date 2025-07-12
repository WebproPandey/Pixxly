
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log('🟡 Authorization Header:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // console.log('🔴 No token provided');
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('🟢 Decoded token:', decoded);

    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      // console.log('🔴 User not found from token');
      return res.status(401).json({ message: 'User not found from token' });
    }

    req.user = user;
    console.log('✅ req.user set to:', req.user);
    next();
  } catch (error) {
    console.error('🔴 JWT Error:', error.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorizeRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};