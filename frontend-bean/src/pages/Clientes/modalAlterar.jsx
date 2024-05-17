import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './modalBuscar.css';
import AlterarCliente from './alterarCliente'


function Modal3() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div class ="buscarCliente">
      <h2 onClick={openModal} id ="tituloEditarClientes" >Editar Clientes</h2>
        <i class="fa-solid fa-pen" style={{fontSize: 30,}}></i>
      </div>
      
      {isOpen && (
        <div style={{marginLeft:'-620px'}} className="modalBuscar">
          <button className="modal-close-button" onClick={closeModal}><i class="fa-sharp fa-regular fa-xmark" style={{fontSize:20,}}></i></button>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
           < AlterarCliente/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal3;
