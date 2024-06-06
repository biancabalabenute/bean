import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeFornecedor() {
  const [fornecedores, setFornecedores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadFornecedores();
  }, []);

  const loadFornecedores = async () => {
    try {
      const result = await axios.get("http://localhost:8080/fornecedores");
      setFornecedores(result.data);
    } catch (error) {
      console.error("Erro ao carregar fornecedores:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteFornecedor = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/fornecedores/${id}`);
      setFornecedores(fornecedores.filter(fornecedor => fornecedor.id !== id));
    } catch (error) {
      console.error("Erro ao excluir fornecedor:", error);
    }
  };

  const filteredFornecedores = fornecedores.filter(fornecedor =>
    fornecedor.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <Link to='/adicionarfornecedor' className='add-button link-sem-sublinhado'>Adicionar</Link>
      </div>
      <div className='py-4'>
        <table className='table shadow table-hover'>
          <thead>
            <tr>
              <th style={{ width: '10%' }} scope='col'>#</th>
              <th scope='col'>Nome</th>
              <th scope='col'>Ação</th>
            </tr>
          </thead>
          <tbody>
            {filteredFornecedores.map((fornecedor, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{fornecedor.name}</td>
                <td>
                  <Link to={`/verfornecedor/${fornecedor.id}`} className='btn btn-primary mx-2'>Ver</Link>
                  <Link to={`/editarfornecedor/${fornecedor.id}`} className='btn btn-warning mx-2'>Editar</Link>
                  <button className='btn btn-danger mx-2' onClick={() => deleteFornecedor(fornecedor.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
