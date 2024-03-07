import React from 'react';
import './index.css';

const Modal = ({ isOpen, onClose, title, message }) => { 
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{title || 'Success'}</h2>
        <p>{message || `The operation has been successfully completed!`}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;