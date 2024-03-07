import React, { useState } from 'react';
import Modal from './components/index'; 
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="app">
      <button onClick={handleOpen}>Ouvrir la modal</button>
      <Modal isOpen={isOpen} onClose={handleClose} title="Votre Titre ici" message="Votre message ici." />
    </div>
  );
}

export default App;
