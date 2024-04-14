import React from 'react';
import logo from './../../img/logo-bean.png';
import './sidenav.css';



function SideNav() {
    return (
      <div>
        <div className="logo-container">
        <img src={logo} alt="logo" className="logo-bean"/>
        </div>
        <div className="sidenav">
          <div className="search-container">
            <input type="text" placeholder="Procurar opção do menu" className="search-input"/>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <i className="fa fa-fw fa-home"></i>
              <span>Menu principal</span>
            </div>
            <div className="nav-item">
              <i className="fa-solid fa-user"></i>
              <span>Clientes</span>
            </div>
            <div className="nav-item">
              <i className="fa-solid fa-box-open"></i>
              <span>Produtos</span>
            </div>
            <div className="nav-item">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Vendas</span>
            </div>
            <div className="nav-item">
              <i className="fa-solid fa-file"></i>
              <span>Cadastros</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default SideNav;
