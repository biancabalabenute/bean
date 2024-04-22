import React from 'react';
import './cards.css';

function cards() {
  return (
    <div className="container">
      <div className="card" style={{ height: '150px' }}>
        <h2 id ="tituloCadastrar">Cadastrar Clientes</h2>
        <i className="fa-solid fa-user-circle" style={{fontSize: 30,}}></i>
        <div className='colorBlue'></div>
      </div>
      <div className="card" style={{ height: '150px' }}>
        <h2 id ="tituloBuscarClientes" >Buscar Clientes</h2>
        <i class="fa-solid fa-magnifying-glass" style={{fontSize: 30,}}></i>
        <div className='colorBlue'></div>
      </div>
      <div className="card" style={{ height: '150px' }}>
        <h2  id ="tituloEditarClientes" >Editar Clientes</h2>
        <i class="fa-solid fa-pen" style={{fontSize: 30,}}></i>
        <div className='colorBlue'></div>
      </div>
    </div>
  );
}

export default cards;