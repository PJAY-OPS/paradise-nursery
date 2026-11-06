import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className="landing-page">
        <div className="background-image"></div>
        <div className="landing-content">
          <h1>Welcome To Paradise Nursery</h1>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <button className="get-started-btn" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
      {showProductList && (
        <div className="product-list-container">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
