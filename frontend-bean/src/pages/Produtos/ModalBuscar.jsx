import React, { useState } from 'react';
import './modalBuscar.css'; 
import BuscarProduto from './BuscarProduto'; 
import './card.css';

const ModalBuscarProduto = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-product">
      <div className="modal-product">
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
      <h2 id ="tituloBuscar" onClick={openModal}>Buscar Produto</h2>
      <i id = "iconBuscar" className="fa-solid fa-search" style={{fontSize: 30}}></i>
      <ModalBuscarProduto isOpen={modalIsOpen} onClose={closeModal}>
        <h1>Buscar Produto</h1>
        <BuscarProduto/> 
        <div className="buton0">
          <button onClick={closeModal} id="butonCancelar" type="button">Cancelar</button>
        </div>
        <div className="buton2">
          <button onClick={closeModal} id="butonOK" type="button">Ok</button>
        </div>
      </ModalBuscarProduto>
    </div>
  );
};

export default App;
