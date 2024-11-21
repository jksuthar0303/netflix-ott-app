import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import PrivateRoute from './ProtectedRoutes/PrivateRoute'; 
import Login from './components/layouts/Login&Signup&Verify/Login';
import Home from './components/layouts/Home/Home';
import Movies from './components/layouts/Movies/Movies';
import Series from './components/layouts/Series/Series';
import Search from './components/layouts/Search/Search';
import MainLayout from './components/mainlayout/MainLayout';
import SignUp from './components/layouts/Login&Signup&Verify/Signup';
import Verify from './components/layouts/Login&Signup&Verify/Verify';
import ForgetPassword from './components/layouts/ForgetPassword/ForgetPassword';
import UpdatePassword from './components/layouts/ForgetPassword/UpdatePassword';

function App() {
  const isAuthenticated = localStorage.getItem('currentUser'); // Check if user is authenticated

  return (
    <Router>
      <Routes>
        {/* Public Routes - Redirect authenticated users to home */}
        {!isAuthenticated && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/update-password" element={<UpdatePassword />} />
          </>
        )}

        {/* Protected Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<PrivateRoute element={<Home />} />} />
          <Route path="browser" element={<PrivateRoute element={<Movies />} />} />
          <Route path="series" element={<PrivateRoute element={<Series />} />} />
          <Route path="search" element={<PrivateRoute element={<Search />} />} />
        </Route>

        {/* Redirect to home if authenticated user tries to visit public route */}
        {isAuthenticated && <Route path="/login" element={<Navigate to="/home" />} />}
        {isAuthenticated && <Route path="/signup" element={<Navigate to="/home" />} />}
        {isAuthenticated && <Route path="/verify" element={<Navigate to="/home" />} />}
        {isAuthenticated && <Route path="/forget-password" element={<Navigate to="/home" />} />}
        {isAuthenticated && <Route path="/update-password" element={<Navigate to="/home" />} />}
        
      </Routes>
    </Router>
  );
}

export default App;
