import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const plants = [
  { id: 1, name: 'Monstera', price: 25, image: '🌿' },
  { id: 2, name: 'Snake Plant', price: 18, image: '🌱' },
  { id: 3, name: 'Peace Lily', price: 22, image: '🌸' },
  { id: 4, name: 'Fiddle Leaf', price: 30, image: '🍃' },
  { id: 5, name: 'Aloe Vera', price: 15, image: '🌵' },
  { id: 6, name: 'Spider Plant', price: 12, image: '🌾' },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = (id) => cartItems.some(i => i.id === id);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {plants.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center', borderRadius: '10px' }}>
          <div style={{ fontSize: '50px' }}>{p.image}</div>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button 
            onClick={() => dispatch(addItem(p))}
            disabled={isInCart(p.id)}
            style={{ background: isInCart(p.id) ? 'gray' : 'green', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: isInCart(p.id) ? 'not-allowed' : 'pointer' }}
          >
            {isInCart(p.id) ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
}