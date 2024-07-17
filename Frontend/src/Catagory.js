import React, { useState } from 'react';
import './catagory.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Product Dashboard</h1>
    </header>
  );
};

const NavigationBar = () => {
  const navLinks = [
    { link: '/dashboard', label: 'Dashboard' },
    { link: '/products', label: 'Products' },
    { link: '/reports', label: 'Reports' },
  ];

  return (
    <nav className="navigation-bar">
      <ul>
        {navLinks.map((item) => (
          <li key={item.link}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
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
            <td><button>Edit</button></td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>Category 2</td>
            <td>$20</td>
            <td><button>Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ContentArea = () => {
  return (
    <main className="content-area">
      <SearchBar />
      <Filters />
      <ProductTable />
      <div className="actions">
        <button>Add New Product</button>
      </div>
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

const Catagory = () => {
  return (
    <div className="app">
      <Header />
      <NavigationBar />
      <ContentArea />
      <Footer />
    </div>
  );
};

export default Catagory;
