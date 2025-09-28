// src/App.js

import React, { useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Posts from './pages/Posts';
import Login from './pages/Login'; // Import the new Login page
import Signup from './pages/Signup';
import Header from './components/Header'; // Import Header here

import './App.css';

// We'll move the dummy user ID here
const LOGGED_IN_USER_ID = 1;

// This component will act as the main layout
// We pass the auth state and logout function to the Header
function Layout({ isLoggedIn, onLogout }) {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Header is now part of the main layout, so it shows on all pages */}
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Outlet />
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  // --- LOGIN/LOGOUT LOGIC LIVES HERE NOW ---
  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentUserId(LOGGED_IN_USER_ID);
    // Note: Navigation happens inside the Login component itself
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUserId(null);
  };

  return (
    <Routes>
      {/* Pass state down to the Layout */}
      <Route path="/" element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}>
        {/* Pass the necessary props down to the Posts page */}
        <Route 
          index 
          element={
            <Posts isLoggedIn={isLoggedIn} currentUserId={currentUserId} />
          } 
        />
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;