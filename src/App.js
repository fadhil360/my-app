import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import Login from './components/Login';
import SignUp from './components/SignUp';
import VirtualLab from './components/VirtualLab';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser); // Listen for changes to user's auth state
  }, []);

  return (
    <Router basename="/login"> {/* Use BrowserRouter here for the basename */}
      <div>
        <h1>Welcome to the Virtual Lab</h1>
        <Routes>
          {/* If user is logged in, redirect them to /lab */}
          <Route path="/login" element={user ? <Navigate to="/lab" /> : <Login setUser={setUser} />} />
          <Route path="/signup" element={user ? <Navigate to="/lab" /> : <SignUp setUser={setUser} />} />
          <Route path="/lab" element={user ? <VirtualLab /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
