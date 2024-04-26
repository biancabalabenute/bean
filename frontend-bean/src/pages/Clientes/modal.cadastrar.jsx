import React, { useState } from 'react';
import './modalCadastrar.css'; // Estilos do modal
import './cards.css';
import CadastrarCliente from './CadastrarCliente';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-button" onClick={onClose}><i class="fa-sharp fa-regular fa-xmark" style={{fontSize:20,}}></i></button>
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
      <h1>Exemplo de Modal em React</h1>
      <h2 id ="tituloCadastrar" onClick={openModal}>Cadastrar Cliente</h2>
      <i  id = "iconCadastrar" className="fa-solid fa-user-circle" style={{fontSize: 30, }}></i>
    
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
      <h1 >Cadastrar Cliente </h1>
        
        <CadastrarCliente/>
        <div class="buton0">
        <button onClick={closeModal} id= "butonCancelar" type="submit">Cancelar</button>
        </div>
        <div class="buton2">
        <button  onClick={closeModal} id = "butonOK"  type="submit">Ok</button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
