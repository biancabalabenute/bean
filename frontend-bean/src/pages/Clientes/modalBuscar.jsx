import React, { useState } from 'react';
import './modalBuscar.css';
import BuscarCliente from './buscarCliente';

function Modal2() {
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
      <h2  onClick={openModal} id ="tituloBuscarClientes" >Buscar Clientes</h2>
      <i class="fa-solid fa-magnifying-glass" style={{fontSize: 30,}}></i>
      </div>
      
      {isOpen && (
        <div className="modalBuscar">
          <button className="modal-close-button" onClick={closeModal}><i class="fa-sharp fa-regular fa-xmark" style={{fontSize:20,}}></i></button>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h1>Buscar Cliente</h1>
            <BuscarCliente/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal2;
