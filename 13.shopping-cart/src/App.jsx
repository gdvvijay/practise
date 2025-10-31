// src/App.jsx
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
 
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Mouse", price: 50 },
  ];

  // BUG 1: Duplicates not handled correctly
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    console.log(cart)
    console.log(existing)
    if (existing) {
      
      // existing.quantity += 1; // mutating state directly ❌
      // setCart(prev=>([...prev,{...existing,quantity:4}]));
      setCart(cart.map((item)=>{
       return item.id === product.id ? {...item,quantity:item.quantity+1} : item
      }))
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // BUG 2: Remove doesn't work properly
  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    // cart.splice(0, cart.length, ...updated); // directly mutating ❌
    setCart(updated);
  };

  // BUG 3: Total calculation wrong (price not multiplied by quantity)
  const total = cart.reduce((sum, item) => {
    return sum + item.price *item.quantity;
  }, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Shopping Cart</h1>

      <h2>Products</h2>
      {products.map((p) => (
        <div key={Math.random()}>
          {p.name} - ${p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}

      <h2 style={{ marginTop: "2rem" }}>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      <ul>
        {cart.map((item) => (
          <li key={Math.random()}>
            {item.name} x {item.quantity} = ${item.price}
            <button onClick={() => removeFromCart(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default App;
