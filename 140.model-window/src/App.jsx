import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 function handleClose(){

  setIsModalOpen(false)
 }
  return (
    <div className="container">
      <header>
        <h1>Buggy Modal Component</h1>
        <p>Click the button to open the modal. But closing it might be tricky...</p>
      </header>
      <main>
        <button className="open-btn" onClick={() => setIsModalOpen(true)}>Open Modal</button>

        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <h2>Modal Title</h2>
          <p>This is the content of the modal. You should be able to close this by clicking the 'Close' button, clicking the dark overlay, or pressing the 'Escape' key.</p>
        </Modal>
      </main>
    </div>
  );
}

export default App;