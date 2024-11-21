import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/layouts/Login&Signup&Verify/Login';
import ManageProfiles from './components/layouts/ManageProfiles/ManageProfiles';
import MainLayout from './components/mainlayout/MainLayout';
import Home from './components/layouts/Home/Home';
import Movies from './components/layouts/Movies/Movies';
import Series from './components/layouts/Series/Series';
import Search from './components/layouts/Search/Search';
import SignUp from './components/layouts/Login&Signup&Verify/Signup';
import ForgetPassword from './components/layouts/ForgetPassword/ForgetPassword';
import UpdatePassword from './components/layouts/ForgetPassword/UpdatePassword';
import Verify from './components/layouts/Login&Signup&Verify/Verify';
import PrivateRoute from './ProtectedRoutes/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/manage-profiles" element={<ManageProfiles />} />

        {/* Protected routes - MainLayout is applied to all these */}
        <Route path="/" element={<MainLayout />}>
          {/* Use PrivateRoute to protect these routes */}
          <Route path="home" element={<PrivateRoute element={<Home />} />} />
          <Route path="browser" element={<PrivateRoute element={<Movies />} />} />
          <Route path="series" element={<PrivateRoute element={<Series />} />} />
          <Route path="search" element={<PrivateRoute element={<Search />} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
