import React, { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (isOpen === false) {
    return null;
  }
  
  useEffect(() => {
    // This is meant to handle the Escape key press
    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="close-btn" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
}

export default Modal;