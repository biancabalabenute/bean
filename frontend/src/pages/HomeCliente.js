import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeCliente() {
  const [clientes, setClientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = async () => {
    try {
      const result = await axios.get("http://localhost:8080/clientes");
      setClientes(result.data);
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
    }
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/clientes/${id}`);
      setClientes(clientes.filter(cliente => cliente.id !== id));
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    }
  };

  const filteredClientes = clientes.filter(cliente =>
    (cliente.name && cliente.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (cliente.data && cliente.data.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (cliente.endereco && cliente.endereco.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (cliente.bairro && cliente.bairro.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (cliente.cidade && cliente.cidade.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (cliente.uf && cliente.uf.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (cliente.cpf_cnpj && cliente.cpf_cnpj.includes(searchTerm.toLowerCase())) ||
    (cliente.inscricao_estadual && cliente.inscricao_estadual.includes(searchTerm.toLowerCase())) ||
    (cliente.fisico_estadual && cliente.fisico_estadual.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  

  return (
    <div className='main-content'>
      <div className='main-header'>
        <label htmlFor="search-bar" className='label-negrito'>Pesquisar</label>
        <input
          id="search-bar"
          type='text'
          className='search-bar'
          placeholder='Busque aqui...'
          value={searchTerm}
          onChange={handleSearch}
        />
        <Link to='/adicionarcliente' className='add-button link-sem-sublinhado'>Adicionar</Link>
      </div>
      <div className='py-4'>
        <table className='table shadow table-hover'>
          <thead>
            <tr>
              <th style={{ width: '10%' }} scope='col'>#</th>
              <th scope='col'>Nome</th>
              <th scope='col'>CPF/CNPJ</th>
              <th style={{ width: '25%' }} scope='col'>Ação</th>
            </tr>
          </thead>
          <tbody>
            {filteredClientes.map((cliente, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{cliente.name}</td>
                <td>{cliente.cpfOuCnpj}</td>
                <td>
                  <Link to={`/vercliente/${cliente.id}`} className='btn btn-primary mx-2'>Ver</Link>
                  <Link to={`/editarcliente/${cliente.id}`} className='btn btn-warning mx-2'>Editar</Link>
                  <button className='btn btn-danger mx-2' onClick={() => deleteCliente(cliente.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
