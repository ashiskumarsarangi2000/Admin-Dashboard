import React, { useState } from 'react';
import './catagory.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Header = () => {
  return (

    <header className="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjA9zIU1YMosR6N_0x1ob6pdPVahrkMm91Q&s" alt="Company Logo" className="logo" />
      <nav className="navigation-bar">
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/reports">Reports</a></li>
        </ul>
        <div className="user-profile">
  <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720828800&semt=ais_user" alt="User Profile" className="profile-pic" />
  <span>User</span>
  <span className="dropdown-icon">&#9660;</span>
</div>

      </nav>
    </header>
    
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Products" />
      
    </div>
  );
};

const Filters = () => {
  return (
    <div className="filters">
      <select>
        <option value="">All Categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
    </div>
  );
};

const ProductTable = () => {
  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>Category 1</td>
            <td>$10</td>
            <td><button>Add to Cart</button></td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>Category 2</td>
            <td>$20</td>
            <td><button>Add to Cart</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ContentArea = () => {
  return (
    <main className="content-area">
      <div className="search-add-section">
        <SearchBar />
        <button className="add-category-button">Add Category</button>
      </div>
      <ProductTable />
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

const Component = () => {
  return (
    <>
    <Navbar />
    <div style={{ display: 'flex' }}>
      <Sidebar />
    <div className="app">
      {/* <Header /> */}
      <ContentArea />
      <Footer />
    </div>
    </div>
    </>
  );
};


export default Component;
