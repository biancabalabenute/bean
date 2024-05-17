import React, { useState } from 'react';
import './modalMarca.css';
import CadastrarMarca from './CadastrarMarca';
import './card.css';

const ModalMarca = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-marca">
      <div className="modal-marca">
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
      <h2 id="tituloMarca" onClick={openModal}>Cadastrar Marca</h2>
      <i id="iconMarca" className="fa-solid fa-file-pen" style={{ fontSize: 30 }}></i>
      <ModalMarca isOpen={modalIsOpen} onClose={closeModal}>
        <h1>Cadastrar Marca</h1>
        <CadastrarMarca/>
        <div className="buton0">
          <button onClick={closeModal} id="butonCancelar" type="button">Cancelar</button>
        </div>
        <div className="buton2">
          <button onClick={closeModal} id="butonOK" type="button">Ok</button>
        </div>
      </ModalMarca>
    </div>
  );
};

export default App;
