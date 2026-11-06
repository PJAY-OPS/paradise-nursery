import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="80" />
      <div>
        <h3>{item.name}</h3>
        <p>${item.cost}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
