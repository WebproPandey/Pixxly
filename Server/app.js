// server/app.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import authRoute from './routes/user/authRoutes.js';
import userProfileRoute from './routes/user/userProfileRoute.js';
import './config/passport.js';

const app = express();

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Express session (optional for passport)
app.use(session({
    secret: process.env.SESSION_SECRET || 'keyboardcat',
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', authRoute);
app.use('/api/user', userProfileRoute);



export default app;
