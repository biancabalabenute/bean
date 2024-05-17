import React from 'react';
import './cards.css';
import ModalCadastrar from './modal.cadastrar';
import ModalBuscar from './modalBuscar';
import ModalAlterar from './modalAlterar'
function cards() {
  return (
    <div className="container">
      <div className="card" style={{ height: '150px' }}>
        <ModalCadastrar />
        
        <div className='colorBlue'></div>
      </div>
      <div className="card" style={{ height: '150px' }}>
      <ModalBuscar/>
        
        <div style={{marginTop:"71.5px"}} className='colorBlue'></div>
      </div>
      <div className="card" style={{ height: '150px' }}>
      < ModalAlterar/>
      <div style={{marginTop:"76.5px"}} className='colorBlue'></div>
      </div>
    </div>
  );
}

export default cards;
