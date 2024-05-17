
import React, { useState } from 'react';
import './modalEditar.css';
import EditarProduto from './EditarProduto';
import './card.css';

const ModalEditarProduto = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-edit">
      <div className="modal-edit">
        <button className="modal-close-button" onClick={onClose}>
          <i className="fa-sharp fa-regular fa-xmark" style={{ fontSize: 20 }}></i>
        </button>
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
      <h2 id="tituloEditar" onClick={openModal}>Editar Produto</h2>
      <i id="iconEditar" className="fa-solid fa-pen" style={{ fontSize: 30 }}></i>
      <ModalEditarProduto isOpen={modalIsOpen} onClose={closeModal}>
        <h1>Editar Produto</h1>
        <EditarProduto/>
        <div className="buton0">
          <button onClick={closeModal} id="butonCancelar" type="button">Cancelar</button>
        </div>
      </ModalEditarProduto>
    </div>
  );
};

export default App;
