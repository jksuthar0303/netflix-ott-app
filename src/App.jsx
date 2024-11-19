import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/layouts/Login&Signup/Login'

import ManageProfiles from './components/layouts/ManageProfiles/ManageProfiles'
import MainLayout from './components/mainlayout/MainLayout'; 
import Home from './components/layouts/Home/Home';  
import Movies from './components/layouts/Movies/Movies';  
import Series from './components/layouts/Series/Series'; 


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/manage-profiles" element={<ManageProfiles />} />


        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/browser" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
