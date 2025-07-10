// server/controllers/authController.js
import {
  registerSchema,
  loginSchema,
} from '../../utils/authValidator.js';
import {
  createUser,
  findUserByEmail,
  forgotPasswordService,
  resetPasswordService,
  validatePassword
} from '../../services/user/authService.js';
import generateToken from '../../utils/generateToken.js';


export const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const existing = await findUserByEmail(req.body.email);
  if (existing) return res.status(400).json({ message: 'Email already registered' });

  const user = await createUser(req.body);
  const token = generateToken(user);
  res.status(201).json({ token, user });
};

export const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await findUserByEmail(req.body.email);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await validatePassword(req.body.password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken(user);
  res.status(200).json({ token, user });
};

export const forgotPassword = async (req, res) => {
  try {
    const { message } = await forgotPasswordService(req.body.email, req);
    res.status(200).json({ message });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const { message } = await resetPasswordService(token, newPassword);
    res.status(200).json({ message });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

