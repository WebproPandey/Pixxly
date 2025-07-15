import React, { useEffect } from 'react'
import AppRoute from './AppRoute/AppRoute'
import { loadUser } from './app/features/auth/authReducer';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(loadUser());
}, [dispatch]);
  return (
    <div>
       <AppRoute/>
    </div>
  )
}

export default App