import React from 'react';
import './card.css';
import ModalProduto from './ModalCadastro';
import ModalBuscarProduto from './ModalBuscar';
import ModalEditar from './ModalEditar';
import ModalEntrada from './ModalEntrada';
import ModalMarca from './ModalMarca';
function Card() {
 

  return (
    <>
  <div className="cards-container">
      <div className="card-products" style={{ height: '150px' }}>
        <ModalProduto/>
      </div>
      <div className="card-products" style={{ height: '150px' }}>
        <ModalBuscarProduto/>
      </div>
      <div className="card-products" style={{ height: '150px' }}>
        <ModalEditar/>
      </div>
      <div className="card-products" style={{ height: '150px' }}>
        <ModalEntrada/>
      </div>
      <div className="card-products" style={{ height: '150px' }}>
        <ModalMarca/>
      </div>
  </div>
    </>
  );
}

export default Card;
