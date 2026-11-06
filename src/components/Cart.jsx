import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

export default function Cart() {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) return <h2 style={{textAlign:'center', marginTop:'50px'}}>Your Cart is Empty 🛒</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Shopping Cart ({totalQuantity} items)</h2>
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '10px 0' }}>
          <div>{item.image} {item.name} - ${item.price}</div>
          <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
            <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity-1}))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity+1}))}>+</button>
            <button onClick={() => dispatch(removeItem(item.id))} style={{marginLeft:'15px', background:'red', color:'white', border:'none', padding:'5px 10px', borderRadius:'5px'}}>Delete</button>
          </div>
        </div>
      ))}
      <h3 style={{textAlign:'right', marginTop:'20px'}}>Total: ${totalAmount}</h3>
      <div style={{textAlign:'right'}}>
        <button style={{background:'green', color:'white', padding:'10px 20px', border:'none', borderRadius:'5px'}} onClick={()=>alert('Coming Soon!')}>Checkout</button>
        <a href="/products" style={{marginLeft:'15px'}}><button style={{padding:'10px 20px'}}>Continue Shopping</button></a>
      </div>
    </div>
  );
}