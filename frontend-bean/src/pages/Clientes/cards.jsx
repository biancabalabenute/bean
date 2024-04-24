import React from 'react';
import './cards.css';
import ModalCadastrar from './modal.cadastrar';

function cards() {
  return (
    <div className="container">
      <div className="card" style={{ height: '150px' }}>
        <ModalCadastrar />
        
        <div className='colorBlue'></div>
      </div>
      <div className="card" style={{ height: '150px' }}>
      <ModalCadastrar />
        <h2 id ="tituloBuscarClientes" >Buscar Clientes</h2>
        <i class="fa-solid fa-magnifying-glass" style={{fontSize: 30,}}></i>
        <div className='colorBlue'></div>
      </div>
      <div className="card" style={{ height: '150px' }}>
      <ModalCadastrar />
        <h2  id ="tituloEditarClientes" >Editar Clientes</h2>
        <i class="fa-solid fa-pen" style={{fontSize: 30,}}></i>
        <div className='colorBlue'></div>
      </div>
    </div>
  );
}

export default cards;
