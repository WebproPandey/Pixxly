// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authActions';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


