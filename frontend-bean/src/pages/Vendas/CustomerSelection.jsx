// CustomerSelection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import'./VendaCaixa.css'


const CustomerSelection = ({ onSelectCustomer }) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/customers')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar clientes:', error);
      });
  }, []);

  const handleCustomerChange = (e) => {
    const customerId = e.target.value;
    setSelectedCustomer(customerId);
    const customer = customers.find(c => c.id === customerId);
    onSelectCustomer(customer);
  };

  return (
    <div style={{background:'#D9D9D9',borderRadius:'7px',borderWidth:'3px', padding:'20px', marginTop:"30px"}}>
  
      <h2>Selecionar Cliente</h2>
      <br />
      <Select id='CampoCliente' placeholder="Selecione o Cliente" value={selectedCustomer} onChange={handleCustomerChange}>
        <option styles={{wight:'200px'}} value="">Selecione um cliente</option>
      
        {customers.map(customer => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </Select>
    </div>
    
  );
};


export default CustomerSelection;

