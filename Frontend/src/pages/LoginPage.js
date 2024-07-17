import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
        <div className="page-container">
            
      <header className="header">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjA9zIU1YMosR6N_0x1ob6pdPVahrkMm91Q&s"
          alt="TableSprint Logo"
          className="logo"
        />
      </header>
      <div className="content-container">
        <div className="content">
          <div className={!showForgotPassword ? 'welcome-section' : 'hidden'}>
            <img 
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720828800&semt=sph" 
              alt="Mobile Login Illustration" 
              className="cartoon-image" 
            />
            <p className="welcome-text animated">👋 Welcome </p>
            <p className="admin-text">admin</p>
          </div>
          <div className={!showForgotPassword ? 'login-form' : 'hidden'}>
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="input" />
            <a href="#" className="forgot-password-link" onClick={() => setShowForgotPassword(true)}>
              Did you forget password?
            </a>
            <button type="submit" className="button">Log in</button>
          </div>
          <div className={showForgotPassword ? 'forgot-password-container' : 'hidden'}>
            <h2>Forgot Password</h2>
            <p>Enter your email address and we’ll send you a link to restore password</p>
            <div className="login-form">
              <label htmlFor="email" className="label">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email address" className="input" />
              <button type="submit" className="button">Request reset link</button>
            </div>
            <a href="#" className="forgot-password-link" onClick={() => setShowForgotPassword(false)}>
              Back to login
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
  
};

export default LoginPage;
