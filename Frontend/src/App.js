import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubCategory from './pages/SubCategory';
import Dashboard from './pages/Dashboard';
import Catagory from './pages/Catagory';
import LoginPage from './pages/LoginPage';
import Addsubcategory from './pages/Addsubcategory';
import Product from './pages/Product';


function App() {
  // State to track if the user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout (optional)
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/loginpage' element={<LoginPage />} />
        <Route path='/Catagory' element={<Catagory />} />
        <Route path='/subCatagory' element={<SubCategory />} /> 
       <Route path='/Addsubcategory' element={<Addsubcategory />} />
       <Route path='/product' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
