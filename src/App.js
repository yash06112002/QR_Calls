import React from 'react';
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Mainpage from './components/Mainpage.js';
import Login from './components/Login.js';

function App() {
  const [user] = useAuthState(auth);
  // console.log(user)
  return (
    user ? <Mainpage /> : <Login />
  );
}

export default App;
