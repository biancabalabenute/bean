import React, { useState } from 'react';
import './modalProduto.css'; 
import CadastrarProduto from './CadastrarProduto'; 
import './card.css';

const Modal = ({ isOpen, onClose, children }) => {
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
      <h2 id ="tituloCadastrar" onClick={openModal}>Cadastrar Produto</h2>
      <i id = "iconCadastrar" className="fa-solid fa-box-open" style={{fontSize: 30}}></i>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h1>Cadastrar Produto</h1>
        <CadastrarProduto/>
        <div className="buton0">
          <button onClick={closeModal} id="butonCancelar" type="button">Cancelar</button>
        </div>
        <div className="buton2">
          <button onClick={closeModal} id="butonOK" type="button">Ok</button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
