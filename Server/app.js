// server/app.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import authRoute from './routes/user/authRoutes.js';
import userProfileRoute from './routes/user/userProfileRoute.js';
import userPostRoute from './routes/user/postRoutes.js';
import storyReelsRoute from './routes/user/storyRellsRoute.js';
import cors from 'cors';
import './config/passport.js';

const app = express();

// Body Parsers
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));


// Routes
app.use('/api/user', authRoute);
app.use('/api/user', userProfileRoute);
app.use('/api/user', userPostRoute);
app.use('/api/user', storyReelsRoute);

app.use("/" ,(req,res) =>{
  res.send("Hello  ji")
})

export default app;
