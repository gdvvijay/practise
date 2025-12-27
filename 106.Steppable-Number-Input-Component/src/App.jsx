import React, { useState } from 'react';
import Stepper from './Stepper';
import './App.css';

function App() {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(5);

  return (
    <div className="container">
      <header>
        <h1>Buggy Stepper Component</h1>
        <p>Use the '+' and '-' buttons to change the values. The logic is flawed.</p>
      </header>
      <main className="form-container">
        <div className="form-group">
          <label>Product Quantity</label>
          <Stepper
            value={quantity}
            onValueChange={setQuantity}
            min={0}
            max={10}
            step={1}
          />
        </div>
        <div className="form-group">
          <label>Your Rating</label>
          <Stepper
            value={rating}
            onValueChange={setRating}
            step={1}
            min={1}
            max={5}
          />
        </div>
      </main>
    </div>
  );
}

export default App;