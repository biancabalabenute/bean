import React from 'react';
import './card.css';
import ModalProduto from './ModalCadastro';
import ModalBuscarProduto from './ModalBuscar';
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
      </div>
      <div className="card-products" style={{ height: '150px' }}>
      </div>
      <div className="card-products" style={{ height: '150px' }}>
      </div>
  </div>
    </>
  );
}

export default Card;
