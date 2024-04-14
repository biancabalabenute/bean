import React, { useState, useEffect } from 'react';
import Card from './Card';
import SideNav from './SideNav';
import './menu.css';
import axios from 'axios';

function MenuPrincipal() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('')
          .then(response => {
            setClientes(response.data);
          })
          .catch(error => {
            console.error('Erro ao buscar clientes:', error);
          });
      }, []);

  return (
     <div className='menu-principal'>
        <h1 className='menu'>Menu Principal</h1>
      <div className="icon-container user-icon">
        <i className="fa-solid fa-user-circle" style={{fontSize: 30}}></i>
      </div>
      <div className="icon-container notification-icon">
        <i className="fa-solid fa-bell" style={{fontSize: 30}}></i>
      </div>
    <Card/>
    <SideNav/>
    <table className='table'>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Valor</th>
              <th>Marketplace</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => ( // Definindo a variável cliente dentro do map
              <tr key={cliente.id}>
                <td>{cliente.name}</td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>
  );
}

export default MenuPrincipal;
