# React Adaptable Modal

Un composant modal adaptable et réutilisable pour les applications React.

## Installation

Pour utiliser ce composant modal dans votre projet, installez-le via npm :

`npm install @dalidcvcv/oc-p14-modal-package`

Ou via yarn :
`yarn add @dalidcvcv/oc-p14-modal-package`


# utilisation

`import Modal from '@dalidcvcv/oc-p14-modal-package'`

# exemple d'utilisation
```
import React, { useState } from 'react';
import Modal from 'react-adaptable-modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Titre de la Modal"
        message="Message de la Modal"
      >
      </Modal>
    </div>
  );
};

export default App;
```

### Props
Le composant Modal accepte les props suivantes :

    isOpen (boolean) :      Détermine si le modal est ouvert ou fermé.
    onClose (function) :    Fonction appelée lorsque l'utilisateur souhaite fermer le modal.
    title (string) :        Le titre à afficher dans le modal.
    message (string) :      Le message à afficher dans le modal.
    