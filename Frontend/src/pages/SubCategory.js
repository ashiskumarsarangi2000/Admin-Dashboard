import React from 'react';
import './subcatagory.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const subCatagory = () => {
  const navLinks = [
    { link: '#home', label: 'Home' },
    { link: '#products', label: 'Products' },
    { link: '#about', label: 'About Us' },
  ];

  const products = [
    { id: 1, name: 'Toor dal', price: '$10', image: 'https://www.tatanutrikorner.com/cdn/shop/products/Tata-Sampann-Toor-Dal-1kg-_FOP_-with-Sanjeev-kapoor.png?v=1660201674' },
    { id: 2, name: 'Moong Dal', price: '$20', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/pulses/c/k/o/-original-imagpgzhhammd6z5.jpeg?q=90&crop=false' },
    { id: 3, name: 'Fortune Oil', price: '$30', image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/QN/LB/KQ/27643313/soyaoil-500x500.jpg' },
    { id: 4, name: 'Lemon tea', price: '$40', image: 'https://www.bigbasket.com/media/uploads/p/xxl/40024619_9-lipton-green-tea-pure-light.jpg' },
    { id: 5, name: 'Atta', price: '$50', image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/RY/QF/PW/120561215/aashirvaad-1kg-multi-grain-atta.jpg' },
    { id: 6, name: 'Tea', price: '$60', image: 'https://rukminim2.flixcart.com/image/850/1000/kk8mcnk0/tea/t/y/j/250-regular-tea-box-regular-tea-leaves-red-label-original-imafzmp7syzvdbmb.jpeg?q=90&crop=false' },
   
    // Add more products as needed
  ];

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar />
        <div className="app">
          <div className="header-section">
            <div className="search-bar">
              <input type="text" placeholder="Search Products" />
            </div>
            <div className="user-profile">
              <img
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720828800&semt=ais_user"
                alt="User Profile"
                className="profile-pic"
              />
              <span>User</span>
              <span className="dropdown-icon">&#9660;</span>
              <a class name="btn btn-primary" href="/Addsubcategory" target="_blank"> Add subcategory</a>
            </div>
          </div>

          <nav className="navigation-bar">
            <ul>
              {navLinks.map((item) => (
                <li key={item.link}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="main-content">
  <aside className="filters-section">
    <h4>Filters</h4>
    <ul>
      <li>
        <label>
          <input type="checkbox" name="filter1" />
          Filter 1
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" name="filter2" />
          Filter 2
        </label>
      </li>
      {/* Add more filter options as needed */}
    </ul>
    <button className="apply-button">Apply</button>
  </aside>

  <div className="product-listing-area">
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
</div>


          <footer className="footer">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default subCatagory;
