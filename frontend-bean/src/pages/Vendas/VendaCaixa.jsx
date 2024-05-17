// App.js
import React, { useState } from 'react';
import ProductSale from './ProductSale';
import CustomerSelection from './CustomerSelection';
import axios from 'axios';
import './Vendas.css';
import Swal from 'sweetalert2';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.8/dist/sweetalert2.min.css" />;
<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11.10.8/dist/sweetalert2.all.min.js' ></script>;

  function AError(){
    const handleSaveClick =()=>{
      Swal.fire({
        icon: "error",
        title: "Ops! Usuário não foi alterado...",
        footer: '<a href="#">Tente alterar novamente!</a>'
      });
    }
    return handleSaveClick()
  }


  function ASucess() {
  const handleSaveClick = () => {
    Swal.fire({
     title: "Alterações feitas com sucesso!",
     text: " Vancley Vieira",
     icon: "success"
   });
 };

  return (
    handleSaveClick()
    
  );
};

function Venda() {
  const [products, setProducts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleFinalizeSale = () => {
    const sale = {
      customerId: selectedCustomer.id,
      products,
      marketplace: 'Online',
      totalValue: products.reduce((total, product) => total + product.price * product.quantity, 0)
    };

    axios.post('http://localhost:3000/sales', sale)
      .then(response => {
        console.log( ASucess(), response.data);
        setProducts([]);
        setSelectedCustomer(null);
      })
      .catch(error => {
        console.error( AError(), error);
      });
  };

  return (
    <div className='ContainerCaixa'>
      <h1>Ponto de Venda</h1>
      <br/>
      <br/>
      <br/>
      <h2 style={{color:'green'}} >Caixa Aberto</h2>
      <br/>
      <br/>
      <ProductSale onAddProduct={handleAddProduct} />
      <CustomerSelection onSelectCustomer={handleSelectCustomer} />
      <div style={{borderRadius:'7px',borderWidth:'3px', padding:'20px', marginTop:'30px', background:'#D9D9D9'}}>
  
        <h2>Produtos no Carrinho</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.quantity} x R$ {product.price.toFixed(2)} = R$ {(product.price * product.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      {selectedCustomer && (
        <div>
          <h4>Cliente Selecionado</h4>
          <p>{selectedCustomer.name}</p>
        </div>
      )}
      <button id ="finalizarVenda" onClick={handleFinalizeSale} disabled={!selectedCustomer || products.length === 0}>
        Finalizar Venda
      </button>
    </div>
  );
}

export default Venda;
