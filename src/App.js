import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const plants = [
    { id: 1, name: "Snake Plant", price: 15, img: "🌿" },
    { id: 2, name: "Monstera", price: 25, img: "🌱" },
    { id: 3, name: "Aloe Vera", price: 12, img: "🌵" },
    { id: 4, name: "Peace Lily", price: 18, img: "🌸" },
    { id: 5, name: "Fiddle Leaf", price: 30, img: "🍃" },
    { id: 6, name: "Spider Plant", price: 10, img: "☘️" },
  ];

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", background: "#f0faf0", minHeight: "100vh" }}>
      <header style={{ background: "#2d6a4f", color: "white", padding: "15px", borderRadius: "10px", display: "flex", justifyContent: "space-between" }}>
        <h1>🌿 Paradise Nursery</h1>
        <div style={{ background: "white", color: "#2d6a4f", padding: "10px 20px", borderRadius: "20px", fontWeight: "bold" }}>
          Cart: {cart.length} | ${total}
        </div>
      </header>

      <h2 style={{ marginTop: "20px", color: "#2d6a4f" }}>Our Plants</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px", marginTop: "15px" }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "50px" }}>{plant.img}</div>
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button 
              onClick={() => addToCart(plant)}
              style={{ background: "#2d6a4f", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ marginTop: "30px", background: "white", padding: "15px", borderRadius: "10px" }}>
          <h3>Your Cart 🌿</h3>
          {cart.map((item, index) => (
            <p key={index}>{item.name} - ${item.price}</p>
          ))}
          <h4>Total: ${total}</h4>
          <button style={{ background: "#2d6a4f", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;