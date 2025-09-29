// src/App.js

import React, { useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Posts from './pages/Posts';
import Login from './pages/Login'; // Import the new Login page
import Signup from './pages/Signup';
import Header from './components/Header'; // Import Header here
import PostDetail from './components/PostDetail'; // Import Header here

// dummy user
const LOGGED_IN_USER_ID = 1;

function Layout({ isLoggedIn, onLogout }) {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Outlet />
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentUserId(LOGGED_IN_USER_ID);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUserId(null);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}>
        <Route 
          index 
          element={
            <Posts isLoggedIn={isLoggedIn} currentUserId={currentUserId} />
          } 
        />
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route path="signup" element={<Signup />} />
        <Route path="posts/:postId" element={<PostDetail />} /> 
      </Route>
    </Routes>
  );
}

export default App;