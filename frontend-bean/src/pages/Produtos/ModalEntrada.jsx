import React, { useState } from 'react';
import './modalEntrada.css'; 
import EntradaProduto from './EntradaProduto'; 
import './card.css';

const ModalEntrada = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-entrada">
      <div className="modal-entrada">
        <button className="modal-close-button" onClick={onClose}><i className="fa-sharp fa-regular fa-xmark" style={{fontSize:20,}}></i></button>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h2 id ="tituloEntrada" onClick={openModal}>Entrada de Produto</h2>
      <i id = "iconEntrada" className="fa-solid fa-cart-flatbed" style={{fontSize: 30}}></i>
      <ModalEntrada isOpen={modalIsOpen} onClose={closeModal}>
        <h1>Entrada de Produto</h1>
        <EntradaProduto/>
        <div className="buton0">
          <button onClick={closeModal} id="butonCancelar" type="button">Cancelar</button>
        </div>
        <div className="buton2">
          <button onClick={closeModal} id="butonOK" type="button">Ok</button>
        </div>
      </ModalEntrada>
    </div>
  );
};

export default App;
