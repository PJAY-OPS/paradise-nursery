import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../features/cart/CartSlice';

const ProductList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalQuantity = () => {
    let total = 0;
    cartItems.forEach((item) => { total += item.quantity; });
    return total;
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: 15 },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/40/lawn-3539429_1280.jpg", cost: 12 },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", cost: 18 },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2015/10/09/19/02/plant-980504_1280.jpg", cost: 10 },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/17/30/plant-4850258_1280.jpg", cost: 20 },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2016/11/11/23/34/exotic-1814282_1280.jpg", cost: 14 },
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2015/10/09/19/02/plant-980504_1280.jpg", cost: 20 },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2018/07/11/06/40/lawn-3539429_1280.jpg", cost: 18 },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: 10 },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/11/11/23/34/exotic-1814282_1280.jpg", cost: 9 },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2020/02/15/17/30/plant-4850258_1280.jpg", cost: 12 },
        { name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", cost: 16 },
      ]
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        { name: "Basil", image: "https://cdn.pixabay.com/photo/2018/07/11/06/40/lawn-3539429_1280.jpg", cost: 8 },
        { name: "Citronella", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: 15 },
        { name: "Catnip", image: "https://cdn.pixabay.com/photo/2020/02/15/17/30/plant-4850258_1280.jpg", cost: 10 },
        { name: "Marigold", image: "https://cdn.pixabay.com/photo/2015/10/09/19/02/plant-980504_1280.jpg", cost: 7 },
        { name: "Lavender Repellent", image: "https://cdn.pixabay.com/photo/2016/11/11/23/34/exotic-1814282_1280.jpg", cost: 20 },
        { name: "Sage", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", cost: 11 },
      ]
    },
  ];

  return (
    <div>
      <div className="navbar">
        <div className="navbar-title">Paradise Nursery</div>
        <div className="navbar-links">
          <a onClick={() => navigate('/')}>Home</a>
          <a onClick={() => navigate('/products')}>Plants</a>
          <a onClick={() => navigate('/cart')}>Cart</a>
        </div>
        <div className="cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-quantity">{calculateTotalQuantity()}</span>
        </div>
      </div>

      <div className="product-grid">
        {plantsArray.map((cat, i) => (
          <div key={i}>
            <h2>{cat.category}</h2>
            <div className="product-list">
              {cat.plants.map((plant, idx) => {
                const added = cartItems.some((c) => c.name === plant.name);
                return (
                  <div key={idx} className="product-card">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <h3>{plant.name}</h3>
                    <p>${plant.cost}</p>
                    <button disabled={added} onClick={() => dispatch(addItem(plant))}>
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
