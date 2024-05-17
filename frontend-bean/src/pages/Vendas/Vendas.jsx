import React from "react";
import Caixa from './VendaCaixa';
import './VendaCaixa.css';

function Venda() {
  return (
    <div id="ContainerVendas">
    <div className="caixa">
      <div className="navCliente">
      <i  class="fa-solid fa-bars "  style={{fontSize: 40, margin:50 }}></i>
      </div>
      <div className="navCliente">
      <h1 className='menuCliente' style={{fontSize: 15,margin:-40}}>Vendas</h1>
      </div>
      
      <div className="navCliente">
      <h1 id ="nomeCliente" style={{fontSize: 15, margin:30}}>Vancley Barros Vieira</h1>
      </div>
      <div className="navCliente">
      <i className="fa-solid fa-user-circle" style={{fontSize: 30,}}></i>
      </div>
      <div className="navCliente">
      <i class="fa-solid fa-bell" style={{fontSize: 30,}}></i>
      </div>
      <div><Caixa/></div>
      
      </div>
      </div>
  );
}
export default Venda;
